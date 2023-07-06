import cartReducer from "./cartReducer";
import userReducer from "./userReducer";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'


const commonConfig = {
    storage: storage,
    stateReconciler: autoMergeLevel2
}

const persistConfig = {
    ...commonConfig,
    key: 'product',
    whitelist: ['dataPrd']
}

const rootRedux = combineReducers({
    cart: persistReducer(persistConfig, cartReducer),
    user: userReducer,
})

 export default rootRedux