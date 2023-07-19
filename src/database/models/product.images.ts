import {Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Product } from './product'
import {Url} from 'url'

@Entity()
export class ProductImages{

    @ManyToOne(()=>Product)
    productId: Product

    @Column()
    imageUrl: Url

}