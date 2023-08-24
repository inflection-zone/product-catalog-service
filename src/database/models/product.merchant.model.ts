import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany, OneToOne} from "typeorm"
import { Merchant } from "./merchant.model"
//import { Product } from './product'


@Entity() 
export class ProductMerchant{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    MerchantPrice : number

    @Column()
    Taxes : number

    @Column()
    IncludeShipping: boolean

    @Column()
    ShippingCharges: number


    @OneToMany(() => (Merchant), (product)=>product.merchantId)
    merchantId: Merchant[]

    // @OneToOne(() => (Product))
    // productId: Product
    
}