import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  Body,
  UsePipes,
  HttpStatus,
  HttpCode,
  HttpException,
  Headers,
  MethodNotAllowedException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDTO, EmailDTO, PasswordDTO } from './dto';
import { IUser } from './interfaces/user.interface';
import { ValidationPipe } from '../common/pipes/validation.pipe';
import { TrimPipe } from '../common/pipes/trim.pipe';
import { NullValidationPipe } from '../common/pipes/null-validator.pipe';

/**
 * User Controller
 */
@Controller('user')
export class UsersController {
  /**
   * Constructor
   * @param {UsersService} usersService
   */
  constructor(private readonly usersService: UsersService) {}

  /**
   * Create a user
   * @Body {CreateUserDTO} createUserDTO
   * @returns {Promise<IUser>} created user data
   */
  @UsePipes(new NullValidationPipe())
  @UsePipes(new ValidationPipe(true))
  @UsePipes(new TrimPipe())
  @Post('register')
  public async register(@Body() createUserDTO: CreateUserDTO): Promise<IUser> {
    try {
      return await this.usersService.register(createUserDTO);
    } catch (err) {
      throw new HttpException(err, err.status || HttpStatus.BAD_REQUEST);
    }
  }

  @Get('register')
  public registerGet() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  @Put('register')
  public registerPut() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  @Patch('register')
  public registerPatch() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  @Delete('register')
  public registerDelete() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  /**
   * verify a user by token
   * @Headers {Headers} headers
   * @returns {Promise<IUser>} mutated user data
   */
  @HttpCode(HttpStatus.OK)
  @Post('verification')
  public async accountVerification(@Headers() headers): Promise<IUser> {
    try {
      const token =
        headers.hasOwnProperty('authorization') && headers['authorization']
          ? headers['authorization']
          : '';
      return await this.usersService.accountVerification(token);
    } catch (err) {
      throw new HttpException(err, err.status || HttpStatus.BAD_REQUEST);
    }
  }

  @Get('verification')
  public accountVerificationGet() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  @Put('verification')
  public accountVerificationPut() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  @Patch('verification')
  public accountVerificationPatch() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  @Delete('verification')
  public accountVerificationDelete() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  /**
   * Generate link for user verification
   * @Body {EmailDTO} emailDTO the user given id to fetch
   * @returns {Promise<object>} queried new otp
   */
  @UsePipes(new ValidationPipe(false))
  @UsePipes(new TrimPipe())
  @Post('generate/link')
  public async generateToken(
    @Headers() headers,
    @Body() emailDTO: EmailDTO,
  ): Promise<Record<any, any>> {
    try {
      const token =
        headers.hasOwnProperty('authorization') && headers['authorization']
          ? headers['authorization']
          : '';
      return await this.usersService.generateToken(emailDTO.email, token);
    } catch (err) {
      throw new HttpException(err, err.status || HttpStatus.BAD_REQUEST);
    }
  }

  @Get('generate/link')
  public generateTokenGet() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  @Put('generate/link')
  public generateTokenPut() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  @Patch('generate/link')
  public generateTokenPatch() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  @Delete('generate/link')
  public generateTokenDelete() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  /******Password Reset*******/
  /**
   * generate password reset token
   * @param {EmailDTO} emailDTO
   * @returns {Promise<object>}
   */
  @Post('reset-password/generate/link')
  public generatePasswordResetToken(
    @Body() emailDTO: EmailDTO,
  ): Promise<Record<any, any>> {
    try {
      return this.usersService.generatePasswordResetToken(emailDTO.email);
    } catch (err) {
      throw new HttpException(err, err.status || HttpStatus.BAD_REQUEST);
    }
  }

  @Get('reset-password/generate/link')
  public generatePasswordResetTokenGet() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  @Put('reset-password/generate/link')
  public generatePasswordResetTokenPut() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  @Patch('reset-password/generate/link')
  public generatePasswordResetTokenPatch() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  @Delete('reset-password/generate/link')
  public generatePasswordResetTokenDelete() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  /**
   * reset user password using token
   * @returns {Promise<IUser>}
   * @param headers
   * @param {PasswordDTO} passwordDTO
   */
  @UsePipes(new ValidationPipe(true))
  @UsePipes(new TrimPipe())
  @Patch('forget/password')
  public forgetPassword(
    @Headers() headers,
    @Body() passwordDTO: PasswordDTO,
  ): Promise<IUser> {
    try {
      const token =
        headers.hasOwnProperty('authorization') && headers['authorization']
          ? headers['authorization']
          : '';
      return this.usersService.forgetPassword(token, passwordDTO.password);
    } catch (err) {
      throw new HttpException(err, err.status || HttpStatus.BAD_REQUEST);
    }
  }

  @Get('forget/password')
  public forgetPasswordGet() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  @Post('forget/password')
  public forgetPasswordPost() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  @Put('forget/password')
  public forgetPasswordPut() {
    throw new MethodNotAllowedException('Method not allowed');
  }

  @Delete('forget/password')
  public forgetPasswordDelete() {
    throw new MethodNotAllowedException('Method not allowed');
  }
}
