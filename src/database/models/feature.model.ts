import {Entity, PrimaryGeneratedColumn, Column,ManyToOne, BaseEntity, JoinColumn } from 'typeorm'
import { ProductFeatures } from './product.feature.model';
import { uuid } from '../../domain types/miscellaneous/system.types';

@Entity({name:'feature'})
export class Feature{

    @PrimaryGeneratedColumn('uuid')
//     @ManyToOne(() => ProductFeatures) 
//    @JoinColumn({name: "FeatureId"})
//     FeatureId: ProductFeatures;
    featureId: uuid;

    @Column()
    Name: string

    @Column()
    Description: string

    @Column({ type: "varchar", length: 255})
    ImageUrl: string

}
   