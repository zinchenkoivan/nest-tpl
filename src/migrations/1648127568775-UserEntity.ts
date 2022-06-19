import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class UserEntity1648127568775 implements MigrationInterface {
    private TABLE_NAME = 'user';
    private IDX_USER_NAME = 'user__name__idx';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: this.TABLE_NAME,
                columns: [
                    {
                        name: 'id',
                        type: 'integer',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: '_version',
                        type: 'integer',
                        isNullable: false,
                    },
                    {
                        name: '_created_by',
                        type: 'varchar(255)',
                        isNullable: true,
                    },
                    {
                        name: '_created_at',
                        type: 'timestamptz',
                        isNullable: true,
                    },
                    {
                        name: '_updated_by',
                        type: 'varchar(255)',
                        isNullable: true,
                    },
                    {
                        name: '_updated_at',
                        type: 'timestamptz',
                        isNullable: true,
                    },
                    {
                        name: 'username',
                        type: 'varchar(255)',
                        isUnique: true,
                        isNullable: false,
                    },
                    {
                        name: 'given_name',
                        type: 'varchar(255)',
                        isNullable: false,
                    },
                    {
                        name: 'family_name',
                        type: 'varchar(255)',
                        isNullable: false,
                    },
                    {
                        name: 'email',
                        type: 'varchar(255)',
                        isNullable: false,
                    },
                    {
                        name: 'is_enabled',
                        type: 'boolean',
                        isNullable: false,
                    },
                ],
            }),
        );

        await queryRunner.createIndex(
            this.TABLE_NAME,
            new TableIndex({
                name: this.IDX_USER_NAME,
                columnNames: ['username'],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropIndex(this.TABLE_NAME, this.IDX_USER_NAME);
        await queryRunner.dropTable(this.TABLE_NAME);
    }
}
