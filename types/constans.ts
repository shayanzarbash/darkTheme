export enum AtionType {
    UPDATE_PAGE_TAB,
}

export type Action = {
    type: AtionType.UPDATE_PAGE_TAB;
    payload: number;
}

export type State = {
    pageTab: number;
}