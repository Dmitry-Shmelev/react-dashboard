import React from 'react'
import { connect } from 'react-redux';

class Loading extends React.Component {
	render(){
		return (
			<div className="spinner">
				<div className="bounce1"></div>
				<div className="bounce2"></div>
				<div className="bounce3"></div>
			</div>
		)
	}
}

function getState(state){
	return state;
}

export default connect(getState)(Loading);
