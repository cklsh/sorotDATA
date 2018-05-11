import * as React from 'react';

interface ITextField{
    type?: string
    element?: string
    value?: string
    edit?: boolean
}

const TextField: React.SFC<ITextField> = (props:any) => {
    return(
        <input className="form-control" value="cacacaca"/>
    )
}

export default TextField
