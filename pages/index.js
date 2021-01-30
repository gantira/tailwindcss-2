import React from 'react';

function Home(props) {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-1/2">
                <div className="bg-white shadow p-6 rounded">
                    <div className="flex flex-wrap">
                        <div className="bg-true-gray-500 w-10 h-10 rounded mr-2"></div>
                        <div className="bg-lime-500 w-10 h-10 rounded mr-2"></div>
                        <div className="bg-blue-500 w-10 h-10 rounded mr-2"></div>
                        <div className="bg-emerald-500 w-10 h-10 rounded mr-2"></div>
                        <div className="bg-cyan-500 w-10 h-10 rounded mr-2"></div>
                        <div className="bg-red-500 w-10 h-10 rounded mr-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;