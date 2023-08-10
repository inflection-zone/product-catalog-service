import {Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, OneToMany, OneToOne} from "typeorm"
import { Merchant } from './merchant.model'
import { Product } from './product.model'


@Entity({name: 'product_merchant'}) 
export class ProductMerchant{

    
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Product)
    product: Product;

    @ManyToOne(() => Merchant)
    @JoinColumn({name: "merchantId"})
    merchant: Merchant;

    @Column()
    merchantPrice : number

    @Column()
    taxes : number

    @Column()
    includeShipping: boolean

    @Column()
    shippingCharges: number

    
    
}
