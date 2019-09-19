

let ajaxHanlder = function(error){
	console.error('error',error);
	let action = {
		type: 'NOACTION'
	},
	status = 0;


	if (error && error.response && error.response.status) {
		status = error.response.status;
	}


	switch(status){
		case 401:
			action = {type: 'LOGOUT'};
			break;
	}


	return action;
};

export default ajaxHanlder;