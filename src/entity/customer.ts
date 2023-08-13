
import { Entity, PrimaryGeneratedColumn, Column ,OneToMany} from "typeorm";
import { productdiscount } from "./productdiscount";

@Entity()
export class customer {

    @PrimaryGeneratedColumn()
    id: number

    @OneToMany(() => customer, productid => productid.customer, { eager: true })
    prodcutid: customer[];
    customer: any;

    @Column()
    customerid: number

    @Column()
    verifiedpurchase: string

    @Column()
    rating: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    foundusefulcount: number
    static id: any;
    static prodcutid: any;
    static customerid: any;
    static verifiedpurchase: any;
    static rating: any;
    static description: any;
    static foundusefulcount: any;
}
