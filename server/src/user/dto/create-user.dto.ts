import { MinLength, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @MinLength(6, {
    message: 'Пароль должен состость не менее, чем из 6 символов',
  })
  password: string;

  //в будущем сделать проверку на существование номера билета
  @MinLength(5, {
    message:
      'Номер читательского билета должен состость не менее, чем из 5 символов',
  })
  library_card: string;
}
