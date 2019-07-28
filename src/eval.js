import React from "react";
import "./mycss.css";

class Eval extends React.Component
{

    constructor(props)
    {
        super(props)

        this.state = {
            Name: "",
            address: "",
            ph: "",
            dob: "",
            Email:"",
            role: "",
        }
        this.sub = this.sub.bind(this);
        this.handle = this.handle.bind(this);
    }

    sub(event)
    {
        if(!(/^[a-z\s]+$/i.test(this.state.Name)))
        {
            alert("Name should not contain numbers or special characters");
            event.preventDefault();
        }

        if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.Email)))
        {
            alert("You have entered an invalid email address!");
            event.preventDefault();
        }

        if(!(/^[a-z\s]+$/i.test(this.state.clg)))
        {
            alert("College name should not contain numbers or special characters");
            event.preventDefault();
        }

        if(this.state.dob === "")
        {
            alert("enter date of birth");
            event.preventDefault();
        }

        if(this.state.Name === "")
        {
            alert("enter Name");
            event.preventDefault();
        }

        if(this.state.Roll === "")
        {
            alert("enter roll number");
            event.preventDefault();
        }

        if(this.state.Email === "")
        {
            alert("enter Email");
            event.preventDefault();
        }

        if(this.state.clg === "")
        {
            alert("enter clg");
            event.preventDefault();
        }

        if(this.state.gpa === "")
        {
            alert("enter gpa");
            event.preventDefault();
        }
    }

    handle(e)
    {
        const name = e.target.name;
        const val = e.target.value;

        this.setState({[name]: val})
    }



    render(){
        return(
            <div className="whole">
                <div className="container"> 
                <div className="resume_h1"><h3><i>Resume</i></h3></div>
                <form  action="http://localhost:8000/" className = "Form" onSubmit = {this.sub}  className="wholeform" method="POST" >
                    <div className="formdiv">
                        <input type="text" placeholder="Name" name = "Name" value = {this.state.Name} onChange={(event) => this.handle(event)}/><br></br>

                        <input type="text" placeholder="Address" name = "address" value = {this.state.address} onChange={(event) => this.handle(event)}/><br></br>

                        <input type="text"  placeholder="Phone Number" name = "ph" value = {this.state.ph} onChange={(event) => this.handle(event)}/><br></br>

                        <input type="date"  placeholder="DOB " name = "dob" value = {this.state.dob} onChange={(event) => this.handle(event)}/><br></br>

                        <input type="text"  placeholder="Email" name = "Email" value = {this.state.Email} onChange={(event) => this.handle(event)}/><br></br>

                        <input type="text"  placeholder="Role" name = "role" value = {this.state.role} onChange={(event) => this.handle(event)}/><br></br>
                    </div>
                    <input className="subbutton" type = "submit"  value="Submit" onClick= {this.sub}/>
                </form>
            </div>
        </div>

        )
    }
}
export default Eval;
