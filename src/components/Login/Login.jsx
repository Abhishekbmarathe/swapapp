import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import Circles from "../../assets/circles";
import Loader from "../../assets/Loader";


const Login = () => {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        setLoader(true);
        setTimeout(() => {
            navigate("/home");
        }, 3000);
        console.log("Login Data:", data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 relative overflow-hidden ">
            {/* Background SVG */}
            <div className="">
                <Circles />
            </div>
            {loader ?
                <>
                    <Loader />
                </>
                :
                <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl w-96 border border-white/20">
                    <h2 className="text-2xl font-bold text-center text-white mb-6">Swap Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label className="block text-white font-medium mb-2" htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                className="w-full p-3 bg-transparent border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/70 text-white placeholder-white/50"
                                placeholder="Enter your username"
                                {...register("username", { required: "Username is required" })}
                            />
                            {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block text-white font-medium mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="w-full p-3 bg-transparent border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/70 text-white placeholder-white/50"
                                placeholder="Enter your password"
                                {...register("password", { required: "Password is required" })}
                            />
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">Login</button>

                    </form>
                    <Link to="/forgot" className="text-blue-400 hover:underline mt-5 block text-center">
                        Forgot Password?
                    </Link>

                </div>
            }

            {/* Login Card */}

        </div>
    );
};

export default Login;