import {Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm'
import {Product} from './product'

@Entity()
export class ProductDetails{
    
    @PrimaryGeneratedColumn('uuid')
    id: number

    @OneToOne(()=>Product)
    productId: Product

    @Column()
    information: string

    @Column()
    additionalInformation: string
    
    @Column()
    technicalDetails: string
    
    @Column()
    partNumber: number
    
    @Column()
    modelNumber: number
    
    @Column()
    countryOfOrigin: string
    
    @Column()
    itemWeight: number
    
    @Column()
    itemDimensions: string
    
    @Column()
    packItemCount: number

}