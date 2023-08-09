
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Category } from './category.model';
import { Brand } from './brand.model';
import { ProductOffer } from './product.offer.model';


@Entity({name: 'product'})
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  basePrice: number;

  @Column()
  taxes: number;

  @Column()
  manufacturerName: string;

  @ManyToOne(() => Category, category => category.products) // many prod one category
  category: Category;
  categoryId: string;

  @ManyToOne(() => Brand, brand => brand.products) // many prod one brand
  brand: Brand;
  brandId: string;

  @Column()
  manufacturerPartNumber: string;

  @OneToMany(() => ProductOffer, (productOffer) => productOffer.product) 
  productOffers: ProductOffer[]; 
   
}



