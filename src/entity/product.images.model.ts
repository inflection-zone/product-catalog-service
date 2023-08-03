import {Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Product } from './product.model'


@Entity({name: 'product_images'})
export class ProductImages{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=>Product)
    product: Product

    @Column({ type: "varchar", length: 255})
    imageUrl: string

}