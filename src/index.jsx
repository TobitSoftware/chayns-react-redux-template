import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

// Constants
import { IS_DEVELOPMENT } from './constants/environment';

// Utils
import configureStore from './utils/store';

// Components
import App, { HotApp } from './components/App';

const store = configureStore();

const tappElement = document.querySelector('.tapp');

const render = () => {
    ReactDOM.render(
        <Provider store={store}>
            {IS_DEVELOPMENT ? (
                <HotApp/>
            ) : (
                <App/>
            )}
        </Provider>,
        tappElement,
    );
};

chayns.ready.then(render).catch((error) => {
    console.warn('No chayns environment found.', error);
});
