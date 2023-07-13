import {Entity, Column, OneToOne, JoinColumn} from "typeorm"
import {Merchant} from "./Merchant"

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

    @OneToOne( () => ..)
    @JoinColumn()
    productId : //

    @OneToOne( () => Merchant) //the other argument induces bidirectionality of relation
    @JoinColumn()
    merchantId : Merchant

}