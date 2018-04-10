import * as React from 'react'
import Fa500px = require('react-icons/lib/fa/500px')
import GoThreeBars = require('react-icons/lib/go/three-bars')
import MdNotificationsNone = require('react-icons/lib/md/notifications-none')
import MdSettings = require('react-icons/lib/md/settings')

class Settings extends React.Component<any, any> {

    constructor(props: any){
        super(props);
        this.state = {
            notif: false
        }
    }

    showNotif = (event?: any) => () => {
        this.setState({notif: !this.state.notif})
    }

    render () {
        return (
            <div className="settings">
                <MdSettings className="icon"/>
                <span className="notif-count badge badge-danger">2</span>
                <MdNotificationsNone className="icon" onClick={this.showNotif()}/>
                {this.state.notif && <div className="notif-content">notification content</div>}
            </div>
        )
    }
}

export default Settings
