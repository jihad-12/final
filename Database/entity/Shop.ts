import { BaseEntity,Column, PrimaryGeneratedColumn,Entity, OneToMany, OneToOne, BeforeInsert } from "typeorm";
import { Product } from "./Product.js";
import { Hotline } from "./Hotline.js";
import  bcrypt from 'bcrypt';




@Entity("shop")
export class Shop extends BaseEntity{
    
    @PrimaryGeneratedColumn("increment")
    id:number
    @Column({length:255})
    shopname:string

    @Column({length:255})
    email:string

    @Column({length:255})
    password:string


    @OneToMany(()=> Product, (Product) => Product.shops)
    products:Product[]


    @OneToOne(()=>Hotline, (Hotline) => Hotline.shop)
    Hotline: any;
    Category: any;

    @BeforeInsert()
    async hashPassword() {
      this.password = await bcrypt.hash(this.password, 10);}

}