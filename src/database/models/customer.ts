import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import { Url } from "url"

@Entity()
export class Customer {

    @PrimaryGeneratedColumn('uuid')
    customerId: string

    @Column()
    CustomerName: string

    @Column()
    CustomerTaxNumber: string

    @Column()
    Phone: number

    @Column()
    Email: string

    @Column()
    ProfileImage: string

    @Column()
    Password: string

}
