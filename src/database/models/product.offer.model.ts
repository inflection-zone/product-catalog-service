import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product.model';


@Entity({name:'product_offer'})   
export class ProductOffer {      
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Product) // many productOff one prod
  @JoinColumn({name: "ProductId"})
  ProductId: Product;

  @Column()
  Title: string;

  @Column()
  Details: string;
  
}