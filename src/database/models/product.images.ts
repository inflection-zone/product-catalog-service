import {Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Product } from './product'
import {Url} from 'url'

@Entity()
export class ProductImages{

    @PrimaryGeneratedColumn('uuid')
    id: number

    @ManyToOne(()=>Product)
    productId: Product

    @Column()
    imageUrl: string

}