import Header from "./Header"
import {BsStarHalf , BsStarFill} from "react-icons/bs"
import { useState } from "react";
import { useSelector } from "react-redux";
import {AiFillCheckCircle , AiOutlineCheckCircle,AiFillFileAdd,AiOutlineFileAdd} from "react-icons/ai";
import {GrAmazon} from "react-icons/gr"
import {  Line } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"
import {colors, bookVisitsPerMonth } from "./data";

const Book = () => {
    const state = useSelector((state) => state);
    const darkMode = (state.mode === "dark");
    const ratingStats = {
        oneStar:5,
        twoStars:12,
        threeStars:40,
        fourStars:150,
        fiveStars:72    
    }
    const totalRatings = ratingStats.oneStar +ratingStats.twoStars +ratingStats.threeStars +ratingStats.fourStars +ratingStats.fiveStars; 
    const ratingsPct = [parseInt((ratingStats.oneStar * 100)/totalRatings),parseInt((ratingStats.twoStars * 100)/totalRatings),
    parseInt((ratingStats.threeStars * 100)/totalRatings),parseInt((ratingStats.fourStars * 100)/totalRatings),parseInt((ratingStats.fiveStars * 100)/totalRatings)]
    console.log(ratingsPct);
    const stars=3.6;
    const completeStars = parseInt(stars);
    const starsArray = [];
    for (let i = 0 ; i<completeStars ; i++){
        starsArray.push(<BsStarFill/>)
    }
    const LastStar = () => {
        if  ((stars - completeStars) < 0.1){
            return null
        }
        if ((stars - completeStars) <= 0.5){
            return <BsStarHalf/>
        }
        return <BsStarFill/>
    }

    const [coloredStarsOnHover,setColoredStarsOnHover] = useState(0);
    const [coloredStarsOnClick , setColoredStarsOnClick] = useState(0);
    const [isRatingToggled , setIsRatingToggled] = useState(false);
    const [isReadHidden , setIsReadHidden] = useState(true);
    const [isAddHidden , setIsAddHidden] =useState(true);
    const [isBuyHidden , setIsBuyHidden] = useState(true);
    const [isAddedClicked , setIsAddedClicked] = useState(false);

    const visitsPerMonth = {
        labels:bookVisitsPerMonth.map((category) => category[0]),
        datasets:[
            {
                label:"Visits per month",
                data:bookVisitsPerMonth.map((category) => category[1]),
                backgroundColor:colors.slice(1),
                borderColor: darkMode ? "#f1f5f9" : "#1e293b" ,
                borderWidth: 3,
            }
        ],
    }

    const LineChart = ({Chartdata}) => {
        return <Line data={Chartdata} />
    }

    return(
    <section
        className="sm:w-4/6 h-full absolute right-0 w-11/12
        p-7 ">
        <Header title="Book"/>

        <section 
        className="block
        "
        >
            <div
            className="sm:flex sm:gap-5 block pb-5 rounded-lg shadow-lg pl-2
            "
            >
                <div 
                className="sm:w-[20rem] sm:h-[16rem]
                w-[11rem] h-[15rem]"
                >
                    <img 
                    src="https://edit.org/photos/img/blog/t9i-edit-book-covers-online.jpg-840.jpg"
                    className="w-full h-full rounded-sm
                    shadow-md"
                    />
                </div>
                <div
                className="flex flex-col gap-4 pt-4 sm:pt-0">
                    <div
                    className="flex gap-2 items-end"
                    >
                        <h1
                        className={`text-xl font-semibold ${darkMode ? "text-slate-300" :"text-slate-800"}`}
                        >Title: </h1>
                        <h1
                        className={`text-xl ${darkMode ? "text-gray-200" :"text-gray-700"}`}
                        >Monkey Grip</h1>
                    </div>
                    <div
                    className="flex gap-2 items-end"
                    >
                        <h1
                        className={`text-xl font-semibold ${darkMode ? "text-slate-300" :"text-slate-800"}`}
                        >Author: </h1>
                        <a href="/authors/:id"><h1
                        className={`text-xl cursor-pointer
                        ${darkMode ? "text-gray-200 hover:text-blue-400" : "text-gray-700 hover:text-blue-800"}
                        `}
                        >Helen Warner</h1>
                        </a>
                    </div>
                    <div
                    className="flex gap-2 items-end"
                    >
                        <h1
                        className={`text-xl font-semibold ${darkMode ? "text-slate-300" :"text-slate-800"}`}
                        >Year: </h1>
                        <h1
                        className={`text-xl ${darkMode ? "text-gray-200" :"text-gray-700"}`}
                        >2005</h1>
                    </div>
                    <div
                    className="flex gap-2 items-start"
                    >
                        <h1
                        className={`text-xl font-semibold ${darkMode ? "text-slate-300" :"text-slate-800"}`}
                        >Trailer: </h1>
                        <h1
                        className={`text-xl ${darkMode ? "text-gray-200" :"text-gray-700"}`}
                        >Lorem Ipsum is simply dummy text of 
                        the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's 
                        standard dummy text ever since the 1500s.</h1>
                    </div>
                    <div
                    className="flex gap-2 items-start"
                    >
                        <h1
                        className={`text-xl font-semibold ${darkMode ? "text-slate-300" :"text-slate-800"}`}
                        >Rating: </h1>
                        <div
                        className="flex flex-row gap-2 items-start"
                        >
                            <h1
                            className={`text-xl ${darkMode ? "text-gray-200": "text-gray-700"}`}>
                            {stars}</h1>
                            <div
                            className="text-[1.7rem] flex text-yellow-400"
                            >
                            {starsArray.map((star) => {
                            return star
                            })}
                            <LastStar/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* buttons */}
            
            <div
            className={`flex w-full flex-col sm:flex-row justify-around p-5 gap-5 mt-4
            sm:gap-2`}
            >
                <button
                className={`text-3xl flex flex-row items-center gap-2
                w-auto sm:w-1/3
                ${darkMode ? "text-gray-200" :"text-gray-700" }
                `}
                onMouseOver={() => setIsReadHidden(false)}
                onMouseLeave={() => setIsReadHidden(true)}
                onClick={() => setIsRatingToggled(!isRatingToggled)}
                >
                {isRatingToggled ? <AiFillCheckCircle/> : <AiOutlineCheckCircle/>}
                {isRatingToggled ? 
                <span
                className={`text-xl`}
                >Already read</span>: 
                <span
                className={` ease-in-out duration-300
                ${isReadHidden ? "opacity-0 translate-x-[-20%]":"opacity-100 translate-x-0"}
                text-xl`}
                >
                    Already read ?
                </span>}
                </button>
                <button
                className={`text-3xl flex flex-row items-center gap-2
                w-auto sm:w-1/3
                ${darkMode ? "text-gray-200" :"text-gray-700" }
                `}
                onMouseOver={() => setIsAddHidden(false)}
                onMouseLeave={() => setIsAddHidden(true)}
                onClick={() => setIsAddedClicked(!isAddedClicked)}
                >
                {isAddedClicked ? <AiFillFileAdd/> : <AiOutlineFileAdd/>}
                {isAddedClicked ? 
                <span
                className={`text-xl`}
                >Added</span>:  
                <span
                className={` ease-in-out duration-300
                ${isAddHidden ? "opacity-0 translate-x-[-20%]":"opacity-100 translate-x-0"}
                text-xl`}
                >
                    Add to collection?
                </span>}
                </button>
                <button
                className={`text-3xl flex flex-row items-center gap-2
                w-auto sm:w-1/3
                ${darkMode ? "text-gray-200" :"text-gray-700" }
                `}
                onMouseOver={() => setIsBuyHidden(false)}
                onMouseLeave={() => setIsBuyHidden(true)}
                >
                <GrAmazon/>
                <span
                className={` ease-in-out duration-300
                ${isBuyHidden ? "opacity-0 translate-x-[-20%]":"opacity-100 translate-x-0"}
                text-xl`}
                >
                    Buy ?
                </span>
                </button>
            </div>

            <div
            className={`w-full h-[50px] mt-5 flex flex-col
            gap-5
            ${isRatingToggled ? "" :"hidden"}
            `}
            >
                <h1 
                className={`text-2xl font-semibold 
                ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                >Rate This Book: </h1>
                <div className="flex justify-between pr-[4rem] rounded-lg shadow-md pb-4 ease-in-out duration-300">
                    <div
                    className="flex justify-between items-start sm:w-1/3 w-1/2  ease-in-out duration-300"
                    onMouseLeave={() => setColoredStarsOnHover(0)}
                    >
                        <button
                        className={`${coloredStarsOnHover >= 1 || coloredStarsOnClick >=1 ? "text-yellow-400" : "text-gray-500"} text-3xl ease-in-outduration-300`}
                        onMouseOver={() => setColoredStarsOnHover(1)}
                        onClick={() => {
                            if(coloredStarsOnClick == 1){
                                setColoredStarsOnClick(0)
                            }
                            else{
                                setColoredStarsOnClick(1)
                            }
                        }}
                        >
                            <BsStarFill/>
                        </button>

                        <button
                        value={2}
                        className={`${coloredStarsOnHover >=2 || coloredStarsOnClick >=2 ? "text-yellow-400" : "text-gray-500"} text-3xl ease-in-outduration-300
                        `}
                        onMouseOver={() => setColoredStarsOnHover(2)}
                        onClick={() => {
                            if(coloredStarsOnClick == 2){
                                setColoredStarsOnClick(0)
                            }
                            else{
                                setColoredStarsOnClick(2)
                            }
                        }}>
                            <BsStarFill/>
                        </button>
                        <button
                        value={3}
                        className={`${coloredStarsOnHover>=3 || coloredStarsOnClick >=3 ? "text-yellow-400" : "text-gray-500"} text-3xl ease-in-outduration-300
                        `}
                        onMouseOver={() =>setColoredStarsOnHover(3)}
                        onClick={() => {
                            if(coloredStarsOnClick == 3){
                                setColoredStarsOnClick(0)
                            }
                            else{
                                setColoredStarsOnClick(3)
                            }
                        }}>
                            <BsStarFill/>
                        </button>
                        <button
                        value={4}
                        className={`${coloredStarsOnHover>=4 || coloredStarsOnClick >=4 ? "text-yellow-400" : "text-gray-500"} text-3xl ease-in-outduration-300
                        `}
                        onMouseOver={() =>setColoredStarsOnHover(4)}
                        onClick={() => {
                            if(coloredStarsOnClick == 4){
                                setColoredStarsOnClick(0)
                            }
                            else{
                                setColoredStarsOnClick(4)
                            }
                        }}>
                            <BsStarFill/>
                        </button>
                        <button
                        value={5}
                        className={`${coloredStarsOnHover>=5 || coloredStarsOnClick >=5 ? "text-yellow-400" : "text-gray-500"} text-3xl ease-in-outduration-
                        `}
                        onMouseOver={() =>setColoredStarsOnHover(5)}
                        onClick={() => {
                            if(coloredStarsOnClick == 5){
                                setColoredStarsOnClick(0)
                            }
                            else{
                                setColoredStarsOnClick(5)
                            }
                        }}>
                            <BsStarFill/>
                        </button>
                    </div>
                    <button
                    className={`text-xl  font-medium 
                    px-3 py-2 rounded-lg shadow-lg ease-in-out duration-300 
                    ${darkMode ? "bg-slate-400 text-slate-900 hover:bg-slate-500" : "bg-slate-200 text-slate-600hover:bg-slate-400"}
                    hover:shadow-xl ${coloredStarsOnClick == 0 ? "hidden" : ""}`}
                    >
                        Submit
                    </button>
                </div>
            </div><br/><br /><br />

            <div>
                <h1
                className={`text-2xl font-semibold 
                ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                >Rating Statistics: </h1>
                <div
                className="flex flex-col items-center gap-4 pt-5 rounded-lg shadow-lg py-3"
                >
                    <div
                    className="flex flex-row w-full items-center gap-4"
                    >
                        <h1
                        className={`text-2xl font-medium 
                        ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                        >5</h1>
                        <div
                        className="w-3/4 sm:w-2/3 h-[17px] bg-slate-300 rounded-lg shadow-md"
                        >
                            <div
                            className={`h-full bg-blue-700 z-40 rounded-lg
                            `}
                            style={{width:String(ratingsPct[4])+"%"}}></div>
                        </div>
                    </div>

                    <div
                    className="flex flex-row w-full items-center gap-4"
                    >
                        <h1
                        className={`text-2xl font-medium 
                        ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                        >4</h1>
                        <div
                        className="w-3/4 sm:w-2/3 h-[17px] bg-slate-300 rounded-lg shadow-md"
                        >
                            <div
                            className={`h-full bg-blue-700 z-40 rounded-lg
                            `}
                            style={{width:String(ratingsPct[3])+"%"}}></div>
                        </div>
                    </div>

                    <div
                    className="flex flex-row w-full items-center gap-4"
                    >
                        <h1
                        className={`text-2xl font-medium 
                        ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                        >3</h1>
                        <div
                        className="w-3/4 sm:w-2/3 h-[17px] bg-slate-300 rounded-lg shadow-md"
                        >
                            <div
                            className={`h-full bg-blue-700 z-40 rounded-lg
                            `}
                            style={{width:String(ratingsPct[2])+"%"}}></div>
                        </div>
                    </div>

                    <div
                    className="flex flex-row w-full items-center gap-4"
                    >
                        <h1
                        className={`text-2xl font-medium 
                        ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                        >2</h1>
                        <div
                        className="w-3/4 sm:w-2/3 h-[17px] bg-slate-300 rounded-lg shadow-md"
                        >
                            <div
                            className={ `h-full bg-blue-700 z-40 rounded-lg
                            `}
                            style={{width:String(ratingsPct[1])+"%"}}></div>
                        </div>
                    </div>

                    <div
                    className="flex flex-row w-full items-center gap-4"
                    >
                        <h1
                        className={`text-2xl font-medium 
                        ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                        >1</h1>
                        <div
                        className="w-3/4 sm:w-2/3 h-[17px] bg-slate-300 rounded-lg shadow-md"
                        >
                            <div
                            className={`h-full bg-blue-700 z-40 rounded-lg
                            `}
                            style={{width:String(ratingsPct[0])+"%"}}></div>
                        </div>
                    </div>


                </div>
            </div>
            
            <div
            className={`flex flex-col gap-7 mt-7`}
            >
                <h1
                className={`text-2xl font-semibold 
                ${darkMode ? "text-slate-200" : "text-slate-800"}`}
                >Visits Statistics: </h1>
                <div
                className="flex flex-col items-center self-center w-full
                sm:w-3/4 gap-5"
                >
                    <LineChart Chartdata={visitsPerMonth} />
                    <h1
                    className={`text-base sm:text-xl font-semibold 
                    ${darkMode ? "text-slate-200" : "text-slate-800"}
                    text-center`}
                    >Visits Per Month</h1>
                </div>
            </div>

            <div
            className="w-full h-[100px]"
            ></div>
            

        </section>
    </section>
    )}
export default Book;