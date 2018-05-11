import * as React from 'react'
import TextField from './textField'

interface IFieldContainer {
    value: string
    formElement: any
}

class FieldContainer extends React.Component<IFieldContainer, {}> {
    printElement(formElement: any){
        return(
            <TextField/>
        )
    }

    render () {
        return (
            <div>{this.printElement(this.props.formElement)}</div>
        )
    }
}

export default FieldContainer
