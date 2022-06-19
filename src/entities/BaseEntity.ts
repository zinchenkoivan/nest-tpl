import { PrimaryGeneratedColumn, VersionColumn, CreateDateColumn, UpdateDateColumn, Column } from 'typeorm';
import { IsInt, Min, IsOptional, IsDate, IsString, Length } from 'class-validator';

export abstract class BaseEntity {
    constructor(properties?: any) {
        if (properties) {
            Object.assign(this, properties);

            this._createdAt = new Date(properties._created_at || new Date());
            this._updatedAt = new Date(properties._updated_at || new Date());
        }
    }

    @PrimaryGeneratedColumn()
    @IsInt()
    @Min(0)
    @IsOptional()
    id?: number;

    @VersionColumn({
        name: '_version',
    })
    @IsInt()
    @Min(0)
    @IsOptional()
    _version?: number;

    @CreateDateColumn({
        name: '_created_at',
    })
    @IsDate()
    @IsOptional()
    _createdAt?: Date;

    @Column({
        name: '_created_by',
    })
    @IsString()
    @Length(0, 255)
    @IsOptional()
    _createdBy?: string;

    @UpdateDateColumn({
        name: '_updated_at',
    })
    @IsDate()
    @IsOptional()
    _updatedAt?: Date;

    @Column({
        name: '_updated_by',
    })
    @IsString()
    @Length(0, 255)
    @IsOptional()
    _updatedBy?: string;
}
