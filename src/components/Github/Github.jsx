import React from 'react'
import { useLoaderData } from "react-router-dom";

const Github = () => {
    const data = useLoaderData();
    return (
        <div className="text-center my-4 bg-gray-600 text-white p-8 text-5xl" > Total Repositories : {data.public_repos} </div>
    )
}

export default Github;

export const githubDetailsLoader = async () => {
    const response = await fetch("https://api.github.com/users/shubhamrpgupta");
    return response.json();
}