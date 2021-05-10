import React, {Component} from 'react'
class ProfileContainer extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.user.username}&apos;s Profile</h2> 
            </div>
        )
    }
}

export default ProfileContainer