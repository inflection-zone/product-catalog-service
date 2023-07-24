import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm'
import { Product} from "./product"
import {Feature} from "./feature"

@Entity()
export class ProductFeatures{

    @PrimaryGeneratedColumn('uuid')
    id: number

    @ManyToOne(() => Product)
    @JoinColumn()
    productId: Product

    @OneToMany(()=> Feature, (feature)=>feature.id) //feature.id? isn't it many features to one product
    featureId: Feature

}