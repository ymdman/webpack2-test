import React from 'react';
import ReactDOM from 'react-dom';

require('./style.css')

class Test extends React.Component {
	constructor () {
		super();

		console.log('test');
	}
};


ReactDOM.render(
	<Test />,
	document.getElementById('content')
);
