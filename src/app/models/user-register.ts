import { Image } from './../models/image';

export class UserRegister {
    name: string;
    firstname: string;
    email: string;
    password: string;
    sex: number;
    roles: string;
    registrationDate: string;
    phone: string;
    address: string;
    postalCode: string;
    town: string;
    wallet: number;
    image_id?: string;
    image_64: string;
    image_Path: string;
    image: Image | undefined;
    constructor(
      name: string,
      firstname: string,
      email: string,
      password: string,
      sex: number,
      roles: string,
      registrationDate: string,
      phone: string,
      address: string,
      postalCode: string,
      town: string,
      wallet: number,
      image_64: string = '',
      image_Path: string = ''
    ){
      this.name = name;
      this.firstname = firstname;
      this.email = email;
      this.password = password;
      this.sex = sex;
      this.roles = roles;
      this.registrationDate = registrationDate;
      this.phone = phone;
      this.address = address;
      this.postalCode = postalCode;
      this.town = town;
      this.wallet = wallet;
      this.image_64 = image_64
      this.image_Path = image_Path;
    }
}
