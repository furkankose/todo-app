import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export type TodoDocument = Todo & mongoose.Document;

@Schema()
export class Todo {
  @Prop()
  title: string;

  @Prop()
  isCompleted: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo).plugin(
  mongoosePaginate,
);
