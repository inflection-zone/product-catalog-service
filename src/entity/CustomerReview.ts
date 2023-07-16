import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany, OneToOne} from "typeorm"
import { Customer } from './Customer'
import { Product } from './Product'


@Entity() 
export class CustomerReview{

    @PrimaryGeneratedColumn()
    id : number

    @OneToOne(()=>Product)
    productId: Product

    @OneToOne(()=>Customer)
    customerId: Customer

    @Column()
    verifiedPurchase: boolean

    @Column()
    rating: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    foundUsefulCount: number
    
}