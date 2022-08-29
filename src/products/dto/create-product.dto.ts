import {
  IsArray,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  @IsNumber()
  @IsPositive()
  @IsOptional()
  price?: number;
  @IsString()
  @IsOptional()
  description?: string;
  @IsString()
  @IsOptional()
  slug?: string;
  @IsInt()
  @IsPositive()
  @IsOptional()
  stock?: number;
  @IsArray()
  @IsString({ each: true })
  sizes: string[];
  @IsIn(['men', 'women', 'kid', 'unisex'])
  gender: string;
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  tags?: string[];
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];
}
