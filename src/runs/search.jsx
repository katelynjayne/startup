import React from "react"
import { useNavigate } from "react-router-dom";

export function Search() {
    const [errorMessage, setErrorMessage] = React.useState("");
    const navigate = useNavigate();

    async function findUser(userName) {
        const response = await fetch(`/api/search?username=${encodeURIComponent(userName)}`, {
            method: 'get'
        });
        if (!response.ok) {
            setErrorMessage("User does not exist.")
        }
        else {
            const userData = await response.json()
        if (!userData) {
            setErrorMessage("Sorry, that user has not added any runs.");
        } else {
            navigate("/runs", {state: {userName: userName, data: userData}});
        }}
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