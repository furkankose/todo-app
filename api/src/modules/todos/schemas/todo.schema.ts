import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export type TodoDocument = Todo & mongoose.Document;

@Schema({ versionKey: false })
export class Todo {
  @ApiProperty()
  @Prop()
  title: string;

  @ApiProperty()
  @Prop()
  isCompleted: boolean;
}

export const TodoSchema = SchemaFactory.createForClass(Todo).plugin(
  mongoosePaginate,
);
