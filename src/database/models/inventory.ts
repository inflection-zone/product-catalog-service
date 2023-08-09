import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm"
import {Merchant} from "./merchant"
//import {Product} from "./product"

@Entity()
export class Inventory{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    batchNumber : string

    @Column()
    totalStock : number

    @Column()
    currentStock : number

    @Column()
    units : number

    @Column()
    unitsOfMeasure : string

    // @OneToOne( () => (Product))
    // @JoinColumn()
    // productId : Product

    @OneToOne( () => Merchant) //the other argument induces bidirectionality of relation
    @JoinColumn()
    merchantId : Merchant

}