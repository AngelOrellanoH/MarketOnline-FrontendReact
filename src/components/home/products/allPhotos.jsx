import { useEffect, useState } from "react";

const AllPhotos = ({ images, alt, isOutOfStock }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [imageInterval, setImageInterval] = useState(null);

    useEffect(() => {
        if (isHovered && images.length > 1) {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }, 1500);
        setImageInterval(interval);
        } else {
        if (imageInterval) {
            clearInterval(imageInterval);
            setImageInterval(null);
        }
        setCurrentImageIndex(0);
        }
        return () => {
        if (imageInterval) clearInterval(imageInterval);
        };
    }, [isHovered, images.length]);

    const getDotClass = (index) =>
        index === currentImageIndex ? "bg-white" : "bg-white/50";

    return (
        <div
            className="relative flex-shrink-0"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
        
        <div className={!isOutOfStock ? `transition-all duration-700 ${isHovered ? "transform scale-210" : ""}` : ""}>
            <img
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={alt}
                width={120}
                height={120}
                className={`rounded-lg object-cover transition-opacity duration-300 ${
                    isOutOfStock ? "opacity-50" : ""
                    }`}
                    />
        </div>
    

        {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-lg">
                <span className="bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                    Sin Stock
                </span>
            </div>
        )}

        {images.length > 1 && (
            <div className="absolute bottom-2 left-2 flex space-x-1">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full ${getDotClass(index)}`}
                    />
                ))}
            </div>
        )}
        </div>
    );
}

export default AllPhotos;