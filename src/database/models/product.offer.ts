import {Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import {Product} from './product'

@Entity()
export class ProductOffer{

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    title: string

    @Column()
    details: string

    @OneToOne(()=>Product)
    productId: Product

}