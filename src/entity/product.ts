import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm"
import {Customer} from "./customer"

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    productName: string

    @OneToOne(()=> Customer)
    @JoinColumn()
    customerId: Customer
}