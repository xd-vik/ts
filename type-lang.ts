//  TypeScript with React

/*

import React from "react";

interface Props {
  name: string;
  age: number;
}

const User: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{age} years old</p>
    </div>
  );
};

export default User;

*/

// class components

/*

import React, { Component } from "react";

interface State {
  count: number;
}

class Counter extends Component<{}, State> {
  state: State = {
    count: 0,
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;

*/

//  TypeScript with Node.js

/*

    npm install typescript ts-node @types/node

    Create tsconfig.json:
   

    {
      "compilerOptions": {
        "target": "ES6",
        "module": "CommonJS",
        "outDir": "./dist",
        "strict": true
      }
    }

    Write Code:

    import express from "express";

    const app = express();
    const port = 3000;

    app.get("/", (req, res) => {
      res.send("Hello, TypeScript with Node.js!");
    });

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });


    Run Code:
    ts-node index.ts


    */
