import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';//Decorators => Define a estrutura da tabela nesta classe
import Orphanage from './Orphanage';

@Entity('images')//Faz o typeorm realizar a conexão desta classe com a tabela orphanage no DB
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    //Lembre-se que o model é uma referência a tabela e não a 1 item, por isso o relacionamento aq é ManyToOne (várias imagens associadas a 1 orfanato)
    @ManyToOne(() => Orphanage /* Busca o orfanato */, orphanage => orphanage.images/* Após receber o orfanto, qual coluna que deve ser associada */)
    @JoinColumn({ name: 'orphanage_id'})
    orphanage: Orphanage
}

