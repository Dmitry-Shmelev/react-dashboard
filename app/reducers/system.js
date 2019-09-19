import { MENU_CHANGE } from '../actions';


function system(state = {
	menu: 'dashboard'
} , action) {
	switch (action.type) {
		case MENU_CHANGE:
          return Object.assign({}, state,{
            menu: action.menu
          });
		default:
			return state
	}
}

export default system;