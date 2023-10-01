import { IHome, IHomeForm } from "@/interface/home";

export interface FetchPostHomePayload {
    homeDataForm: IHomeForm;
}

export interface FetchPutHomePayload {
    homeId: string | number;
    homeDataForm: IHomeForm;
}

export interface FetchDeleteHomePayload {
    homeId: string | number | null;
}

export interface HomeState {
    isHomeLoading?: boolean;
    // filter?: TFilterFaqs | null;
    // faqsList?: IListResponse<IFaqs> | null;
    homeData?: IHome | null;
    isLoadingSaveHome?: boolean;
    homeErrorRes?: any;
}