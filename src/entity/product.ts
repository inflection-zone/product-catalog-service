
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Category } from './category';
import { Brand } from './brand';
import { ProductOffer } from './productOffer';


@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Category) // many prod one category
  category: Category;

  @ManyToOne(() => Brand) // many prod one brand
  brand: Brand;

  @Column()
  basePrice: number;

  @Column()
  taxes: number;

  @Column()
  manufacturerName: string;

  @Column()
  manufacturerPartNumber: string;

  @OneToMany(() => ProductOffer, (productOffer:any) => productOffer.products) 
  product: ProductOffer[];
}



