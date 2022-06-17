import React from "react";

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {username: '', password: ''};
    
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


      }
    
      handleChangeUsername(event) {
        this.setState({username: event.target.value});
      }

      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }

      handleSubmit(event) {
        alert('USERNAME:' + this.state.username + 'PASSWORD:' + this.state.password);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />
              <input type="password" value={this.state.password} onChange={this.handleChangePassword} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    
}