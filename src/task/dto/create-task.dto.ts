import { IsString, IsNotEmpty, IsBoolean, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {

    @ApiProperty({ example: 'Learn NestJS', description: 'Title of the task' })
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty({ example: 'Build a REST API backend using NestJS', description: 'Detailed description' })
    @IsString()
    @IsNotEmpty()
    description: string;

    @ApiProperty({ example: false, description: 'Completion status of the task', required: false })
    @IsBoolean()
    @IsOptional()
    completed?: boolean;
}