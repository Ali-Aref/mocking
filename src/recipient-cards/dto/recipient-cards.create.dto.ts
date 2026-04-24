import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class RecipientCardsCreateDto {
  @IsNotEmpty()
  @IsString()
  cardNumber: string;

  @IsNotEmpty()
  @IsString()
  holderName: string;

  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsOptional()
  @IsString()
  title?: string;
}
