import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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

  @IsOptional()
  @IsString()
  lastBalance: string;

  @IsOptional()
  @IsString()
  lastBalanceAt: string;
}
