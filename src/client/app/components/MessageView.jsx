import React from 'react';
import Message from './Message.jsx';


class MessageView extends React.Component {
	constructor(props) {
		super(props);
		this.messages = [];
		this.fetchMessages();
	}

	fetchMessages() {
		$.ajax({
			url: "http://parse.nyc.hackreactor.com/chatterbox/classes/messages",
			type: 'GET',
			dataType: 'json',
			data: {order: '-createdAt'},
			success: (function(data) {
				this.setState({
					messages: data.results
				})
			})
		}.bind(this))
	}

	render() {
		return (
			<div className="col-md-12 chats">
				<Message message={this.testMessage}/>
			</div>
			)
	}
}

module.exports = MessageView;