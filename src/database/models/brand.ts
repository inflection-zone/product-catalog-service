import {Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'
import { Url } from 'url'

@Entity()
export class Brand {

    @PrimaryGeneratedColumn('uuid')
    id: number

    @Column()
    name: string

    @Column()
    logoUrl: string

}