import React from 'react';


class UserEntry extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name : "Unnamed User",
      nameField: ''
    }
    this.onSaveName = this.onSaveName.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
    this.handleName = this.handleName.bind(this);
  }

  handleName(event) {
    console.log('getting called')
    this.setState({nameField: event.target.value })
  }

  onSaveName () {
    this.setState({name: this.state.nameField});
  }

  handleEnter(target) {
    if (target.charCode===13) {
      this.setState({name: this.state.nameField})
    }
  }

  render() {
    return (
      <div className="search-bar form-inline">
        Name: <input className="form-control" type="text" value={this.state.nameField} onKeyPress={this.handleEnter} onChange={this.handleName}/>
        <button className="btn hidden-sm-down" onClick={this.onSaveName}>
        <span className="glyphicon glyphicon-ok"></span>
      </button>
      </div>
    );
  }

}

export default UserEntry;