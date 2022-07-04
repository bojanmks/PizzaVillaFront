export interface IPagedResponse<T> {
    totalCount: number;
    totalPages: number;
    page: number;
    perPage: number;
    data: T[];
}