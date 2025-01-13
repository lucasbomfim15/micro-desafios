import { Module } from '@nestjs/common';

import { PartidasModule } from './partidas/partidas.module';
import { DesafiosModule } from './desafios/desafios.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProxyRMQModule } from './proxyrmq/proxyrmq.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin_sr:kdWcpu1jWvUSlU6Y@clustermogodb-79l5n.mongodb.net/srdesafios?retryWrites=true&w=majority',
    ),
    PartidasModule,
    DesafiosModule,
    ProxyRMQModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
