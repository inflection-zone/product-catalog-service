import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import { Url } from "url"

@Entity({name:'customer'})
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

    @Column({ type: "varchar", length: 255})
    profileImage: string
}
