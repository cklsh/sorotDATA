import * as React from 'react'
import Fa500px = require('react-icons/lib/fa/500px')
import GoThreeBars = require('react-icons/lib/go/three-bars')

class Header extends React.Component<any, any> {

    constructor(props: any){
        super(props);
        this.state = {
            notif: false
        }
    }

    navbarDisplay = (event?: any) => () => {
        const sidebar = document.getElementById('sidebar')!;
        const content = document.getElementById('content')!;

        if(sidebar.style.margin === "0px"){
            sidebar.style.margin= "0px 0px 0px -220px"
            if(window.innerHeight > 768){
                content.style.padding= "5px 20px 0px 40px"
            }
        }else{
            sidebar.style.margin= "0px"
            if(window.innerHeight > 768){
                content.style.padding= "5px 20px 0px 220px"
            }
        }
    }

    showNotif = (event?: any) => () => {
        this.setState({notif: !this.state.notif})
    }

    render () {
        return (
            <div>
                <div className="row header">
                    <div className="col-8 col-md-4 header-logo">
                      DATA<GoThreeBars className="icon" onClick={this.navbarDisplay()}/>
                    </div>
                    <div className="col-4 col-md-6"/>
                </div>
                {this.state.notif && <div className="notif-content">notification content</div>}
            </div>

        )
    }
}

export default Header
