import { uuid } from 'uuidv4'

export class Comment {

    public id?: string;
    public professionalId: string;
    public userId: string;
    public comment: string;
    public visible: boolean;

    constructor(params: Omit<Comment, 'id'>, id?: string) {
        if (!id) {
            this.id = uuid();
        };

        Object.assign(this, params);
    };

};