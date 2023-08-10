import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany, ManyToOne } from 'typeorm'
import { Product} from "./product.model"
import {Feature} from "./feature.model"

@Entity({name:'product_feature'})
export class ProductFeatures{

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(()=>Product)
    product: Product
    productId : string;

    @ManyToOne(()=>Feature)
    feature: Feature
    featureId : string;


}