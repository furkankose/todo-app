import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsBoolean()
  isCompleted: boolean;
}
