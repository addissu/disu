import React, { Component, } from 'react';

class Counter extends Component {

    constructor(){
        super();
        this.state={
            num1: '75',
            num2: '1',
            caff: '500',
            total: ''
        }
    }

    handlenum1 = (event) => {
        this.setStat ({
            num1: event.target.value
        })
    }

    handlenum2 = (event) => {
        this.setStat ({
            num2: event.target.value
        })
    }

    exe = (event) => {
        event.preventDefault();
        this.setState({total: parseInt(this.state.num1) * parseInt(this.state.num2) - parseInt(this.state.caff)});
        
    }
    
    
    
    
    render() { 
        

        return <div className="create">
            <h2>Caffeine Tracker</h2>
            <form onSubmit={this.exe}>
                <label>Full Name</label>
                <input 
                    type="text"
                    required
                   
                />
                 
            <label id="pra">Which caffeinated drink did you have?</label>
                <select>
                    <option value={this.state.num1}onChange={this.handlenum1}>Monster Ultra Sunrise</option>
                    <option value="3">Black Coffee</option>
                    <option value="americano">Americano</option>
                    <option value="sugarFree">Sugar Free NOS</option>
                    <option value="fiveHour">5 Hour Energy Drink</option>


                </select>
                

                <label> How many drinks did you have? </label>
                
                <select>
                    <option value={this.state.num2} onChange={this.handlenum2}>1</option>
                    <option value="two">2</option>
                    <option value="three">3</option>
                    <option value="four">4</option>
                    <option value="one">5</option>
                    <option value="two">6</option>
                    <option value="three">7</option>
                    <option value="four">8</option>


                </select>
                <button className="anotherDrink">Add another drink</button>
                <button type="submit">Calculate</button>
                
            </form>
            {this.state.total}

        </div>
    }
}
 
export default Counter;