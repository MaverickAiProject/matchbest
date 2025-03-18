import React, { useState } from "react";
import { useAuth } from "@/lib/contexts/AuthContext";
import { ClipLoader } from "react-spinners";
import { Eye, EyeOffIcon } from "lucide-react";
import Image from "next/image";

function Auth() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [visible, setVisible] = useState(false)

    const { handleSignInWithEmail, isLoading, error } = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        await handleSignInWithEmail(email, password);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Admin Login</h2>
                {/* <div className="mb-6 place-self-center">
                    <Image
                        src={"/logo.png"}
                        height={100}
                        width={100}
                        alt="Logo"
                        className="w-40"
                    />
                </div> */}
                <section>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-600 text-sm font-semibold mb-2">Password</label>
                        <div className="flex gap-2 items-center justify-center">
                            <input
                                type={visible ? 'text' : 'password'}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <div
                                className="cursor-pointer"
                                onClick={() => setVisible(prev => !prev)}
                            >
                                {visible ? <Eye /> : <EyeOffIcon />}
                            </div>
                        </div>
                    </div>
                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                    <button
                        onClick={handleLogin}
                        className="w-full mt-6 flex justify-center items-center gap-2 bg-primary text-white font-semibold py-2 px-4 rounded-lg "
                    >{isLoading && <ClipLoader size={20} color="white" />}
                        <p className="transition-all ease-in-out duration-300">
                            Login
                        </p>
                    </button>
                </section>
            </div>
        </div>
    );
}

export default Auth;
