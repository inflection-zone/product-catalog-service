import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from './product';


@Entity()
export class ProductOffer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Product) // many productOff one prod
  @JoinColumn({name:'product_Id'})
  product: Product;

  @Column()
  title: string;

  @Column()
  details: string;
  
}

