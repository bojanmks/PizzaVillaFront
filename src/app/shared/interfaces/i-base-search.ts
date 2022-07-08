export interface IBaseSearch {
    keyword?: string;
}

export interface IPagedSearch {
    page?: number;
    perPage?: number;
}

export interface IBasePagedSearch extends IBaseSearch, IPagedSearch {

}

export interface IDateSearch {
    dateFrom?: string;
    dateTo?: string;
}

export interface IPagedDateSearch extends IPagedSearch, IDateSearch {

}

export interface IBasePagedDateSearch extends IBasePagedSearch, IDateSearch {
    
}