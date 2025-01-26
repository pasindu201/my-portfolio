import React, { useState, useEffect } from "react";

const TouristUtilityApp = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const context = [
        import("../assets/Fit-Zone/1.png"),
        import("../assets/Fit-Zone/2.png"),
        import("../assets/Fit-Zone/3.png"),
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
      <div className="mt-8">
        <a
          href="https://github.com/pasindu201/Fit-Zone"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300 inline-flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-6 h-6 mr-2"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.258c-3.338.725-4.033-1.415-4.033-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.997.108-.775.419-1.305.762-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.398 3.003-.403 1.02.005 2.047.137 3.006.403 2.29-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.839 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.92.431.372.814 1.103.814 2.222v3.293c0 .32.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>
      {/* Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-8">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Transport ${index}`}
            className="w-full h-auto shadow-md hover:shadow-lg transition"
          />
        ))}
      </div>
    </div>
  );
};

export default TouristUtilityApp;
