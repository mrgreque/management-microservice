import { IAddress, IDegree } from "../../entities/User";

export interface IUpdateUserDTO {
    id: string;
    cpf?: string;
    name?: string;
    email?: string;
    password?: string;
    profilePhoto?: string;
    role?: string;
    degree?: IDegree;
    description?: string;
    skills?: string;
    clinicName?: string;
    address?: IAddress;
    rate?: number;
    active?: boolean;
}