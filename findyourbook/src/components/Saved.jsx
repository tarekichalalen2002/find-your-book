import Header from "./Header"
import { useSelector } from "react-redux";
import { BsStarFill , BsStarHalf } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";


const Saved = () => {
    const state = useSelector((state) => state);
    const darkMode = (state.mode === "dark");
    const ratingStars = 3.5;
    const completeStars = parseInt(ratingStars);
    const starsArray = [];
    for (let i = 0 ; i<completeStars ; i++){
        starsArray.push(<BsStarFill/>)
    }
    const LastStar = () => {
        if ((ratingStars - completeStars) < 0.1){
            return null
        }
        if ((ratingStars - completeStars) <= 0.5){
            return <BsStarHalf/>
        }
        return <BsStarFill/>
    }

    const booksCollection = [];
    for (let i = 0 ; i < 8 ; i++) {
        booksCollection.push(
            <div
            className={`w-[28vh] flex flex-col gap-3 items-center px-2 pt-2 pb-3
            rounded-xl shadow-xl ease-in-out duration-300
            ${darkMode ? "hover:bg-slate-700" : " hover:bg-slate-300"}
            cursor-pointer
            `}
            >
                <img 
                src="https://edit.org/photos/img/blog/t9i-edit-book-covers-online.jpg-840.jpg"
                className={`w-2/3 rounded-sm shadow-md`}  
                alt="" />
                <div>
                <h1 
                className={`text-sm font-medium
                ${darkMode ? "text-blue-200 hover:text-blue-400" : "text-blue-600 hover:text-blue-800"}
                ease-in-out duration-300
                `}
                >Monkey Grip</h1>
                <h1
                className={`text-sm
                ${darkMode ? "text-gray-200 hover:text-gray-400" :"text-gray-800 hover:text-gray-900"}
                ease-in-out duration-300
                `}
                >Hellen Warner</h1>
                <div
                className="w-1/2 flex justify-around text-yellow-400 text-xl"
                >
                    {
                        starsArray.map((star) => star)
                    }
                    <LastStar/>
                </div>
                <div>

                    </div>
                </div>
            </div>
        )
    }

    const [isAddHidden , setIssAddHidden] = useState(true);

    return(
    <section
        className="sm:w-4/6 h-full absolute right-0 w-11/12
        p-7 ">
        <Header title="Saved"/>
        <section
        className="flex flex-col gap-5">
            <h1
            className={`text-2xl font-medium
            ${darkMode ? "text-gray-200" : "text-gray-800"}
            `}
            >Your Collection:</h1>
            <div
            className={`
            grid mobile:grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4
            gap-4 gap-y-7
            `}
            >
                {booksCollection.map((book) =>{ return book })}
                <div
                className={`
                w-[28vh] flex gap-3 items-center justify-center px-2 pt-2 pb-3
                rounded-xl shadow-xl 
                ${darkMode ? "bg-slate-600 hover:bg-slate-700" : "bg-slate-300 hover:bg-slate-400"}
                cursor-pointer h-[42vh]
                `}
                onMouseOver={() => setIssAddHidden(false)}
                onMouseLeave={() => setIssAddHidden(true)}
                >
                    <div
                    className={`flex flex-col text-3xl gap-4 items-center
                    justify-center
                    ${darkMode ? "text-gray-200" :"text-gray-800"}
                    ease-in-out duration-300`}
                    >
                        <AiOutlinePlus/>
                        <span 
                        className={`text-xl flex flex-col items-center
                        justify-center text-center ease-in-out duration-300
                        ${isAddHidden ? "opacity-0 translate-y-full":"opacity-100 translate-y-0"}
                        `}
                        >Add another Book ?</span>
                    </div>
                </div>
            </div>
            <div
            className="w-full h-[50px]"
            ></div>
        </section>
    </section>
    )}

export default Saved;