import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import { Url } from "url"

@Entity()
export class Customer {

    @PrimaryGeneratedColumn('uuid')
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
    profileImage: string

}
