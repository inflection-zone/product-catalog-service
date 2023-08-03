import {Entity, Column, OneToOne, ManyToOne,PrimaryGeneratedColumn, JoinColumn} from "typeorm"
import {Merchant} from "./merchant.model"
import {Product} from "./product.model"

@Entity({name:'inventory'})
export class Inventory{

    @PrimaryGeneratedColumn('uuid')
    id: string;

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

    @ManyToOne(()=>Product)
    product: Product

    @ManyToOne(() => Merchant)
    @JoinColumn({name: "merchantId"})
    merchant: Merchant;

}
