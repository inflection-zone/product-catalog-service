import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm'
import { Feature } from './feature';
@Entity({name:'product_feature'})
export class ProductFeature{

    @PrimaryGeneratedColumn('uuid')
    productFeatureid: string;

//     @ManyToOne(() => Product) 
//   @JoinColumn({name: "ProductId"})
//   ProductId: Product;
    @Column()
    productId: string

    @ManyToOne(()=>Feature)
    @JoinColumn({name: "FeatureId"})
    featureId: Feature


}