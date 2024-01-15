import React from "react";

export default function Load() {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div
                className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                role="status"
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
}