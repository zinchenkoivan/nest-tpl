import { Factory, Seeder } from 'typeorm-seeding';
import { UserEntity } from '../../users/user.entity';

export class CreateUsersSeed implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(UserEntity)().createMany(10);
  }
}
