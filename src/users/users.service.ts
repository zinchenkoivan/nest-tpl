import * as bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { FindConditions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import {
  UserAlreadyExistsException,
  UserNotFoundException,
} from './users.exceptions';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  findOne(conditions: FindConditions<UserEntity>): Promise<UserEntity> {
    return this.userRepository.findOne(conditions);
  }

  async create(createUserDto: CreateUserDto) {
    const exists = await this.findOne({ email: createUserDto.email });
    if (exists) {
      throw new UserAlreadyExistsException();
    }
    const user = this.userRepository.create({
      ...createUserDto,
      //TODO move salt round to constants
      password: await bcrypt.hash(
        createUserDto.password,
        await bcrypt.genSalt(10),
      ),
      isActive: false,
    });

    return this.userRepository.save(user);
  }

  async toggleActive(id: string, isActive = true) {
    const user = await this.findOne({ id });
    if (!user) {
      throw new UserNotFoundException();
    }
    user.isActive = isActive;
    return this.userRepository.save(user);
  }
}
