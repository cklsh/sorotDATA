import * as React from 'react'
import { connect } from 'react-redux'

import { getData } from './actions/data.action'
import { getFormData } from './actions/form.action'
import DataEntity from './api/dataEntity';


import Header from './component/layouts/header/index'
import Settings from './component/layouts/header/settings'
import Action from './component/layouts/content/action'

import './assets/index.css'
import 'bootstrap/dist/css/bootstrap.css'

interface IApp{
    form: boolean;
    table: boolean;
    setData: () => void;
    setForm: (value: boolean) => void;
}


class App extends React.Component<IApp, any> {
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
                        <Action {...this.props}/>
                    </div>
                </div>
                <div className="overlay"/>
            </div>
        )
    }

}

const mapStateToProps = (state:any) => {
    console.log("ccc", state.formReducer)
    return {
        data: state.dataReducer,
        form: state.formReducer,
        table: true
    }
}

const mapDispatchToProps = (dispatch:any) => {
    return{
        setData: () => dispatch(getData()),
        setForm: (value: boolean) => dispatch(getFormData(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
