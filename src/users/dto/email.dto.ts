import { IsNotEmpty, IsEmail } from 'class-validator';

export class EmailDTO implements Readonly<EmailDTO> {
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
