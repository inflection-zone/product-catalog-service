import {Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import {Product} from './Product'

@Entity()
export class ProductOffer{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    details: string

    @OneToOne(()=>Product)
    productId: Product

}