import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
    username: 'DanyGal'
  };

  usernameChangedHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component</li>
          <li>Pass a username (of your choice) to UserOutput via props and</li>
          <li>Add state to the App component (=> the username) and pass</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component</li>
          <li>Ensure that the new input entered by the user overwrites the</li>
          <li>Add two-way-binding to your input (in UserInput) to also display</li>
          <li>Add styling of your choice to your components/ elements in h</li>
        </ol>
        <UserInput currentName={this.state.username} changed={this.usernameChangedHandler}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="Dany" />
      </div>
    );
  }
}

export default App;
