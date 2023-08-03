import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn} from "typeorm"
import {Customer} from "./customer.model"
import { Product } from "./product.model"


@Entity({name:'customer_review'}) 
export class CustomerReview{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=>Product)
    product: Product

    @ManyToOne(()=>Customer)
    @JoinColumn({name: "customerId"})
    customer: Customer

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