import BookPlans from "../../components/BookPlans";
import Sidebar from "../../components/Sidebar";

const BookPlansPage = () => {
    return(
        <body className="flex justify-center">
        <div 
        className="
        bg-slate-100 flex justify-center shadow-xl rounded
        min-h-screen
        w-full
        relative
        h-auto
        items-centere"
        >
            <Sidebar/>
            <BookPlans/>
    </div>
    </body>
    )
}

export default BookPlansPage;