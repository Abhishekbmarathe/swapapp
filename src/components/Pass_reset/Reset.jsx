import React from "react";
import { useForm } from "react-hook-form";
import Circles from "../../assets/circles";

const ForgotPassword = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Password Reset Data:", data);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 relative overflow-hidden">
            <Circles />
            <div className="relative bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl w-96 border border-white/20 animate-fadeIn">
                <h2 className="text-2xl font-bold text-center text-white mb-6">Reset Password</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-white font-medium mb-2" htmlFor="oldPassword">Old Password</label>
                        <input
                            type="password"
                            id="oldPassword"
                            className="w-full p-3 bg-transparent border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/70 text-white placeholder-white/50"
                            placeholder="Enter your old password"
                            {...register("oldPassword", { required: "Old password is required" })}
                        />
                        {errors.oldPassword && <p className="text-red-500 text-sm mt-1">{errors.oldPassword.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-white font-medium mb-2" htmlFor="newPassword">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            className="w-full p-3 bg-transparent border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/70 text-white placeholder-white/50"
                            placeholder="Enter your new password"
                            {...register("newPassword", { required: "New password is required" })}
                        />
                        {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label className="block text-white font-medium mb-2" htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full p-3 bg-transparent border border-white/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/70 text-white placeholder-white/50"
                            placeholder="Confirm your new password"
                            {...register("confirmPassword", { required: "Please confirm your password" })}
                        />
                        {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition">Reset Password</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
