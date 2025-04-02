import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import {AuthReducer} from './AuthSlice';

import createSensitiveStorage from 'src/utils/SensitiveStorage';
import {DashboardReducer} from './DashboardSlice';

//securing sensitive info
const sensitiveStorage = createSensitiveStorage({
  keychainService: 'invoiceKeychain',
  sharedPreferencesName: 'nytSharedPrefs',
});
// combining all reducers to persist them

const tokenPersistConfig = {
  key: 'invoiceAuthPersist',
  storage: sensitiveStorage,
};
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['auth', 'dashboard'],
  version: 1,
};
const appReducer = combineReducers({
  auth: persistReducer(tokenPersistConfig, AuthReducer),
  dashboard: DashboardReducer,
});

const persistedReducer = persistReducer(persistConfig, appReducer);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appReducer>;

export default persistedReducer;
