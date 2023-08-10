import {Entity, PrimaryGeneratedColumn, Column,ManyToOne, BaseEntity } from 'typeorm'
import { Product } from './product.model';

@Entity({name:'feature'})
export class Feature{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=>Product)
    product: Product

    @Column()
    name: string

    @Column()
    description: string

    @Column({ type: "varchar", length: 255})
    imageUrl: string

}
