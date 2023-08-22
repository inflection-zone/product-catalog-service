import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { Product } from "./product.model";

@Entity({name: 'category'})
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  Name: string;

  @Column()
  Description: string;

  @ManyToOne(() => Category)   // many child one category
  @JoinColumn({name:"ParentCategoryId"})
  ParentCategoryId: Category;
  

  @OneToMany(()=> (Category), (product) =>product.id) 
  CategoryId:Category[];

}