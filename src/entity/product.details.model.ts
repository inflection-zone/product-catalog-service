import {Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import {Product} from './product.model'

@Entity({name: 'product_details'})
export class ProductDetails{

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @ManyToOne(() => Product)
    product: Product;
    productId : string;

    @Column()
    information: string

    @Column()
    additionalInformation: string
    
    @Column()
    technicalDetails: string
    
    @Column()
    partNumber: string
    
    @Column()
    modelNumber: string
    
    @Column()
    countryOfOrigin: string
    
    @Column()
    itemWeight: number
    
    @Column()
    itemDimensions: string
    
    @Column()
    packItemCount: number

}
