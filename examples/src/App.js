import React, { Component } from 'react';
import { render } from 'react-dom';
import Terminal from '../../src';
import './styles.module.css';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        backgroundColor: '#000000',
        barBackgroundColor: '#000000',
        barColor: '#007705',
        color: '#007705',
        initialMessage: 'hello welcome to custom properties',
        title: 'terminal-for-react',
        commands: {
          help: 'commands: [help, icon, clear]',
          icon: 'https://i.imgur.com/fj9gWRB.png'
        },
        errorText: 'this command doesn\'t exist!'
      }
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }

    render() {
      var { backgroundColor,barBackgroundColor,barColor,color,initialMessage,commands,title,errorText } = this.state;
      return(
        <div className="page-container">
        <div className="terminal-container">

        <h1>terminal-for-react demo</h1>
          <Terminal
          style={{
            fontWeight: "bold",
            fontSize: "1em"
          }}
          title={title}
          backgroundColor={backgroundColor}
          barBackgroundColor={barBackgroundColor}
          barColor={barColor}
          color={color}
          initialMessage={initialMessage}
          commands={commands}
          errorText={errorText}
          />
          <a href="https://github.com/seeocon/terminal-for-react">view source</a>
          </div>
          <div className="custom-properties-container">
          <h2>.customProperties</h2>
          <hr align="left"/>
          <h3>.colors</h3>
          <p>Terminal.backgroundColor</p>
          <div className="color-picker-container">
          <input type="color" name="backgroundColor" onChange={this.handleChange} defaultValue={backgroundColor}/>
          <input type="text" name="backgroundColor" onChange={this.handleChange} value={backgroundColor}/>
          </div>

          <p>Terminal.barBackgroundColor</p>
          <div className="color-picker-container">
          <input type="color" name="barBackgroundColor" onChange={this.handleChange} defaultValue={barBackgroundColor}/>
          <input type="text" name="barBackgroundColor" onChange={this.handleChange} value={barBackgroundColor}/>
          </div>

          <p>Terminal.barColor</p>
          <div className="color-picker-container">
          <input type="color" name="barColor" onChange={this.handleChange} defaultValue={barColor}/>
          <input type="text" name="barColor" onChange={this.handleChange} value={barColor}/>
          </div>

          <p>Terminal.color</p>
          <div className="color-picker-container">
          <input type="color" name="color" onChange={this.handleChange} defaultValue={color}/>
          <input type="text" name="color" onChange={this.handleChange} value={color}/>
          </div>
          <hr align="left"/>
          <h3>.text</h3>
          <p>Terminal.initialMessage</p>

          <div className="color-picker-container">
          <input type="text" name="initialMessage" onChange={this.handleChange} value={initialMessage}/>
          </div>
          <p>Terminal.title</p>
          <div className="color-picker-container">
          <input type="text" name="title" onChange={this.handleChange} value={title}/>
          </div>
          <p>Terminal.errorText</p>
          <div className="color-picker-container">
          <input type="text" name="errorText" onChange={this.handleChange} value={errorText}/>
          </div>

          </div>
        </div>
      );
    }
}

export default App;
