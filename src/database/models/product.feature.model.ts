import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm'
import { Feature } from './feature.model';
@Entity({name:'product_feature'})
export class ProductFeatures{

    @PrimaryGeneratedColumn('uuid')
    productFeatureid: string;

//     @ManyToOne(() => Product) 
//   @JoinColumn({name: "ProductId"})
//   ProductId: Product;
    @Column()
    ProductId: string

    @ManyToOne(()=>Feature)
    @JoinColumn({name: "FeatureId"})
    FeatureId: Feature

    }
    
   