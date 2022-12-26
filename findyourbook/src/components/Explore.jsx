import Header from "./Header"
import { BsStarFill , BsStarHalf } from "react-icons/bs";
import { useSelector } from "react-redux";

const Explore = () => {
    const state = useSelector((state) => state);
    const darkMode = (state.mode === "dark");
    const ratingStars = 4.2;
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

    const exploreBooks = [];
    const popularBooks = [];
    for (let i=0 ; i <10 ; i++){

        exploreBooks.push(
            <div 
                className={`w-[25vh] shadow-xl rounded-lg placeholder-opacity-80 
                ${darkMode ? "hover:bg-slate-700" : "hover:bg-slate-300" }
                hover:placeholder-opacity-100 flex flex-col items-center pt-2`}
                >
                <a href="/books/:id">
                    <img
                    src="https://edit.org/photos/img/blog/t9i-edit-book-covers-online.jpg-840.jpg"
                    className="w-[16vh] h-5/6 rounded-sm shadow-sm ease-in-out duration-300 
                    hover:w-[18vh] hover:h-10/12"
                    />
                </a>
                    <div
                    className="w-full h-full px-3"
                    >
                        <a href="/books/:id">
                            <h3
                            className={`text-xs font-semibold 
                            ${darkMode ? "text-blue-200 hover:text-blue-400" : "text-blue-700 hover:text-blue-900"}
                            ease-in-out duration-300
                             hover:text-sm`}
                            >Monkey Grip</h3>
                        </a>
                        <a href="/authors/:id">
                            <p
                            className={`text-xs 
                            ${darkMode ? "text-gray-100 hover:text-gray-300" :"text-gray-500 hover:text-gray-800"}
                            ease-in-out duration-300
                             hover:text-sm`}
                            >Helen Warner</p>
                        </a>
                        <div
                        className="w-1/2 flex justify-around text-yellow-400"
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
    for (let i=0 ; i <10 ; i++){
        popularBooks.push(
            <div 
            className={`w-[25vh] shadow-xl rounded-lg placeholder-opacity-80 
            ${darkMode ? "hover:bg-slate-700" : "hover:bg-slate-300" }
            hover:placeholder-opacity-100 flex flex-col items-center pt-2`}
                >
                <a href="/books/:id">
                    <img
                    src="https://edit.org/photos/img/blog/t9i-edit-book-covers-online.jpg-840.jpg"
                    className="w-[16vh] h-5/6 rounded-sm shadow-sm ease-in-out duration-300 
                    hover:w-[18vh] hover:h-10/12"
                    />
                </a>
                    <div
                    className="w-full h-full px-3"
                    >
                        <a href="/books/:id">
                            <h3
                            className={`text-xs font-semibold 
                            ${darkMode ? "text-blue-200 hover:text-blue-400" : "text-blue-700 hover:text-blue-900"}
                            ease-in-out duration-300
                             hover:text-sm`}
                            >Monkey Grip</h3>
                        </a>
                        <a href="/authors/:id">
                            <p
                            className={`text-xs 
                            ${darkMode ? "text-gray-100 hover:text-gray-300" :"text-gray-500 hover:text-gray-800"}
                            ease-in-out duration-300
                             hover:text-sm`}
                            >Helen Warner</p>
                        </a>
                        <div
                        className="w-1/2 flex justify-around text-yellow-400"
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


    return(
    <section
        className="sm:w-4/6 h-full absolute right-0 w-11/12
        p-7 pb-9">
    <Header title="Explore"/>
        <section className="flex flex-col gap-48">
            <section className="w-full px-5 min-h-[35vh] h-5">
                <h1
                className={`text-xl font-semibold 
                ${darkMode ? "text-gray-200" : "text-gray-700"}
                mb-3`}
                >Books For You:</h1>
                <div
                className={`w-full 
                
                min-h-[48vh] grid grid-flow-col
                p-3 gap-3 rounded-lg shadow-xl overflow-auto hover:overflow-x-scroll whitespace-nowrap
                scroll-smooth pb-6`}
                >
                    {/* BOOKS SCROLL BAR */}
                    {exploreBooks.map((book)=>{return book})}    
                    
                </div>
            </section>
            <section className="w-full px-5 min-h-[35vh] h-5 block">
                <h1
                className={`text-xl font-semibold 
                ${darkMode ? "text-gray-200" : "text-gray-700"}
                mb-3`}
                >Most Popular:</h1>
                <div
                className={`w-full 
                min-h-[48vh] grid grid-flow-col
                p-3 gap-3 rounded-lg shadow-xl overflow-x-scroll overflow-hidden scroll
                scroll-smooth pb-6`}
                >
                    {/* BOOKS SCROLL BAR */}
                    {popularBooks.map((book)=>{return book})}    
                    
                </div>
                <div
            className="w-full h-[50px] mt-5"
            >
                
            </div>
            </section>
        </section>
    </section>
    )
}

export default Explore;