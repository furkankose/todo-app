import { IsMongoId } from 'class-validator';
import { ObjectId } from 'mongodb';

export class UpdateTodoParamsDto {
  @IsMongoId()
  id: ObjectId;
}
