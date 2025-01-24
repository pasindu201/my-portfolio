import React, { useState, useEffect } from "react";

const TouristUtilityApp = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const context = [
        import("../assets/Tourist App Images/1.jpg"),
        import("../assets/Tourist App Images/2.jpg"),
        import("../assets/Tourist App Images/3.jpg"),
        import("../assets/Tourist App Images/4.jpg"),
      ];

      const resolvedImages = await Promise.all(context);
      setImages(resolvedImages.map((module) => module.default));
    };

    importImages();
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen py-20 px-6">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-4">Tourist Utility App</h1>
        <p className="text-gray-400">
          Detailed information about the TouristUtilityApp...
        </p>
      </div>
      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 mt-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Transport ${index}`}
            className="w-full h-auto rounded-lg shadow-md hover:shadow-lg transition"
          />
        ))}
      </div>
    </div>
  );
};

export default TouristUtilityApp;
