import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import { Url } from "url"

@Entity()
export class ProductDiscount {

    @PrimaryGeneratedColumn('uuid')
    productDiscountId: string

    @Column()
    productId: string

    @Column()
    merchantId: string

    @Column()
    DiscountType: string

    @Column()
    Discount: number

    @Column()
    DiscountForVolume: number

}