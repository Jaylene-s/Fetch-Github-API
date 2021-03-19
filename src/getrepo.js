import React from "react";
import { user } from "./getuser"

function GetRepo() {
    const [repo, setRepo] = React.useState("");
    const handleClick = (e) => {
        e.preventDefault();
        const RepoUrl = `https://api.github.com/users/${user}/repos`
        fetch(RepoUrl) 
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const res = data.map((title) => {
                return title.name
            })
            setRepo(res);
            // console.log(res)
        })
         .catch((error)=> console.log(error));
    };

    return (
        <div>
            <div id="show-repos" className="third">
                <button id="showRepoBtn" onClick={handleClick}>Get My Repos</button>
                {repo && (
                <ul id="repos">
                    {repo.map((rep) => (
                        <li key={rep} id={rep}> {rep} </li>
                    ))}
                </ul>)}
            </div>
        </div>
    );
}

export default GetRepo;