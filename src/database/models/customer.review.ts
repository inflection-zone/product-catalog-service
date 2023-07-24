import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany, OneToOne, BaseEntity} from "typeorm"
import { Customer } from './customer'
import { Product } from './product'


@Entity() 
export class CustomerReview{

    @PrimaryGeneratedColumn('uuid')
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