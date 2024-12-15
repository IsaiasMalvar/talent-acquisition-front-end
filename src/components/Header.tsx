import React from "react"
import { Link } from "react-router"
import { cn } from "../utils/utils"

interface HeaderProps {
    className?: string
}

const Header = ({ className }: HeaderProps): React.ReactElement => {
    return (
        <header
            className={cn(
                "flex md:flex-row justify-between relative p-5 mobile:flex-col md:text-base font-mono text-slate-100 font-bold",
                className,
            )}
        >
            <div className="border-link relative after:absolute after:bottom-0 after:left-0 after:border-b-2 after:w-full hover:bg-blue-500/45 duration-700 ">
                <Link to="/">Home</Link>
            </div>
            <div className="border-link">
                <Link to="/hiring-manager">Hiring Manager's Portal</Link>
            </div>
            <div className="border-link">
                <Link to="/">Talent Fulfillment Portal</Link>
            </div>
            <div className="border-link">
                <Link to="/career-portal">Careers Portal</Link>
            </div>
        </header>
    )
}

export default Header
