import { Link, Outlet } from "react-router";
import { cn } from "../utils/utils";

const HomePage = (): React.ReactElement => {
    return (
        <>
            {" "}
            <section className="flex relative  w-full h-[630px] overflow-y-hidden">
                <HeroContent color="text-amber-900" />
                <div className="mobile:hidden md:block border-l-8 border-t-8 border-amber-900/50 tinted-image text-amber-900"></div>
                <div className="md:hidden absolute left-1/2 -translate-x-1/2 bottom-0 sm:-bottom-20">
                    <img src="/tm-illustration.png" className="" />
                </div>
                <Outlet />
            </section>
        </>
    );
};

interface HeroContentInterface {
    color: string;
}

const HeroContent = ({ color }: HeroContentInterface): React.ReactElement => {
    const heroText: string = "Empower your business.";
    const heroText2: string = "Cutting Edge Talent Hunt";
    return (
        <div className="flex-grow  justify-center mobile:items-center md:items-start mt-52 sm:text-4xl md:ml-10 mobile:m-0 flex-col flex flex-wrap sm:mt-10 mobile:text-3xl sm:text-wrap md:text-5xl mobile:w-[90%]  text-wrap  font-serif text-white uppercase font-bold">
            <div>
                <p className={cn("font-poppins p-3 pb-1 break-words", color)}>
                    {heroText}
                </p>
                <p
                    className={cn(
                        "p-3 pt-0 sm:text-xl text-3xl font-sans text-amber-800"
                    )}
                >
                    {heroText2}
                </p>
            </div>

            <button className=" m-auto  mobile:p-1  mb-0 mt-4 mobile:text-base sm:text-xl text-2xl p-3 hover:bg-amber-700 transition-all duration-150 font-mono w-[70%] border-b border-orange-800">
                <Link to="/create-new-request">Fill New Request</Link>
            </button>
            <button className=" m-auto  mobile:p-1 mt-0 mobile:text-base sm:text-xl text-2xl p-3 hover:bg-amber-700 transition-all duration-150 font-mono w-[70%] border-b border-orange-800">
                View All Requests
            </button>
        </div>
    );
};

export default HomePage;
