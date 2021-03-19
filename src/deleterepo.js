import React from "react";
import { user, token } from "./getuser"

//to delete have to use sorted
function DeleteRepo() {
    
    //const [deleteRepo, setDeleteRepo] = React.useState("");
    const [repoName, setRepoName] = React.useState("")

    const handleName= (e) => {
        const value = e.target.value;
        setRepoName(value);
    };

    const handleRepo = (e) => {
        e.preventDefault();
        let data ={
            name: repoName
        }
        fetch(`https://api.github.com/repos/${user}/${repoName}`, {
            method: 'DELETE',
            headers: {
                authorization: `token ${token}`,
            },
            body: JSON.stringify(data),
        }) 
        .then((response) => {
            return response.json();
        }).then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log(err);
        });
    };

    function handleClick() {
        const ul = document.getElementById("repos")
        const li = document.getElementById(`${repoName}`);
        if(ul.querySelector(`#${repoName}`)=== null) {
            alert("Not found");
        }else{
            alert("Repo was Deleted");
            ul.removeChild(li);
        }
        
        const deleted = document.getElementById("deletedRepo");
        deleted.value = "";
    }

    return (
        <div id="delete-repo" className="third">
            <form onSubmit={handleRepo}>
            <input 
            id="deletedRepo"
            type="text" 
            placeholder="Name of repo to delete" 
            value={repoName} 
            onChange={handleName}
            />
            <br />
            <input type="Submit" value="Delete Repo" onClick={handleClick} />
            </form>
      </div>
    );
}

export default DeleteRepo;
