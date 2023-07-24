import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from 'typeorm'
import {Category} from "./category"
import {Brand} from "./brand"

@Entity()
export class Product{

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @OneToMany(()=> (Category), (category)=>category.id)
    category: Category[]

    @OneToOne(() => (Brand))
    brandId: Brand

    @Column()
    basePrice: number

    @Column()
    taxes: number

    @Column()
    manufacturerName: string

    @Column()
    manufacturerPartNumber: number
    
}