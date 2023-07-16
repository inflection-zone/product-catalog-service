import {Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'

@Entity()
export class Category{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @ManyToOne(() => Category)
    parentCategoryId: Category

}