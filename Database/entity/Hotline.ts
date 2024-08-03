import { BaseEntity,Column, PrimaryGeneratedColumn,Entity, OneToMany, OneToOne } from "typeorm";
import { Shop } from "./Shop.js";
import { Category } from "./Category.js";

@Entity("hotline")
export class Hotline extends BaseEntity{
    


    @PrimaryGeneratedColumn("increment")
    id:number
    @Column({length:255})
    hotlineNumber:string

    @OneToOne(()=>Shop, (shop) => shop.Hotline)
    shop:Shop
    
    

}