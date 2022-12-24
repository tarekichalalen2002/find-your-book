import LoginForm from "../../components/LoginForm";

const Login = () => {
    return (
        <section
        className="w-full flex flex-col items-center gap-4 mt-5"
        >
            <section 
            className="w-3/4 sm:w-5/12 h-auto bg-slate-300
            rounded-lg shadow-lg shadow-slate-400 flex flex-col
            items-center"
            >
                <LoginForm />
            </section>
        </section>
    )
}

export default Login;