import { Module } from '@nestjs/common';

import { PartidasModule } from './partidas/partidas.module';
import { DesafiosModule } from './desafios/desafios.module';
import { ProxyrmqModule } from './proxyrmq/proxyrmq.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin_sr:kdWcpu1jWvUSlU6Y@clustermogodb-79l5n.mongodb.net/srdesafios?retryWrites=true&w=majority',
    ),
    PartidasModule,
    DesafiosModule,
    ProxyrmqModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
