import React from 'react';
import MemeGallery from './components/MemeGallery';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/memeReducer.js';
import thunk from 'redux-thunk';

import { fetchMemes } from './actions/fetch.js';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchMemes());

const Generator = () => {
    return (
        <div>
        <Provider store={store}>
            <MemeGallery />
        </Provider>
        </div>
    )
}

export default Generator;