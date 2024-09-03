import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import Loader from "../../components/loader/Loader";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Login = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    // Regex pattern for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const userLoginFunction = async () => {
        // Validation for email format
        if (!emailRegex.test(userLogin.email)) {
            toast.error("Please enter a valid email address");
            return;
        }

        // Check if fields are empty
        if (userLogin.email === "" || userLogin.password === "") {
            toast.error("All fields are required");
            return;
        }

        setLoading(true);
        try {
            const users = await signInWithEmailAndPassword(auth, userLogin.email, userLogin.password);

            try {
                const q = query(
                    collection(fireDB, "user"),
                    where('uid', '==', users?.user?.uid)
                );
                const data = onSnapshot(q, (QuerySnapshot) => {
                    let user;
                    QuerySnapshot.forEach((doc) => user = doc.data());
                    localStorage.setItem("users", JSON.stringify(user));
                    setUserLogin({
                        email: "",
                        password: ""
                    });
                    toast.success("Login Successfully");
                    setLoading(false);
                    if (user.role === "user") {
                        navigate('/user-dashboard');
                    } else {
                        navigate('/admin-dashboard');
                    }
                });
                return () => data;
            } catch (error) {
                console.error(error);
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
            toast.error("Login Failed");
        }
    }

    return (
        <div>
            <Navbar />
            <div className='flex justify-center items-center h-screen'>
                {loading && <Loader />}
                <div className="login_Form bg-purple-50 px-8 py-6 border border-purple-100 rounded-xl shadow-md">
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-purple-500'>
                            Login
                        </h2>
                    </div>
                    <div className="mb-3">
                        <input
                            type="email"
                            name="email"
                            placeholder='Email Address'
                            value={userLogin.email}
                            onChange={(e) => {
                                setUserLogin({
                                    ...userLogin,
                                    email: e.target.value
                                })
                            }}
                            className='bg-purple-50 border border-purple-200 px-2 py-2 w-96 rounded-md outline-none placeholder-purple-200'
                        />
                    </div>
                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder='Password'
                            value={userLogin.password}
                            onChange={(e) => {
                                setUserLogin({
                                    ...userLogin,
                                    password: e.target.value
                                })
                            }}
                            className='bg-purple-50 border border-purple-200 px-2 py-2 w-96 rounded-md outline-none placeholder-purple-200'
                        />
                    </div>
                    <div className="mb-5">
                        <button
                            type='button'
                            onClick={userLoginFunction}
                            className='bg-purple-500 hover:bg-purple-600 w-full text-white text-center py-2 font-bold rounded-md'
                        >
                            Login
                        </button>
                    </div>
                    <div>
                        <h2 className='text-black'>Don't have an account? <Link className='text-purple-500 font-bold' to={'/signup'}>Signup</Link></h2>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;

