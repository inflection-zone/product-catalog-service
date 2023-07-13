import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Url } from "url"

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    customerId: number

    @Column()
    customerName: string

    @Column()
    customerTaxNumber: number

    @Column()
    phone: number

    @Column()
    email: string

    @Column()
    profileImage: Url

}
