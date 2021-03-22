import { IsMongoId } from 'class-validator';
import { ObjectId } from 'mongodb';

export class FindTodoParamsDto {
  @IsMongoId()
  id: ObjectId;
}
