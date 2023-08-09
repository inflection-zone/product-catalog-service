import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn } from "typeorm"
import { Merchant } from './merchant.model'
import { Product } from './product.model'


@Entity({ name: 'product_discounts' })
export class ProductDiscounts {


    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Product)
    @JoinColumn({ name: "merchantId" })
    productId: string;
    product: Product;

    @ManyToOne(() => Merchant)
    merchant: Merchant;
    merchantId: string;

    @Column()
    discountType: string

    @Column()
    discount: string

    @Column()
    discountForVolume: string

}
