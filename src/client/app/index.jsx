import React from 'react';
import {render} from 'react-dom';
import UserEntry from './components/UserEntry.jsx';
import MessageView from './components/MessageView.jsx';

class App extends React.Component {
  render () {
    return (<div className="container">
    	<div className="jumbotron">
	    	<div className="row">
	    		<div className="col-md-6">
	    			<p> Hello to Chatterbox.</p>
	    		</div>
	    		<div className="col-md-6">
	    			<UserEntry />
	  			</div>
	  		</div>
	  	</div>
	  	<div className="row">
	  		<MessageView />
	  	</div>
  	</div>
    )
  }
}

render(<App/>, document.getElementById('app'));