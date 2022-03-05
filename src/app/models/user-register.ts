export class UserRegister {
    id: number;
    name: string;
    firstname: string;
    email: string;
    password: string;
    sex: number;
    roles: string;
    registration_date: string;
    phone: string;
    address: string;
    postal_code: string;
    town: string;
    image_id: string;
    image64: any;
    constructor(
      id: number,
      name: string,
      firstname: string,
      email: string,
      password: string,
      sex: number,
      roles: string,
      registration_date: string,
      phone: string,
      address: string,
      postal_code: string,
      town: string,
      image_id: string,
      image64: any
    ){
      this.id = id;
      this.name = name;
      this.firstname = firstname;
      this.email = email;
      this.password = password;
      this.sex = sex;
      this.roles = roles;
      this.registration_date = registration_date;
      this.phone = phone;
      this.address = address;
      this.postal_code = postal_code;
      this.town = town;
      this.image_id = image_id;
      this.image64 = image64;
    }
}
