import React, { useEffect } from "react";
export let user ="";
export let token = "";
// Feature 1: Getting User Data
// user should be able to enter their Github access token. 
// When they submit the form, three things should happen:
// The form dissapears.

function GetUserData() {
    const [searchUser, setSearchUser] = React.useState("");
    const [userName, setUserName] = React.useState("")

    const handleChange = (e) => {
        const value = e.target.value;
        token = value;
        
        setSearchUser(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://api.github.com/user', {
            headers: {
                Authorization: `token ${searchUser}`
            }
        }).then(res => res.json())
        .then((data) => {
            user=data.login;
            setUserName(data.login);
            //console.log(data.login)
        })
        .catch((error)=> console.log(error));
        //.then(data => console.log(data));    
    };

    const handleClick = (e)=>{
        const options = document.getElementById("options");
        options.style.display = "block";
        const tokenInput = document.getElementById("tokenInput");
        tokenInput.style.display = "none";
        e.target.style.display = "none";
    }

    return (
        <div>
        <div id="container">
            <p>Access Token: {searchUser}</p>
        <form onSubmit={handleSubmit}>
            <input id="tokenInput" type="text" value={searchUser} onChange={handleChange}/>
            <input onClick={handleClick} id="tokenSubmit" type="submit" placeholder="Access Token" value="Submit" />
        </form>
        <div>{userName && <p> Welcome, {userName} </p>}</div>
        </div>
        </div>
    );
}
export default GetUserData;
