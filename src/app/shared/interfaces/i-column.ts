import { ColumnType } from "../enums/column-type";

export interface IColumn {
    index: string;
    label: string;
    type?: ColumnType;
    method?: Function;
    disabled?: Function;
}
