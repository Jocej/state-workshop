import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };

    }
increment = () => {
    this.setState({ count: this.state.count+1});
};
decrement = () => {
    this.setState({ count: this.state.count-1});
};

render() {
    const count = this.state.count;
    return (
        [
        <button onClick={this.increment}>
    +
        </button>,
        <div>{count}</div>,
        <button onClick={this.decrement}>
    -
        </button>
        ]
    );
    }

}

export default Counter;