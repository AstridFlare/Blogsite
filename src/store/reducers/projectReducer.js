const initState = {
	projects: [
		{ id: '1', title: 'Hello World - 2', content: 'blah blah blah' },
		{ id: '2', title: 'Hello World - 3', content: 'blah blah blah' },
		{ id: '3', title: 'Hello World - 4', content: 'blah blah blah' }
	]
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('create project', action.project);
	}
	return state;
};

export default projectReducer;
