export enum PageActionOptions {
    SetSelectedKeyword = 'SET_SELECTED_KEYWORD'
}

export type PageAction = {
    type: PageActionOptions.SetSelectedKeyword;
    keyword: string | null;
};

export class PageActions {
    static setSelectedKeyword(keyword: string | null): PageAction {
        return {
            type: PageActionOptions.SetSelectedKeyword,
            keyword
        };
    }
}
