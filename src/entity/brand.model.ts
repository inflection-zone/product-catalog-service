import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './product.model';

@Entity({name: 'brand'})
export class Brand {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: "varchar", length: 255})
  logoUrl: string;

  @OneToMany(()=> Product, (product) => product.brand)
  products:Product[];
}
