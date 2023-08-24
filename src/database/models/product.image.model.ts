import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import { Url } from "url"

@Entity()
export class ProductImage {

    @PrimaryGeneratedColumn('uuid')
    productImageId: string

    @Column()
    ImageUrl: string

}