export interface IProductSearch {
    keyword: string;
    categoryIds: number[],
    sortOrder: ProductSortOrder,
    perPage: number,
    page: number
}

export enum ProductSortOrder {
    NameAsc,
    NameDesc,
    PriceAsc,
    PriceDesc
} 