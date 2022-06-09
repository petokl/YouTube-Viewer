import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import youtube from "./youtube/reducer"

const persistConfig = {
    key: 'root',
    storage
  }

const rootReducer = combineReducers({ 
    youtube: youtube 
});

export default persistReducer(persistConfig, rootReducer);