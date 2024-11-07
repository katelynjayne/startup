import React from "react"
import { useNavigate } from "react-router-dom";

export function Search() {
    const [errorMessage, setErrorMessage] = React.useState("");
    const navigate = useNavigate();

    function findUser(userName) {
        const runDataJson = localStorage.getItem(`${userName}Runs`);
        if (!runDataJson) {
            setErrorMessage("Sorry, that user doesn't exist.");
        } else {
            navigate("/runs", {state: {userName: userName}});
        }
    }

    return (
        <>
            <input className="form-control custom-input" type="text" placeholder="🔍 Search for other runners!" style={{width:"230px"}} 
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        findUser(e.target.value);
                        e.target.value = "";
                    }}}>
            </input>
            {errorMessage && <p>{errorMessage}</p>}
        </>
    );
}