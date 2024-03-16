import React from "react";
import Navbar from "@/Components/Navbar";

export default function Authenticated({  children }) {

    return (
        <>
         <div className={` bg-white dark:bg-black min-h-screen max-w-full p-3`}>
            <Navbar/>
            <main>{children}</main>
        </div>
        </>
    );
}
