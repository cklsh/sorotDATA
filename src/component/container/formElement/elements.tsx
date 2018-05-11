import * as React from 'react'

const Catalogue:any = {
    input: function(){
        return (
            <input className="form-control" value={this.props.value}/>
        );
    },
    radio: function(){
        return (
            <input className="form-control" value={this.props.value}/>
        );
    }
}

interface IFormElement {
    value: string
    formElement: any
}

class FormElement extends React.Component<IFormElement, {}> {

    constructor(props: any){
        super(props);
    }

    render () {
        let Element: any = Catalogue[`${this.props.formElement}`].bind(this)
        return (
            <Element/>
        )
    }
}

export default FormElement
