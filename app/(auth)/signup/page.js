"use client";
import InputField from '@/components/LandingPagecomponents/InputField';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const signUp = () => {
    const router = useRouter();
    const [useType, setUseType] = useState('password');

    const FunuseType = () => {
        setUseType(useType === 'password' ? 'text' : 'password');
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100 relative">
            <button
                onClick={() => {
                    router.back();
                }}
                className="absolute top-10 right-20 text-3xl"
                aria-label="Close"
            >
                &#x2715;
            </button>

            <div className="text-center mb-8">
                <h1 className="text-6xl font-semibold">Sign Up</h1>
                <p className="mt-2 text-lg">
                    New to Decentra?{' '}
                    <a href="/login" className="text-gray-500 font-semibold hover:underline">
                        Log In
                    </a>
                </p>
            </div>

            {/* Login Form */}
            <form className="p-8 space-y-6 w-96">
                <div>
                    <label htmlFor="email" className="block text-xl font-semibold mb-2">
                        Email *
                    </label>
                    <InputField
                        className="bg-gray-100"
                        type="text"
                        id="email"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="relative">
                    <label htmlFor="password" className="block text-xl font-semibold mb-2">
                        Password *
                    </label>
                    <InputField
                        className="bg-gray-100"
                        type={useType}
                        id="password"
                        placeholder="Enter your password"
                    />
                    <button type="button" onClick={FunuseType} className="absolute right-4 top-1/2 transform -translate-y-1/2">
                        {useType === 'password' ? <FaEyeSlash /> : <FaEye />}
                    </button>
                </div>
                <button
                    type="submit"
                    className="w-full px-4 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-500 focus:outline-none"
                >
                    Sign Up
                </button>
                <p className="text-center text-sm text-gray-500">
                    Forgot your password?{' '}
                    <a href="/reset-password" className="text-gray-500 hover:underline">
                        Reset it
                    </a>
                </p>
            </form>
        </div>
    )
}

export default signUp;
