import { BaseEntity,Column, PrimaryGeneratedColumn,Entity, OneToMany, OneToOne, ManyToOne, ManyToMany } from "typeorm";
import { Shop } from "./Shop.js";
import {Category}from"./Category.js"

@Entity("product")
export class Product extends BaseEntity{
    
    @PrimaryGeneratedColumn("increment")
    id:number
    @Column({length:255})
    name:string

    @Column({length:255})
    price:string

    @ManyToOne(()=> Shop, (shop) => shop.products)
    shop :Shop

    @ManyToMany(()=>Category, (Category)=>Category.shop)
    Categories:Category[]

    
}