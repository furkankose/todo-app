import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { resolve } from 'path';

import { TodosModule } from './todos/todos.module';

config({ path: resolve(process.cwd(), '.env') });

@Module({
  imports: [
    MongooseModule.forRoot(process.env.TODO_MONGODB_CONNECTION_STRING, {
      useFindAndModify: false,
    }),
    TodosModule,
  ],
})
export class AppModule {}
