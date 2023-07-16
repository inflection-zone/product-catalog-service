import {Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Url } from 'url'

@Entity()
export class Brand{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    logoUrl: Url

}