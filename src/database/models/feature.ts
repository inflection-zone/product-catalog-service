import {Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import { Url } from 'url'

@Entity()
export class Feature{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    imageUrl: Url

}