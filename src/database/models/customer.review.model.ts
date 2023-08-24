import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import { Url } from "url"

@Entity()
export class CustomerReview {

    @PrimaryGeneratedColumn('uuid')
    customerReviewId: string

    @Column()
    productId: string

    @Column()
    customerId: string

    @Column()
    VerifiedPurchase: boolean

    @Column()
    Rating: number

    @Column()
    Title: string

    @Column()
    Description: string

    @Column()
    FoundUsefulCount: string

}