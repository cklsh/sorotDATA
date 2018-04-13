import * as React from 'react'
import {IForm} from './interface'

class Form extends React.Component<IForm, any> {
    constructor(props:any){
        super(props);
        this.close = this.close.bind(this)
    }

    close(){
        (this.props.formValue)? this.props.setForm(false): this.props.setForm(true)
    }

    render() {
        return(
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={this.close}>&times;</span>
                <p>Some text in the Modal..</p>
              </div>

            </div>
        )
    }
}

export default Form
