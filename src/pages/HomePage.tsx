import { useEffect, useState } from "react"
import { characterBreaker } from "../utils/utils"
import { Outlet } from "react-router"

const HomePage = (): React.ReactElement => {
    const heroText: string =
        "Empowering your business with cutting-edge talent."

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
        <>
            <div className="mobile:w-[300px] mobile:h-[300px]  mobile:-bottom-10 mobile:left-1/2 -translate-x-1/2 md:w-[400px] md:h-[400px]  absolute md:-bottom-10 -right-2 p-5 ">
                <img className="object-cover" src="/tm-illustration.png" />
            </div>
            <div className="sm:text-4xl md:ml-10 mobile:m-0  flex flex-wrap sm:mt-10 mobile:text-3xl sm:text-wrap md:text-5xl mobile:w-[90%] md:w-[90%] text-wrap  font-serif text-white uppercase font-bold">
                <p className="p-5 break-words ">{infoText}</p>
            </div>
            <Outlet />
        </>
    )
}

export default HomePage
