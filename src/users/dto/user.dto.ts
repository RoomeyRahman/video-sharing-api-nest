import {
  IsString,
  MaxLength,
  MinLength,
  Matches,
  IsNotEmpty,
  IsEmail,
} from 'class-validator';

export class UserDTO implements Readonly<UserDTO> {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(15)
  @MinLength(5)
  @Matches(/^[^\s]+(\s+[^\s]+)*$/)
  password: string;

  @MaxLength(30)
  @MinLength(3)
  @Matches(/^[a-zA-Z ]+$/)
  @IsString()
  firstName: string;

  @MaxLength(30)
  @MinLength(3)
  @Matches(/^[a-zA-Z ]+$/)
  @IsString()
  lastName: string;

  otp: number;
  otpExpiresAt: number;
  emailProofToken: string;
  emailProofTokenExpiresAt: number;
  passwordResetToken: string;
  passwordResetTokenExpiresAt: number;
  magicPasswordEnabled: boolean;
  isActive: boolean;
  isVerified: boolean;
  isDeleted: boolean;
  cTime: number;
  cBy: string;
  uTime: number;
  uBy: string;
}
