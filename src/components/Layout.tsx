import React, { ReactNode, useEffect, useState } from "react"
import Header from "./Header"
import { characterBreaker } from "../utils/utils"

interface LayoutProps {
    children?: ReactNode
}

const Layout = ({ children }: LayoutProps): React.ReactElement => {
    const heroText: string = "Empowering your business with cutting-edge talent"

    const [infoText, setInfoText] = useState<string>("")

    const typeWriteInfo = () => {
        const heroTextCharacters = characterBreaker(heroText)
        let index = 0

        const interval = setInterval(() => {
            if (index < heroTextCharacters.length - 1) {
                setInfoText((prevText) => {
                    const newText = prevText + heroTextCharacters[index]
                    index++
                    return newText
                })
            } else {
                clearInterval(interval)
            }
        }, 40)
    }

    useEffect(() => {
        typeWriteInfo()
    }, [])

    return (
        <div className="h-screen w-screen flex flex-col bg-custom relative overflow-clip">
            <Header className="" />
            <div className="w-[600px] h-[600px] absolute bottom-0 right-0 p-5">
                <img className="object-cover" src="/tm-illustration.png" />
            </div>
            <div className="text-5xl w-[900px] mt-40 text-wrap p-10 font-serif text-white uppercase font-bold">
                {infoText}
            </div>

            {children}
        </div>
    )
}

export default Layout
