import { combineReducers } from 'redux';

import tasks from './tasks';
import login from './login';
import url from './url';
import alert from './alert';

export default combineReducers({ tasks, login, url, alert });
