import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class InitialMigration1745779877069 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Create the initial bit_grids table
        await queryRunner.createTable(
            new Table({
                name: "bit_grids",
                columns: [
                    {
                        name: "_id",
                        type: "uuid",
                        isPrimary: true,
                        generationStrategy: "uuid",
                        default: "uuid_generate_v4()"
                    },
                    {
                        name: "aiArtUrl",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "author",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "composition",
                        type: "jsonb",
                        isNullable: false
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "palette",
                        type: "jsonb",
                        isNullable: false
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: "now()",
                        isNullable: false
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("bit_grids");
    }
}
