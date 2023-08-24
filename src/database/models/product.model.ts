import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Category } from './category.model';
import { Brand } from './brand.model';
import { ProductOffer } from './product.offer.model';


@Entity({name: 'product'})
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  Name: string;

  @Column()
  Description: string;

  @Column()
  BasePrice: number;

  @Column()
  Taxes: number;

  @Column()
  ManufacturerName: string;

  @ManyToOne(() => Category) // many prod one category
  @JoinColumn({name: "CategoryId"})
  CategoryId: Category;

  @ManyToOne(() => Brand) // many prod one brand
  @JoinColumn({name: "BrandId"})
  BrandId: Brand;
  

  @Column()
  ManufacturerPartNumber: string;

  @OneToMany(()=> (ProductOffer), (product) =>product.id) 
  ProductOfferId:ProductOffer[]; 
    static Name: any;
   
}