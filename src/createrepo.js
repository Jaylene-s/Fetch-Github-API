import React from "react";
import { token } from "./getuser"

function CreateRepo() {
    const [repoName, setRepoName] = React.useState("");
    const [repoDes, setRepoDes] = React.useState("");

    const handleName= (e) => {
        const value = e.target.value;
        setRepoName(value);
    };

    const handleDespriction= (e) => {
        const value = e.target.value;
        setRepoDes(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();   
        let data = {
            name: repoName,
            description: repoDes
        }
        //console.log(token)
        fetch(`https://api.github.com/user/repos`, {
            method: 'POST',
            headers: {
                authorization: `token ${token}`,
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log(err);
        });
    };
    
    function handleClick() {
        const ul = document.getElementById("repos")
        const li = document.createElement("li")
        const a = document.createElement("a")
        a.innerText = repoName;
        li.appendChild(a)
        li.setAttribute('key', repoName)
        li.setAttribute("id", repoName)
        ul.appendChild(li)
        ul.insertBefore(li, ul.childNodes[0]);
        const newDes = document.getElementById("repoDes");
        const newRepo = document.getElementById("repoName");
        newRepo.value = "";
        newDes.value = "";
        
    }

    return (
        <div id="make-repo" className="third">
            <form id="formValue" onSubmit={handleSubmit}>
                <input 
                id="repoName" 
                type="text" 
                placeholder="Repo name" 
                value={repoName} 
                onChange={handleName}
                />
                <br />
                <input id="repoDes" type="text" placeholder="Repo description" value={repoDes} onChange={handleDespriction} />
                <br />
                <input id="createBtn" type="Submit" value="Create a Repo" onClick={handleClick} />
            </form>
        </div>
    );
}

export default CreateRepo;