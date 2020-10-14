import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602694621056 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'images',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'path',
                    type: 'varchar'
                },
                {
                    name: 'orphanage_id',
                    type: 'integer'
                }
            ],
            foreignKeys:[
                {
                    name: "ImageOrphanage",
                    columnNames: ['orphanage_id'],//Referencia da coluna do id da imagem
                    referencedTableName:'orphanages',
                    referencedColumnNames: ['id'],//Referência da columna do alvo que ele deve se associar
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('images')
    }

}
