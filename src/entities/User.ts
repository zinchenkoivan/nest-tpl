import { Entity, Column, OneToMany } from 'typeorm';
import { IsString, Length, IsEmail, IsBoolean, IsArray, IsOptional } from 'class-validator';

import { UserRole } from './UserRole';
import { BaseEntity } from './BaseEntity';

const ENTITY_NAME = 'user';

@Entity({
    name: ENTITY_NAME,
})
export class User extends BaseEntity {
    public static ENTITY_NAME = ENTITY_NAME;

    constructor(properties?: any) {
        super(properties);
        if (properties?.userRoles) {
            this.userRoles = properties.userRoles.map((i: any) => new UserRole(i));
        }
    }

    //User username
    @Column({
        name: 'username',
    })
    @IsString({
        message: 'User.username should be a string',
    })
    @Length(1, 255, {
        message: 'User.username should have a length of 1-255 chars',
    })
    username?: string;

    //User given name
    @Column({
        name: 'given_name',
    })
    @IsString({
        message: 'User.givenName should be a string',
    })
    @Length(1, 255, {
        message: 'User.givenName should have a length of 1-255 chars',
    })
    givenName?: string;

    //User family name
    @Column({
        name: 'family_name',
    })
    @IsString({
        message: 'User.familyName should be a string',
    })
    @Length(1, 255, {
        message: 'User.familyName should have a length of 1-255 chars',
    })
    familyName?: string;

    //User email
    @Column({
        name: 'email',
    })
    @IsEmail({}, { message: 'Invalid email' })
    email?: string;

    @Column({
        name: 'is_enabled',
    })
    @IsBoolean({
        message: 'User.isEnabled is not an boolean value',
    })
    isEnabled?: boolean;

    @OneToMany((type) => UserRole, (userRole) => userRole.user, {
        persistence: false,
    })
    @IsArray()
    @IsOptional()
    userRoles?: UserRole[];
}
