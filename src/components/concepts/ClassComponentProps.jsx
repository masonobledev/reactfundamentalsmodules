import React, { Component } from 'react';

export default class ClassComponentProps extends Component {
    constructor(props) {
        super(props);
        this.state = { //build out the component's state to include two properties.
            fruitBowl: [ "apples", "bananas", "oranges", "mangoes", "kiwis"],
            //The first is an array prepopulated with some fruit. 
            newFruit: "",
            //The second is a property called "newFruit". The initial value for this property should be an empty string.
        };
        this.addFruit = this.addFruit.bind(this); //1.07 - The first method should update the newFruit property in the state when the value of the input changes.
    }

        addFruit(event) {
            event.preventDefault();
            this.setState({
                fruitBowl: [this.state.fruitBowl, this.state.newFruit],
                newFruit: "",
            });
        }

        changeHandler(event) {
            this.setState({ newFruit: event.target.value });
        }

        render () { //Build out the render to display an input field and a submit button.
            return (
                <div className="main">
                    <div className="mainDiv">
                        <form onSubmit={this.addFruit}>
                            <input type="text" value={this.state.newFruit}
                            onChange={(event) => this.changeHandler(event)}/> 
                            <button type="submit">Add Fruit</button>
                        </form>
                        <FruitBowl fruits={this.state.fruitBowl} />
                    </div>
                </div>
             );
        }
}

        class FruitBowl extends Component {
            render() {
                return (
                    <div>
                        {this.props.fruits.map((fruit) => {
                        return <Fruit passingFruit={fruit} />;
                        })}
                    </div>
                );
            }
}

    const Fruit = (props) => {
        return (
            <div>
                <h3>{props.passingFruit}</h3>
            </div>
        );
    };