import Sidebar from "../../components/Sidebar";
import Saved from "../../components/Saved";

const SavedPage = () => {
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
            <Saved/>
    </div>
    </body>
    )
}

export default SavedPage;