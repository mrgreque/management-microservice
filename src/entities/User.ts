import { uuid } from 'uuidv4'

export class User {

    public id: string;
    public name: string;
    public email: string;
    public password: string;
    public createdAt?: Date;
    public updatedAt?: Date;

    constructor(params: Omit<User, 'id'>, id?: string) {
        if (!id) {
            this.id = uuid();
        };

        Object.assign(this, params);
    };

};