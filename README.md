# Terminal for React

<p align="center">
  <img src="https://i.imgur.com/fj9gWRB.png"  width="300" height="300" />
</p>

> A fun terminal component for ReactJS.

## Table of contents

* [Install](#install)

* [Usage](#usage)

* [Working](#working)

* [Customization](#customization)

* [API reference](#api)

* [Built-in commands](#built-in-commands)

* [Where to use ?](#where-to-use-)

## Install

```
npm install terminal-for-react --save
```
or if you use `yarn`

```
yarn add terminal-for-react
```

This package is created with `react` so make sure you have it installed.

## Usage


```jsx
import React, { Component } from 'react';
import Terminal from 'terminal-for-react';

class App extends Component {
    // supports images!
    render() {
      return(
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw"
          }}
        >
          <Terminal
          style={{
            fontWeight: "bold",
            fontSize: "1em"
          }}
          backgroundColor='#000000'
          barBackgroundColor='#000000'
          barColor='#007705'
          color='#007705'
          initialMessage='hello welcome to custom properties'
          title='terminal-for-react'
          commands={{
            help: 'commands: [help, icon, clear]',
            icon: 'https://i.imgur.com/fj9gWRB.png'
          }}
          errorText='this command doesn\'t exist!'
          />
        </div>
      );
    }
}

export default App;
```

<p align="center">
  <img src="https://i.gyazo.com/db5c8394b905b1c031f7808eb3e82710.gif" />
</p>

## Working

### Adding commands

To add your own command, use prop `commands` which accepts an object. This objects then maps `command name -> <img> or <pre>`.

Let's take an example. You want to display an image, with command name icon.

```jsx
<Terminal commands={{ icon: 'https://i.imgur.com/fj9gWRB.png')}} />
```

## Customization

Use

* prop `color` to change the color of the text.
* prop `backgroundColor` to change the background color.
* prop `barBackgroundColor` to change the background color of bar.
* prop `barColor` to change the color of bar.
* prop `initialMessage` to change the initial message.
* prop `commands` to change the commands.
* prop `title` to change the title of the terminal.
* prop `errorText` to change the error text of the terminal.

## API

**component props**

| Props        | Type           | Default  |
| ------------- |:-------------:| -----:|
| **color**      | string | 'green' |
| **backgroundColor**      | string      |   'black' |
| **barBackgroundColor** | string      |    'black' |
| **barColor** | string      |    'green' |
| **initialMessage** | string      |    'run the \'help\' command for a list of commands.' |
| **commands** | object      |    { clear, help, icon } |
| **title** | string      |    'terminal-for-react' |
| **errorText** | string      |    'This command doesn\'t exist' |

## Built-in commands

* `clear` - Clears the screen
* `help` - List all the commands
* `icon` - Shows the app icon

## Where to use ?

* You can use this on your website.
* I used it on my about me page on my portfolio
* play around with it
