import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"
import { Url} from "url"

@Entity("merchants")
export class Merchant {

    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column()
    name : string

    @Column()
    address : string

    @Column()
    averageRatings : number

    @Column()
    url : string

    @Column()
    logo: string
    
}