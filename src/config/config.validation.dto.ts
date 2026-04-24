import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

export class EnvironmentVariables {
  @IsNotEmpty()
  @IsString()
  DB_URL: string;

  @IsEnum([8000])
  PORT: number;

  @IsString()
  HOST: string;
}
