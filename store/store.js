import { legacy_createStore as createStore, applyMiddleware, } from 'redux'
import reducers from './reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducers);
export const store = createStore(persistedReducer, applyMiddleware(thunk,));
export const persistor = persistStore(store);

// ریداکس یک استیت منجیر برای ری اکت است گخ میتوند تمام دیتای های برنامه را درون حود نگه دارد 
//  چند مدل داده در برنامه داریم : داده عمومی داده خصوصی
// داده خصوصی برای همان کامپوننت میباشد و در بفیه استفاده نمیشود
// داده عمومی در تمامی کامپوننت ها یا اکثر آن ها استفاده میشود
//  باید در اول معماری برنامه را مشخص کرد
