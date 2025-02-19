
import { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
    header?: string;
    description?: string;
    footer?: string;
}

export default function Card(props: CardProps) {
    return (
        <div className={`bg-slate-900 p-4 rounded-md shadow-md ${props.className}`}>
            {props.header && <header className="text-2xl">{props.header}</header>}
            {props.description && <p>{props.description}</p>}
            {props.children}
            {props.footer && <footer>{props.footer}</footer>}
        </div>
    )
}