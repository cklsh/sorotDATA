import * as React from 'react';
import { connect } from 'react-redux'

// interface IAction{
//     table: boolean
//     form: boolean
//     data: DataEntity
// }

class TextField extends React.Component<any, any> {

    public render() {
        return(
            <div>
                TextField
            </div>
        )
    }
}

// const mapStateToProps = (state:any) => {
//     return {
//         data: state.dataReducer[0],
//         form: state.formReducer.value
//     }
// }

//export default connect(mapStateToProps)(Action)

export default TextField;
