import { Module } from '@nestjs/common';
import { GetdbService } from './getdb.service';
import { GetdbController } from './getdb.controller';
import { createConnection } from 'mysql2/promise';
import { databaseConfig } from './entities/database.config';

@Module({
  controllers: [GetdbController],
  providers: [
    GetdbService,
    {
      provide: 'MYSQL_CONNECTION',
      useFactory: async () => await createConnection(databaseConfig),
    },
  ],
  exports: ['MYSQL_CONNECTION'],
})
export class GetdbModule {}