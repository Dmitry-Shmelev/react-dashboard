import { LOADING } from '../actions';

const defaultState = {
	form_transaction: false
};

function loading(state = defaultState, action) {
	switch (action.type) {
		case LOADING:
			let data = {};
			data[action.key] = (typeof action.status == 'undefined') ? true : action.status;
			return Object.assign(state, data);
		default:
			return state
	}
}

export default loading;