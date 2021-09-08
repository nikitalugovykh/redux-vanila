export function createStore(rootReducer, __INIT__STATE) {
    
    let state = rootReducer(__INIT__STATE, { type: 'INIT__ACTION' });
    let subscribers = [];
    return {
        dispatch (action) {
            state = rootReducer(state, action)
            subscribers.forEach(sub => sub())
        },
        subscribe (cb) {
            subscribers.push(cb)
        },
        getState () {
            return state
        }
    }
}