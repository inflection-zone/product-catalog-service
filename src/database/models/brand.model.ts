import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Product } from './product.model';

@Entity({name: 'brand'})
export class Brand {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  Name: string;

  @Column({ type: "varchar", length: 255})
  LogoUrl: string;

  @OneToMany(()=> (Brand), (product) =>product.id) 
  BrandId:Brand[];
}
