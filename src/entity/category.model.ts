import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Product } from "./product.model";

@Entity({name: 'category'})
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Category)   // many child one category
  parentCategory: Category;
  parentCategoryId: string;

  @OneToMany (() => Product, (product) => product.category)
  products: Product[];
 

}