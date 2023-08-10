import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity({name: 'merchant'})
export class Merchant {

    @PrimaryGeneratedColumn()
    merchantId : number

    @Column()
    name : string

    @Column()
    address : string

    @Column()
    averageRatings : number

    @Column({ type: "varchar", length: 255})
    merchantUrl : string

    @Column({ type: "varchar", length: 255})
    logo: string
    
}
