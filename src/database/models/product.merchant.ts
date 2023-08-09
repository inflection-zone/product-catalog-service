import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany, OneToOne} from "typeorm"
import { Merchant } from './merchant'
//import { Product } from './product'


@Entity() 
export class ProductMerchant{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    merchantPrice : number

    @Column()
    taxes : number

    @Column()
    includeShipping: boolean

    @Column()
    shippingCharges: number

    // @OneToMany(() => (Merchant), (product)=>product.id)
    // merchantId: Merchant[]

    // @OneToOne(() => (Product))
    // productId: Product
    
}