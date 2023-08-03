import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn} from "typeorm"
import { Merchant } from './merchant.model'
import { Product } from './product.model'


@Entity({name: 'product_discounts'}) 
export class ProductDiscounts{

    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Product)
    @JoinColumn({name: "merchantId"})
    product: Product;

    @ManyToOne(() => Merchant)
    merchant: Merchant;

    @Column()
    discountType: string

    @Column()
    discount: number

    @Column()
    discountForVolume: number
    
}
