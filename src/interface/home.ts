export interface IHome {
    id?: number | null | string;
    word?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    birthday?: string | number | null;
    nationality?: string | null;
    idCardNumber?: number | null;
    sex?: string | null;
    phoneNumber?: string | number | null;
    passport?: string | number | null;
    expectedSalary?: string | number | null;
}

export interface IHomeForm {
    id?: number | null | string;
    word?: string | null;
    firstName?: string | null;
    lastName?: string | null;
    birthday?: string | number | null;
    nationality?: string | null;
    idCardNumber?: number | null;
    sex?: string | null;
    phoneNumber?: string | number | null;
    passport?: string | number | null;
    expectedSalary?: string | number | null;
}