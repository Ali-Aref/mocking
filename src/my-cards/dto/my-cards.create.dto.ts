import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class MyCardsCreateDto {
  @IsNotEmpty()
  @IsString()
  cardNumber: string;

  @IsNotEmpty()
  @IsString()
  holderName: string;

  @IsNotEmpty()
  @IsInt()
  userId: number;
}
