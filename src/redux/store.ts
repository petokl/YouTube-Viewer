import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducer from './root-reducer';


export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);

export type RootStore = ReturnType<typeof rootReducer>

const storeApp = { store, persistor };

export default storeApp;

