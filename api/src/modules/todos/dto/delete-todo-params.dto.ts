import { IsMongoId } from 'class-validator';
import { ObjectId } from 'mongodb';
import { ApiProperty } from '@nestjs/swagger';

export class DeleteTodoParamsDto {
  @ApiProperty()
  @IsMongoId()
  id: ObjectId;
}
