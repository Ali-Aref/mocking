import { IsInt, IsOptional, IsString } from 'class-validator';

export class MyCardsUpdateDto {
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
  lastBalance: string;

  @IsOptional()
  @IsString()
  lastBalanceAt: string;
}
