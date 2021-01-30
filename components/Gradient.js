import React from 'react';

const Gradient = () => {
    return (
        <div className="bg-gray-200 antialiased min-h-screen items-center justify-center flex">
            <div className="w-full lg:w-3/4">
                <div className="bg-white p-8 shadow-lg rounded-lg">
                    <div className="text-8xl bg-gradient-to-r from-indigo-500 to-yellow-500 inline text-transparent bg-clip-text font-black">
                        PARSINTA
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gradient;