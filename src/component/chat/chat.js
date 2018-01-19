import React from 'react'
import io from 'socket.io-client'
import DocumentTitle from '../../title'

class Chat extends React.PureComponent{
	constructor(props) {
		super(props)
		this.state = {
		}
  }
	render(){
		return (
			<DocumentTitle title="chat">
        <h2>chat with user:{this.props.match.params.user}</h2>
			</DocumentTitle>
		)
  }
  componentDidMount(){
    io('ws://')
  }
}

export default Chat