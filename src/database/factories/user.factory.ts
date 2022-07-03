import * as Faker from 'faker';
import * as bcrypt from 'bcrypt';
import { define } from 'typeorm-seeding';
import { UserEntity } from '../../users/user.entity';

define(UserEntity, (faker: typeof Faker) => {
  const user = new UserEntity();
  user.email = `${faker.random.word()}@gmail.com`;
  user.password = bcrypt.hashSync(faker.random.word(), bcrypt.genSaltSync(10));
  return user;
});
