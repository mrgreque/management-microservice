interface ISearch {
    name?: string;
    email?: string;
    cpf?: string;
    role?: string;
    active?: boolean;
};

export interface IListUserDTO {
    id?: string;
    search?: ISearch;
};