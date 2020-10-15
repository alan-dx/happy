import { Entity, Column, PrimaryGeneratedColumn,OneToMany, JoinColumn } from 'typeorm';//Decorators => Define a estrutura da tabela nesta classe
import Image from './Image';

@Entity('orphanages')//Faz o typeorm realizar a conexão desta classe com a tabela orphanage no DB
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;
    
    @Column()
    about: string;

    @Column()
    instructions: string;

    @Column()
    opening_hours: string;

    @Column()
    open_on_weekends: boolean;

    //Não precisa do Column, pois não é uma coluna da tabela isso será usado apenas pra fazer o relacionamento
    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert', 'update']//Para atualizar as imagens em um insert ou update
    })
    @JoinColumn({ name: 'orphanage_id'})
    images: Image[]
}

