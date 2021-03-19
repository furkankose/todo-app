import { Module } from '@nestjs/common';
import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(process.cwd(), '.env') });

@Module({
  imports: [],
})
export class AppModule {}
