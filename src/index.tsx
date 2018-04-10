import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

import { Provider } from 'react-redux'
import store from './helpers/store'


import registerServiceWorker from './registerServiceWorker'

const Index = (props:any) => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
  <Index/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
