import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class UpdateBitGridSchema1745779877069 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Drop the existing table since we're completely changing the schema
        // and the old data structure is incompatible with the new one
        await queryRunner.query(`DROP TABLE IF EXISTS "bit_grids" CASCADE`);

        // Create the new table with updated schema
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
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            }),
            true
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS "bit_grids" CASCADE`);
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
                        name: "name",
                        type: "varchar",
                        isNullable: false
                    },
                    {
                        name: "grid",
                        type: "boolean[][]",
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            }),
            true
        );
    }
}
