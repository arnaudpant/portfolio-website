import Navbar from "./Navbar";
import { letters } from "../data";


const Hero = () => {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            <Navbar />
            <div className="flex flex-col md:items-center items-start xl:gap-y-10 gap-y-3 xl:mb-0 md:mb-20 mb-0">
                <h1 className="flex flex-col xl:space-y-8 md:space-y-4 space-y-2 xl:text-6xl md:text-4xl text-3xl md:font-normal font-bold text-yellow-500">
                    <span className="flex">
                        {
                            letters.map((letter, index) => (
                                <span key={index} className="inline-block md:w-38 w-32 xl:-mr-20 -mr-24">{letter.char}</span>
                            ) )
                        }
                    </span>
                </h1>
            </div>
        </div>
    ); 
};

export default Hero;

// 34:52