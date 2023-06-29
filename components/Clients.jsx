"use client";

export const LogoutBtn = () => {


    const logoutHandler = () =>{
        alert("logout")
    }

    return <button className="btn" onClick={logoutHandler}>Logout</button>
}