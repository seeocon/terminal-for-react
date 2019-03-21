import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './styles.module.css';

class Terminal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      currentValues: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.textInput = React.createRef();
    this.focus = this.focus.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  focus() {
    this.textInput.current.focus();
  }

  handleKeyPress(event) {
    if (event.keyCode === 13 ) {
      if(this.state.value.includes("clear")){
          this.setState({
            currentValues: [],
            value: ''
          })
      }else{
        var currentValues = this.state.currentValues.slice();
        currentValues.push('~$ '+this.state.value);
        currentValues.push(this.getCommand(this.state.value));
        this.setState({currentValues:currentValues,value:''})
        this.focus();
      }
    }
  }

  getCommand(command){
    return this.props.commands[command] || this.props.errorText;
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    var { backgroundColor,barBackgroundColor,barColor,color,initialMessage,commands,title,errorText } = this.props;
    if (this.state.currentValues != null){
      var renderValues = this.state.currentValues.map(function(item, i){
        return item.includes("jpg") || item.includes("png") || item.includes("gif") ? <img className="displayPicture" key={i} src={item}/> : <pre className="terminalText" style={style} key={i}>{item}</pre>
      })
    }
    return (
      <div className="terminal" onClick={this.focus}>
        <div className="terminalHeader" style={{ backgroundColor: barBackgroundColor, color: barColor }}>
          <div className="terminalOptions">
            <div className="terminalClose">
            </div>
            <div className="terminalMinimize">
            </div>
            <div className="terminalEnlarge">
            </div>
          </div>
          <div className="terminalTitle">{title}</div>
          <div className="terminalTitle"></div>
        </div>
        <div className="terminalBody" style={{ backgroundColor: backgroundColor, color: color }}>
        <pre style={style} className="terminalText">{initialMessage}</pre>
        {renderValues}
        <div className="input">
            <pre style={style} className="terminalText">~$</pre>
            <input style={style} style={{ color: color }} className="terminalText" ref={this.textInput} autoFocus value={this.state.value} onChange={this.handleChange} />
        </div>
        </div>
      </div>
    );
  }
}

Terminal.defaultProps = {
  initialMessage: 'run the \'help\' command for a list of commands.',
  commands: {
    help: 'commands: [help, icon, clear]',
    icon: 'https://i.imgur.com/fj9gWRB.png'
  },
  color: 'green',
  backgroundColor: 'black',
  barBackgroundColor: 'black',
  barColor: 'green',
  title: 'terminal-for-react',
  errorText: 'This command doesn\'t exist!'
};

Terminal.propTypes = {
  initialMessage: PropTypes.string,
  commands: PropTypes.objectOf(PropTypes.string),
  color: PropTypes.string,
  backgroundColor: PropTypes.string,
  barBackgroundColor: PropTypes.string,
  barColor: PropTypes.string,
  title: PropTypes.string,
  errorText: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.string)
};

export default Terminal;
