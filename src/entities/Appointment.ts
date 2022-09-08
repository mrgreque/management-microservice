import { uuid } from 'uuidv4'

export class Appointment {

    public id?: string;
    public professionalId?: string;
    public appointments?: object;

    constructor(params: Omit<Appointment, 'id'>, id?: string) {
        if (!id) {
            this.id = uuid();
        };

        Object.assign(this, params);
    };

};