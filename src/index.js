import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from './redux/rootReducer';
import thunk from 'redux-thunk';
import { asyncIncrement, blockBtn, changeTheme, decrement, increment } from './redux/actions';
import './styles.css';


const counter = document.querySelector('#counter');
const theme = document.querySelector('#theme');
const addBtn = document.querySelector('#add');
const subBtn = document.querySelector('#sub');
const asyncBtn = document.querySelector('#async');

const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

addBtn.addEventListener('click', () => {
    store.dispatch(increment())
})
subBtn.addEventListener('click', () => {
    store.dispatch(decrement())
})
asyncBtn.addEventListener('click', () => {
    store.dispatch(asyncIncrement())
})
theme.addEventListener('click', () => {
    const newTheme = document.body.classList.contains('light')
    ? 'dark'
    : 'light'
    store.dispatch(changeTheme(newTheme))

})

store.subscribe(() => {
    const state = store.getState()
    console.log(state);
    if (state.statusBtn.status === true) {
        addBtn.setAttribute('disabled', true)
        subBtn.setAttribute('disabled', true)
    } else {
        addBtn.removeAttribute('disabled')
        subBtn.removeAttribute('disabled')
    }
    counter.textContent = state.counter;
    document.body.className = state.theme.value
}) 
store.dispatch({type: 'INITIALISATION'})
