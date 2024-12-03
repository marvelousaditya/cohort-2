import React, { useEffect, useState } from "react";

function App() {
  const [isVisible, setVisible] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setVisible((r) => !r);
    }, 3000);
  }, []);
  return (
    <div>
      {/* <div>Class : </div>
      <ClassComponent />
      <div>Function : </div>
      <FnComponent /> */}
      {/* {isVisible ? <MountFn /> : <div> </div>} */}
      {isVisible ? <ClassMounts /> : <div> </div>}
    </div>
  );
}

class ClassMounts extends React.Component {
  componentDidMount() {
    console.log("component mounted");
  }

  componentWillUnmount() {
    // Clean up (e.g., remove event listeners or cancel subscriptions)
    console.log("unmounted");
  }

  render() {
    // Render UI
    return <div>he he boiii </div>;
  }
}

function MountFn() {
  useEffect(() => {
    console.error("mounted ");
    return () => {
      console.log("unmounted");
    };
  }, []);
  return <div>example of unmount</div>;
}

function FnComponent() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}

export default App;
