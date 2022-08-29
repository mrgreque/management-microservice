export interface ICreateUserDTO {
    cpf: string;
    name: string;
    email: string;
    password: string;
    role: "admin" | "user" | "professional";
}