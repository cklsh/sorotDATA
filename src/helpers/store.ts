import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers  from '../reducers'

const nonTypedWindow : any = window;

const store = createStore(
  reducers,
   compose(
     applyMiddleware(ReduxThunk)
     ,nonTypedWindow.devToolsExtension ? nonTypedWindow.devToolsExtension() : (f:any) => f
   )
);

export default store
