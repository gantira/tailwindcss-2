import React from 'react';
import Quote from '../components/Quote';
import Ring from '../components/Ring';

function Home(props) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-5/12">
                <Ring />
            </div>
        </div>
    );
}

export default Home;