import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne} from "typeorm"
import { Merchant } from './Merchant'


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

    @ManyToOne(() => (Merchant))
    merchantId: Merchant

    //Product id many to many relationship pending
}