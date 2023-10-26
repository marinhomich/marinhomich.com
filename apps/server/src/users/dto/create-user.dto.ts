import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'Michel' })
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}