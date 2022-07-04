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
    dateFrom?: Date;
    dateTo?: Date;
}

export interface IPagedDateSearch extends IPagedSearch, IDateSearch {

}

export interface IBasePagedDateSearch extends IBasePagedSearch, IDateSearch {
    
}