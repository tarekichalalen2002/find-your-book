import PersonalStatistics from "../../components/PersonalStatistics";
import Sidebar from "../../components/Sidebar";

const PersonalStatisticsPage = () => {
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
            <PersonalStatistics/>
    </div>
    </body>
    )
}

export default PersonalStatisticsPage;