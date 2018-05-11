import * as React from 'react';
import { connect } from 'react-redux'

interface ITextField{
    value: string;
    type: string;
}

class TextField extends React.Component<ITextField, any> {

    public render() {
        return(
            <div>
                TextField
            </div>
        )
    }
}

export default TextField;
