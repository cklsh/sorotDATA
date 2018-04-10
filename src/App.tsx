import * as React from 'react'
import { connect } from 'react-redux'

import { getData } from './actions/data.action'


import Header from './component/layouts/header/index'
import Settings from './component/layouts/header/settings'

import Action from './component/layouts/content/action'

import './assets/index.css'
import 'bootstrap/dist/css/bootstrap.css'


class App extends React.Component<any, any> {
    constructor(props:any){
        super(props)
        this.props.setData()
    }

    render() {
        return (
            <div>
                <Header/>
                <Settings/>
                <div className="row">
                    <div className="content wrapper" id="content">
                        <Action
                            table={true}
                            form={false}
                        />
                    </div>
                </div>
                <div className="overlay"/>
            </div>
        )
    }

}

const mapStateToProps = (state:any) => {
    return {
        data: state.dataReducer,
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return{
        setData: () => dispatch(getData()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
