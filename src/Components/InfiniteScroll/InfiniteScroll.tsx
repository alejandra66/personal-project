import React from "react";

const InfiniteScroll: React.FC = () => {
    const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

    return (
        <div className="w-full overflow-hidden">
            {/* Scrolling wrapper */}
            <div className="flex justify-end animate-scroll whitespace-nowrap">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex-none px-4 py-2 mx-2 bg-gray-300 rounded-lg text-center shadow-md"
                    >
                        {item}
                    </div>
                ))}
                {/* Duplicate items for seamless scrolling */}
                {items.map((item, index) => (
                    <div
                        key={`duplicate-${index}`}
                        className="flex-none px-4 py-2 mx-2 bg-gray-300 rounded-lg text-center shadow-md"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteScroll;

