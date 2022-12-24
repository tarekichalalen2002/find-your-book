import Categories from "../../components/Categories";
import Sidebar from "../../components/Sidebar";

const CategoriesPage = () => {
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
            <Categories/>
    </div>
    </body>
    )
}

export default CategoriesPage;