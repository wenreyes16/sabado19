import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from './entities/product.entities';

@Module({
    imports: [
        TypeOrmModule.forFeature([Product])
    ],
    exports: [
        TypeOrmModule.forRoot({
            autoLoadEntities: true,
        })
    ],
    controllers: [],
    providers:[],
})
export class ProductsModule {}