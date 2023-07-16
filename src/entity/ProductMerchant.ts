import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany, OneToOne} from "typeorm"
import { Merchant } from './Merchant'
import { Product } from './Product'


@Entity() 
export class ProductMerchant{

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