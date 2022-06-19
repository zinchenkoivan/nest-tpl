import { Entity, Column, JoinColumn, ManyToOne } from 'typeorm';
import { IsOptional, IsInt, Min, IsDefined, IsString, Length, IsIn } from 'class-validator';

import { User } from './User';
import { BaseEntity } from './BaseEntity';
import { Role } from '../common/enums';

@Entity({
    name: 'user_role',
})
export class UserRole extends BaseEntity {
    constructor(properties?: any) {
        super(properties);

        if (properties) {
            if (properties.user) {
                this.user = new User(properties.user);
            }
        }
    }

    @Column({
        name: 'role',
        type: 'varchar'
    })
    @IsString({
        message: 'UserRole.role is not a string',
    })
    @Length(1, 255, {
        message: 'UserRole.role could not be less than zero',
    })
    @IsDefined({
        message: 'User.role should have a length of 1-255 chars',
    })
    @IsIn(Object.values(Role), {
        message: `User.role should be one of the following: ${Object.values(Role).join(', ')}`,
    })
    role?: Role;

    @Column({
        name: 'user_id',
    })
    @IsInt({
        message: 'UserRole.userId is not an integer number',
    })
    @Min(0, {
        message: 'UserRole.userId could not be less than zero',
    })
    @IsDefined({
        message: `UserRole.userId is missing`,
    })
    userId?: number;

    @ManyToOne((type) => User, (user) => user.userRoles, {
        persistence: false,
    })
    @JoinColumn({
        name: 'user_id',
    })
    @IsOptional()
    user?: User;
}
