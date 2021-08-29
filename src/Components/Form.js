import React, { Component } from 'react';
import axios from 'axios';

export class Form extends Component{

    constructor(props){
        super(props)

        this.state = {
            username:'',
            backgroundColor:'Red',
            fontSize:'30'
        }
    }

    componentDidMount() {
        localStorage.clear();
    }

    handleUsernameChange=(event)=>{
        this.setState({ username: event.target.value})
    }


    handleSubmit = (event) => {
        // alert(`Your name is ${this.state.username} and background Clor ${this.state.backgroundColor} with font size  ${this.state.fontSize}`)
        event.preventDefault();
        console.log(this.state);
        
        axios(  {url: 'http://localhost:5000/api/saveuserData',
                method: 'post',
                headers: {'Content-Type': 'application/json;charset=utf-8'},
                data: this.state
        })
            .then(response=>
                {
                    var props = {
                        name:response.data.username,
                        color:response.data.backgroundColor,
                        font:response.data.fontSize,
                        // id:response.data._id
                    }
                    console.log(response)
                    localStorage.setItem('id',response.data._id);
                    localStorage.setItem('props',JSON.stringify(props) )
                    window.location.href= "/newPage";
                })
            .catch(error=>{
                console.log(error)
            })    
    }

    render(){
        //destructing and adding values
        const {name, color , font} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="container text-center" style={{marginTop:"50px"}}>
                    <label>
                        Please Input Your Name
                    <input
                        type="text" 
                        value={name}
                        name="name" 
                        placeholder="Type Your Name"
                        onChange={this.handleUsernameChange}
                        required style={{width: "100%"}}/>
                    </label>
                    <br/>
                    <button type="submit" className="btn btn-primary" >Submit</button> 
                </div>
      </form>
        )
    }
}

export default Form