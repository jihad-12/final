import { BaseEntity,Column, PrimaryGeneratedColumn,Entity, OneToMany, OneToOne, ManyToMany, JoinTable } from "typeorm";
import { Shop } from "./Shop.js";
import { Product } from "./Product.js";
@Entity("catedory")
export class Category extends BaseEntity{
     

    @PrimaryGeneratedColumn("increment")
    id:number
    @Column({length:255})
    name:string
    shop: any;

    @ManyToMany(()=> Product, (product) => product.Categories)
    @JoinTable(
        {
            "name": "products_categories"
        }
    )
    products :Product[]



}