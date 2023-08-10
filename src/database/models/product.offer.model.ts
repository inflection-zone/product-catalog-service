import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product.model';


@Entity({name:'product_offer'})  //snake_case 
export class ProductOffer {      //camel_case
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Product, (product)=> product.productOffers) // many productOff one prod
  product: Product;
  productId: string;

  @Column()
  title: string;

  @Column()
  details: string;
  
}

