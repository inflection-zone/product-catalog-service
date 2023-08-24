import {Entity, PrimaryGeneratedColumn, Column,ManyToOne, BaseEntity, JoinColumn } from 'typeorm'
import { ProductFeatures } from './product.feature.model';

@Entity({name:'feature'})
export class Feature{

    @PrimaryGeneratedColumn('uuid')
//     @ManyToOne(() => ProductFeatures) 
//    @JoinColumn({name: "FeatureId"})
//     FeatureId: ProductFeatures;
    id: string;

    @Column()
    Name: string

    @Column()
    Description: string

    @Column({ type: "varchar", length: 255})
    ImageUrl: string

}
