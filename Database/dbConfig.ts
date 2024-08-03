import { DataSource } from "typeorm";
import { Shop } from "./entity/Shop.js";
import { Product } from "./entity/Product.js";
import { Category } from "./entity/Category.js";
import { Hotline } from "./entity/Hotline.js";

const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "final",
    synchronize: true,
    logging: false,
    entities: [shop,Product,Category,Hotline]

})

export default dataSource;