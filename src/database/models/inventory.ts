import {Entity, Column, OneToOne, JoinColumn} from "typeorm"
import {Merchant} from "./merchant"
import {Product} from "./product"

@Entity()
export class Inventory{

    @Column()
    batchNumber : number

    @Column()
    totalStock : number

    @Column()
    currentStock : number

    @Column()
    units : number

    @Column()
    unitsOfMeasure : number

    @OneToOne( () => (Product))
    @JoinColumn()
    productId : Product

    @OneToOne( () => Merchant) //the other argument induces bidirectionality of relation
    @JoinColumn()
    merchantId : Merchant

}