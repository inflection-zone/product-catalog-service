import { Entity,PrimaryGeneratedColumn,Column,OneToMany } from "typeorm";
import { customer } from "./customer";

@Entity()
export  class productdiscount{
    @OneToMany(() => productdiscount, productid => productid.customer, { eager: true })
    prodcutid: productdiscount[];
    customer: any;

    @Column()
    merchantid:number

    @Column()
    discounttype:string

    @Column()
    discount:string
    static merchantid: any;
    static discounttype: any;
    static prodcutid: any;
    static discount: any;
    static discountforvolume: any;
}