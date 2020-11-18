import { Module } from '@nestjs/common';
import { NuxtController } from './client.controller';

@Module({
  imports: [],
  controllers: [ NuxtController ],
  providers: [],
})
export class NuxtModule {}
