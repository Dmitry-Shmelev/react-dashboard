import React from 'react'
import { connect } from 'react-redux';

class AsideAccess extends React.Component {

	render(){
		return (
			<nav>
			</nav>
		)
	}
}

function getState(state){
	return {
		state: state
	};
}

export default connect(getState)(AsideAccess);
