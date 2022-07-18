import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { OrdersModule } from './orders/orders.module';
import { FavoritesModule } from './favorites/favorites.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [UsersModule, ProductsModule, CategoriesModule, OrdersModule, FavoritesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
