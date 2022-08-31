import { uuid } from 'uuidv4'

export interface IDegree {
    description: string;
    crp: string;
};

export interface IAddress {
    street: string;
    number: number;
    complement?: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode: string;
};

export class User {

    public id?: string;
    public cpf?: string;
    public name: string;
    public email: string;
    public password?: string;
    public profilePhoto?: string;
    public role?: string;
    public degree?: IDegree;
    public description?: string;
    public clinicName?: string;
    public address?: IAddress;
    public rate?: number;
    public active?: boolean;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(params: Omit<User, 'id'>, id?: string) {
        if (!id) {
            this.id = uuid();
        };

        Object.assign(this, params);
    };

};