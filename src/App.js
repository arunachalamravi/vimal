import './App.css';
import {createStore,applyMiddleware} from 'redux'
import reducer from './redux/reducer'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import AddMe from './component/addMe'
import Reducer from './thunk/thunkReducer'
import Thunkui from './component/thunkui'
import createSagaMiddleware from 'redux-saga' 
import {rootSaga} from './redux/index'
const sagaMiddleware = createSagaMiddleware()

const store = createStore(Reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

function App() {
  return (
    <Provider store={store}>
    {/* <AddMe/> */}
    {/* <Thunkui/> */}
    </Provider>
  );
}

export default App;
