import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class AddNewUserRolesEntity1648127646974 implements MigrationInterface {
    private TABLE_NAME = 'user_role';
    private IDX_USER_ROLE_NAME = 'user__role__idx';

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
                        name: 'role',
                        type: 'varchar(255)',
                        isNullable: false,
                    },
                    {
                        name: 'user_id',
                        type: 'integer',
                        isNullable: false,
                    },
                ],
            }),
        );

        await queryRunner.createIndex(
            this.TABLE_NAME,
            new TableIndex({
                name: this.IDX_USER_ROLE_NAME,
                columnNames: ['user_id', 'role'],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.TABLE_NAME);
    }
}
