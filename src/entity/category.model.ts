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
  @JoinColumn ({name: "parentCategoryId"})
  parentCategory: Category;

  @OneToMany (() => Product, (product) => product.category)
  products: Product[];
    parentCategoryId: number;

}