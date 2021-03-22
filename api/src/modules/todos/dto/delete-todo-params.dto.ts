import { IsMongoId } from 'class-validator';
import { ObjectId } from 'mongodb';

export class DeleteTodoParamsDto {
  @IsMongoId()
  id: ObjectId;
}
