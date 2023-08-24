import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm'
import { Product } from './product.model';

@Entity({name: 'product_details'})
export class ProductDetails{

    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    //@ManyToOne(() => Product) 
   // @JoinColumn({name: "ProductId"})
    //ProductId: Product;
    @Column()
    ProductId:string;

    @Column()
    Information: string

    @Column()
    AdditionalInformation: string
    
    @Column()
    TechnicalDetails: string
    
    @Column()
    PartNumber: string
    
    @Column()
    ModelNumber: string
    
    @Column()
    CountryOfOrigin: string
    
    @Column()
    ItemWeight: number
    
    @Column()
    ItemDimensions: string
    
    @Column()
    PackItemCount: number

}