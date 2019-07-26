import React from "react";
// import "./mycss.css";

class Eval extends React.Component
{

    constructor(props)
    {
        super(props)

        this.state = {
            Name: "",
            Email: "",
            Roll: "",
            Email: "",
            clg:"",
            gpa: "",
            dob: "",
        }
        this.sub = this.sub.bind(this);
        this.handle = this.handle.bind(this);
    }

    sub(event)
    {
        let valid = true;

        if(!(/^[a-z\s]+$/i.test(this.state.Name)))
        {
            alert("Name should not contain numbers or special characters");
            valid = false;
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
            valid = false;
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
                <div className="containers"> 
                <form  action="http://localhost:8000/" className = "Form" onSubmit = {this.sub}  className="wholeform" method="POST" >
                <div className="propose"><h2><i>Resume</i></h2></div>
                <div>
                </div>
                    <div className="formdiv">
                    <label>1.Name:</label><br></br>
                    <input type="text" placeholder="Enter your answer" name = "Name" value = {this.state.Name} onChange={(event) => this.handle(event)}/><br></br>


                    <label>2.Roll number</label><br></br>
                    <input type="text" placeholder="Enter your answer" name = "Roll" value = {this.state.Roll} onChange={(event) => this.handle(event)}/><br></br>

                    <label>3.Email Address of PI:</label><br></br>
                    <input type="text"  placeholder="Enter your answer" name = "Email" value = {this.state.Email} onChange={(event) => this.handle(event)}/><br></br>

                    <label>4.CGPA</label><br></br>
                    <input type="text"  placeholder="Enter your answer" name = "gpa" value = {this.state.gpa} onChange={(event) => this.handle(event)}/><br></br>

                    <label>5.College name</label><br></br>
                    <input type="text"  placeholder="Enter your answer" name = "clg" value = {this.state.clg} onChange={(event) => this.handle(event)}/><br></br>

                    <label>6.Date of Birth:</label><br></br>
                    
                    <input type="date"  placeholder="Please input date in format " name = "dob" value = {this.state.dob} onChange={(event) => this.handle(event)}/><br></br>
                    </div>
                <br></br>
                <input className="subbutton" type = "submit" value="AddRecord" onClick= {this.sub}/>
                </form>
            </div>
        </div>

        )
    }
}
export default Eval;
