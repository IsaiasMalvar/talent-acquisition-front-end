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
                "flex md:flex-row justify-around relative p-4 mobile:flex-col md:text-base font-mono text-slate-100 font-bold",
                className,
            )}
        >
            <Link className="border-link" to="/">
                Home
            </Link>

            <Link to="/" className="border-link">
                Talent Fulfillment Portal
            </Link>

            <Link to="/career-portal" className="border-link">
                Careers Portal
            </Link>
        </header>
    )
}

export default Header
