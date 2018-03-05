import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers, {Store} from './reducers';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Home} from './pages/home/home';

const store = createStore<Store>(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('app')
);
