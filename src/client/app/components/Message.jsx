import React from 'react';

var Message = (props) => (
	<div className="chat">
		<p>{props.message.body}</p>
		<p className="userName">{props.message.author}</p>
		<p className="time">{props.message.time}</p>
	</div>
	)

module.exports = Message;