import React, { Component } from 'react';
import axios from 'axios';

export class ModifyForm extends Component{

    constructor(props){
        super(props)

        var yo = JSON.parse(localStorage.getItem('props'));
        
        
        this.state = {
            username:yo.name,
            backgroundColor:yo.color,
            fontSize:yo.font
            
        };
    }

    handleUsernameChange=(event)=>{
        this.setState({ username: event.target.value})
        // console.log(this.state)
    }

    handlebackgroundColor =(event)=>{
        this.setState({
            backgroundColor:event.target.value
        })
        // console.log(this.state)
    }

    handleFont =(event)=>{
        this.setState({
            fontSize:event.target.value
        })
        // console.log(this.state)
    }

    handleSubmit = (event) => {
        // alert(`Your name is ${this.state.username} and background Clor ${this.state.backgroundColor} with font size  ${this.state.fontSize}`)
        event.preventDefault();
        // console.log(this.state);
        var id =  localStorage.getItem('id');
        // console.log(id)
        
        axios(  {url: `http://localhost:5000/api/update/${id}`,
                method: 'put',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                data: this.state
        })
            .then(response=>
                {
                    console.log(response)
                    alert("Data updated Successfully");
                    // window.location.href= "/newPage";
                })
            .catch(error=>{
                console.log(error)
            })    
    }

    render(){
        //destructing and adding values
        const {name, color , font} = this.state;
       
        const mystyle = {
            fontSize: this.state.fontSize + 'px',
            color: this.state.backgroundColor,
            // color:"blue",
        }
        var id =  localStorage.getItem('id');
        // console.log(id);
        return (
            <div className="container text-center" style={{marginTop:"50px"}}>
            <form onSubmit={this.handleSubmit}>
                <div >
                    <div>
                    <h1 style={mystyle} id={id}>{this.state.username}</h1>
                    </div>
                    <label>
                        Please Input Your Name
                    <input
                        type="text" 
                        value={name}
                        name="name" 
                        onChange={this.handleUsernameChange}
                        required style={{width: "100%"}}/>
                    </label>
                </div>
                <br/>
                <div>
                    <label>
                        Choose Your Background Color
                    <select value = {color}
                            name  = "color"
                             onChange={this.handlebackgroundColor} style={{width: "100%"}}>
                        <option value ="red">Red</option>
                        <option value ="green">Green</option>
                        <option value ="blue">Blue</option>
                    </select>
                    </label>
                </div>
                <br/>
                <div>
                    <label>
                        Choose Your Font
                    <select value = {font}
                            name="font"
                            onChange={this.handleFont} style={{width: "100%"}}>
                        <option value ="30">30px</option>
                        <option value ="40">40px</option>
                        <option value ="50">50px</option>
                    </select>
                    </label>
                </div>  

                <button type="submit" className="btn btn-primary">Update</button>
      </form>
      </div>
        )
    }
}

export default ModifyForm