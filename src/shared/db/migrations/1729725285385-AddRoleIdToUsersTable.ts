import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
} from "typeorm"

export class AddRoleIdToUsersTable1729725285385 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns(
            'users',
            [
                new TableColumn({
                    name: 'role_id',
                    type: 'uuid',
                    isNullable: true
                })
            ]
        )
        await queryRunner.createForeignKey(
            'users',
            new TableForeignKey(
            {
                name: 'users_roles',
                columnNames: ['role_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'roles',
                onDelete: 'SET NULL'
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('users', 'role_id')
        await queryRunner.dropColumn('users', 'role_id')
    }

}
