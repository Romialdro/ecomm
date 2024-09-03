import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import Loader from "../../components/loader/Loader";
import Navbar from "../../components/navbar/Navbar";  
import Footer from "../../components/footer/Footer"; 

const Signup = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    // navigate 
    const navigate = useNavigate();

    // User Signup State 
    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    // Error states
    const [passwordError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [nameError, setNameError] = useState("");

    // Regex patterns
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;

    /**========================================================================
     *                          User Signup Function 
    *========================================================================**/

    const userSignupFunction = async () => {
        // validation 
        if (userSignup.name === "" || userSignup.email === "" || userSignup.password === "") {
            toast.error("All Fields are required");
            return;
        }

        // Name validation
        if (!nameRegex.test(userSignup.name)) {
            setNameError("Name can only contain letters and single spaces between words.");
            return;
        } else {
            setNameError(""); // Clear any previous errors
        }

        // Email validation
        if (!emailRegex.test(userSignup.email)) {
            setEmailError("Please enter a valid email address.");
            return;
        } else {
            setEmailError(""); // Clear any previous errors
        }

        // Password validation
        if (!passwordRegex.test(userSignup.password)) {
            setPasswordError("Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.");
            return;
        } else {
            setPasswordError(""); // Clear any previous errors
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            // create user object
            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role,
                time: Timestamp.now(),
                date: new Date().toLocaleString(
                    "en-US",
                    {
                        month: "short",
                        day: "2-digit",
                        year: "numeric",
                    }
                )
            }

            // create user Refrence
            const userRefrence = collection(fireDB, "user");

            // Add User Detail
            await addDoc(userRefrence, user);

            setUserSignup({
                name: "",
                email: "",
                password: ""
            });

            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/login');
        } catch (error) {
            console.log(error);
            setLoading(false);
        }

    }

    return (
        <div>
            <Navbar />
            <div className='flex justify-center items-center h-screen'>
                {loading && <Loader />}
                {/* Login Form  */}
                <div className="login_Form bg-purple-50 px-8 py-6 border border-purple-100 rounded-xl shadow-md">

                    {/* Top Heading  */}
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-purple-500 '>
                            Signup
                        </h2>
                    </div>

                    {/* Input One  */}
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder='Full Name'
                            value={userSignup.name}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    name: e.target.value
                                });
                            }}
                            className='bg-purple-50 border border-purple-200 px-2 py-2 w-96 rounded-md outline-none placeholder-purple-200'
                        />
                        {nameError && (
                            <p className="text-red-500 text-sm mt-2">{nameError}</p>
                        )}
                    </div>

                    {/* Input Two  */}
                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder='Email Address'
                            value={userSignup.email}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    email: e.target.value
                                });
                            }}
                            className='bg-purple-50 border border-purple-200 px-2 py-2 w-96 rounded-md outline-none placeholder-purple-200'
                        />
                        {emailError && (
                            <p className="text-red-500 text-sm mt-2">{emailError}</p>
                        )}
                    </div>

                    {/* Input Three  */}
                    <div className="mb-5">
                        <input
                            type="password"
                            placeholder='Password'
                            value={userSignup.password}
                            onChange={(e) => {
                                setUserSignup({
                                    ...userSignup,
                                    password: e.target.value
                                });
                            }}
                            className='bg-purple-50 border border-purple-200 px-2 py-2 w-96 rounded-md outline-none placeholder-purple-200'
                        />
                        {passwordError && (
                            <p className="text-red-500 text-sm mt-2">{passwordError}</p>
                        )}
                    </div>

                    {/* Signup Button  */}
                    <div className="mb-5">
                        <button
                            type='button'
                            onClick={userSignupFunction}
                            className='bg-purple-500 hover:bg-purple-600 w-full text-white text-center py-2 font-bold rounded-md '
                        >
                            Signup
                        </button>
                    </div>

                    <div>
                        <h2 className='text-black'>Have an account <Link className=' text-purple-500 font-bold' to={'/login'}>Login</Link></h2>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Signup;
