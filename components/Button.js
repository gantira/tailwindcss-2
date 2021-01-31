import React from 'react';

function Button(props) {
    return (
        <>
            <div className="flex">
                <div className="mr-4">
                    <button className="btn btn-secondary">
                        Secondary
                    </button>
                </div>
                <div className="mr-4">
                    <button className="btn btn-primary">
                        Primary
                    </button>
                </div>
                <div className="mr-4">
                    <button className="btn btn-success">
                        Button
                    </button>
                </div>
            </div>
        </>
    );
}

export default Button;