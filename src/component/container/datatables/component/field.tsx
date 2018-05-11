import * as React from 'react'
import FieldContainer from '../../formElement/container'

//let FieldCatalogue =  require('../../formElement/container2')

const FieldCatalogue:any = {
  input: function(){
	  return (
     <input className="form-control" value="cacacaca"/>
    );
	},
  radio: function(){
    return (
     <input className="form-control" value="cicici"/>
    );
  }
}


interface IField {
    idx: number
    value: string
    formElement?: any
}

class Field extends React.Component<IField, {}> {

    constructor(props: any){
        super(props);
    }

    render () {

        let Tmp: any = FieldCatalogue[`${this.props.formElement}`].bind(this)

        return (
            <td key={this.props.idx}><Tmp/></td>
        )
    }
}

export default Field





//
//
// import * as React from 'react'
// import FieldContainer from '../../formElement/container'
//
//
// interface IField {
//     idx: number
//     value: string
//     formElement?: any
// }
//
// const Field: React.SFC<IField> = (props:any) => {
//
//     return (
//         <td key={props.idx2}><FieldContainer value={props.value} formElement={props.formElement} /></td>
//     )
// }
//
// export default Field
//

//<td key={props.idx2}><input className="form-control" value={props.value}/></td>
