import { reducerPhone, samsung, huawei, xiaomi, iphone, oneplus, reducerOprema } from "./reducer-phone";
import { combineReducers } from 'redux'

var reducers = combineReducers({
    phone: reducerPhone,
    oprema: reducerOprema,
    samsung,
    huawei,
    xiaomi,
    iphone,
    oneplus
})
export default reducers