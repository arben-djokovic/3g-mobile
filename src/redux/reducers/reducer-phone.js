export var reducerPhone = (state = 0, action) => {
    if (action.type === 'changePhonePagePhone') {
        return action.playload
    }
    else {
        return state
    }
}
export var reducerOprema = (state = 0, action) => {
    if (action.type === 'changeOprema') {
        return action.playload
    }
    else {
        return state
    }
}
export var samsung = (state = true, action) => {
    if (action.type === 'changeSamsung') {
        return action.playload
    }
    else {
        return state
    }
}
export var iphone = (state = true, action) => {
    if (action.type === 'changeIphone') {
        return action.playload
    }
    else {
        return state
    }
}
export var huawei = (state = true, action) => {
    if (action.type === 'changeHuawei') {
        return action.playload
    }
    else {
        return state
    }
}
export var xiaomi = (state = true, action) => {
    if (action.type === 'changeXiaomi') {
        return action.playload
    }
    else {
        return state
    }
}
export var oneplus = (state = true, action) => {
    if (action.type === 'changeOneplus') {
        return action.playload
    }
    else {
        return state
    }
}
