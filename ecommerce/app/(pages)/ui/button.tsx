"use client"
import { ReactNode } from "react";

interface ButtonProps {
    func?: () => void;
    children: ReactNode;
    className?: string;
}



export default function Button(props: ButtonProps) {
    return (
        <button onClick={props.func} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${props.className}`} >
            {props.children}
        </button>
    )
}