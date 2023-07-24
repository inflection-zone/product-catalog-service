import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Url} from "url"

@Entity("merchants")
export class Merchant {

    @PrimaryGeneratedColumn('uuid')
    merchantId : number

    @Column()
    name : string

    @Column()
    address : string

    @Column()
    averageRatings : number

    @Column()
    merchantUrl : string

    @Column()
    logo: string
    
}