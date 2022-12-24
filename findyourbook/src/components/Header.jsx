import { useState } from "react"
import {AiOutlineSearch} from "react-icons/ai"
import { useSelector } from "react-redux";


const Header = ({title}) => {
    const state = useSelector((state) => state);
    const darkMode = (state.mode === "dark");
    const [width, setWindowWidth] = useState(window.innerWidth);
    const [isSearchToggled , setIsSearchToggled] = useState(false);
    const [smallScreen,setSmallScreen] = useState(width<800);
    // je dois changer le tooggling en hovering
    const updateDimensions = () => {
        const width = window.innerWidth
        setWindowWidth(width)
        if (width<800){
            setSmallScreen(true);
        }
        else{
            setSmallScreen(false);
        }
    }
    window.addEventListener("resize", updateDimensions)
    return (
        <div 
        className={`w-full flex flex-row-reverse justify-between items-center mb-7 pt-0
        shadow-lg p-3 rounded-2xl
        `}
        >
            <div 
            className={`flex flex-row items-center ease-in-out duration-500 ${!isSearchToggled ? "w-10" : "w-full px-10"}`}
            
            onMouseOver={() => setIsSearchToggled(true)}
            onMouseOut={() => setIsSearchToggled(false)}
            >
            <button 
            className={`w-10 flex justify-center
            rounded-lg border border-blue-200 h-10 text-xl items-center
            ${darkMode ? "text-gray-200 bg-slate-700" : "text-gray-800 bg-slate-300" }
            p-1 opacity-70 shadow-xl 
            hover:opacity-100`}
            >
                <AiOutlineSearch/>
            </button>
            <input type="text" className={`border border-blue-200 shadow-xl px-5 origin-right
            ${darkMode ? "bg-slate-500" : "bg-slate-200"}
            rounded-lg h-10 ${isSearchToggled ? "w-full" :"hidden"}`}
            placeholder="search"
            />
            </div>
            <h1 
            className={`text-3xl font-semibold  
            ${!smallScreen && "w-1/2"}
            ${darkMode ? "text-gray-200" : "text-gray-700" }`}
            >{title}</h1>
            
        </div>
    )
}
export default Header;