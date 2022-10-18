import { uuid } from 'uuidv4'

export class Rate {

    public id?: string;
    public professionalId: string;
    public userId: string;
    public rate: number;

    constructor(params: Omit<Rate, 'id'>, id?: string) {
        if (!id) {
            this.id = uuid();
        };

        Object.assign(this, params);
    };

};