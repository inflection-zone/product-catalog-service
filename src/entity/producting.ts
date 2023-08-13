import { Entity,PrimaryGeneratedColumn,Column,OneToMany } from "typeorm";
import { productdiscount } from "./productdiscount";
import { customer } from "./customer";

@Entity()
export class productimage{
    @Column()
    imageurl:string

    @OneToMany(() => productdiscount, productid => productid.customer, { eager: true })
    prodcutid: productdiscount[];
    customer: any;
}