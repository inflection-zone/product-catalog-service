import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Url} from "url"

@Entity("merchants")
export class Merchant {

    @PrimaryGeneratedColumn('uuid')
    merchantId : string

    @Column()
    MerchantName : string

    @Column()
    Address : string

    @Column()
    AverageRatings : number

    @Column()
    Url : string

    @Column()
    Logo: string
    
}