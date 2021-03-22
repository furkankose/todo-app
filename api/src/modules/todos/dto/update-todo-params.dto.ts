import { IsMongoId } from 'class-validator';
import { ObjectId } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoParamsDto {
  @ApiProperty()
  @IsMongoId()
  id: ObjectId;
}
