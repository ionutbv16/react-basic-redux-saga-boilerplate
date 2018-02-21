import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from "redux";
import {callUser} from '../actions'
import Profile from './Profile'


class Home extends Component {

    componentDidMount () {
        this.props.callUser()

    }
    render () {
        console.log('home.js this.props', this.props  );
        const userData = this.props.data ? <Profile user={this.props.data[0]}/>  : <div>No user</div>
        return (
            <div>
            <div>Fetch user Data</div>
            {userData}
            </div>
        )
        
    }
    

}

const mapStateToProps = (state) => {
    console.log ('mapStateToProps', state.results);
    return {data: state.results}
}

const mapDispatchToProps = dispatch => bindActionCreators({ callUser }, dispatch);
 

export default connect(mapStateToProps, mapDispatchToProps)(Home)