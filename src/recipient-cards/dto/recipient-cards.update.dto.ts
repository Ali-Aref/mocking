import { IsInt, IsOptional, IsString } from 'class-validator';

export class RecipientCardsUpdateDto {
  @IsOptional()
  @IsString()
  cardNumber: string;

  @IsOptional()
  @IsString()
  holderName: string;

  @IsOptional()
  @IsInt()
  userId: number;

  @IsOptional()
  @IsString()
  title?: string;
}
