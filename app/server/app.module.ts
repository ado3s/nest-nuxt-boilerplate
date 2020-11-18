import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { NuxtModule } from '@/server/shared';

const MODULES = [ UserModule, NuxtModule ]

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URL),
    ...MODULES
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
