import {combineReducers} from 'redux';
import pageReducer, {PageStore} from './page';

export interface Store {
    pageState: PageStore;
}

export default combineReducers<Store>({
    // tslint:disable-next-line
    pageState: pageReducer as any
});
