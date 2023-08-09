import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import { Url } from "url"

@Entity()
export class Customer {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    customerName: string

    @Column()
    customerTaxNumber: string

    @Column()
    phone: number

    @Column()
    email: string

    @Column()
    profileImage: string

}
