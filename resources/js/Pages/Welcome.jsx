import React from "react";
import PublicLayout from "@/Layouts/PublicLayout";
import Navbar from "@/Components/Navbar";

export default function Welcome () {

    return (
        <PublicLayout>
           <div className="text-center text-gray-600 dark:text-white text-5xl font-semibold p-5 mt-40">This My first Starter Kit</div>
        </PublicLayout>
    )
}
