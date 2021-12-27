import React, { Component } from 'react'
import './ContainerStyle.css'

class Container extends Component {

    constructor() {
        super()
        this.state={
            name:"",
            department:"",
            rating:"",
            item:[]
        }
    }
    
    getdata=(event)=>{
        this.setState(
            {
                [event.target.name] : event.target.value
            }
        )
    }
   
    output=(event)=>{
        event.preventDefault();
        const tempobj={
            name:this.state.name,
            department:this.state.department,
            rating:this.state.rating
        }
        const tempArr=this.state.item;
        tempArr.push(tempobj)
        this.setState(
            {
                name:"",
                department:"",
                rating:"",
                item:[...tempArr]
            }
        )
    }
   
    render() {
console.log(this.state.item);

        return (
            <div>
                <div className='container'>
                    <h1>EMPLOYEE FEEDBACK FORM</h1>

                    <label htmlFor="name" className='sideHeading' >Name :</label>
                    <input type="text" className='inputbox' name='name' value={this.state.name} onChange={this.getdata}></input><br/>

                    <label htmlFor="text" className='sideHeading'>Department :</label>
                    <input type="text" className='inputbox' name='department'value={this.state.department} onChange={this.getdata}></input><br/>

                    <label htmlFor="text" className='sideHeading'>Rating :</label>
                    <input type="number" className='inputbox' name='rating' value={this.state.rating} onChange={this.getdata}></input><br/>

                    <button type="submit" className='submitbutton' onClick={this.output}>Submit</button>
                </div>

                <div className='displayBox'>
                    {this.state.item.map((value)=>{
                        return(
                            <div  className='output_occur'>
                            <p>
                            Name: {value.name}   |
                            Department: {value.department}   |
                            Rating: {value.rating}   
                            </p>
                            </div>
                        )
                    }) }
                </div>

            </div>
        )

    }

}
export default Container
