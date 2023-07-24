import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany, OneToOne} from "typeorm"
import { Merchant } from './merchant'
import { Product } from './product'


@Entity() 
export class ProductMerchant{

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    merchantPrice : number

    @Column()
    taxes : number

    @Column()
    includeShipping: boolean

    @Column()
    shippingCharges: number

    @OneToMany(() => (Merchant), (product)=>product.merchantId)
    merchantId: Merchant[]

    @OneToOne(() => (Product))
    productId: Product
    
}