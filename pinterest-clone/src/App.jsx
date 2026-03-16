import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Gallery from "./components/Gallery/Gallery";
import { searchImages, getRandomImages } from "./services/unsplash";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    loadInitialImages();
  }, []);

  const loadInitialImages = async () => {
    const data = await getRandomImages();
    setImages(data);
  };

  const handleSearch = async (query) => {
    const data = await searchImages(query);
    setImages(data);
  };

  return (
    <>
      <Header onSearch={handleSearch} reset={loadInitialImages} />
      <Gallery images={images} />
    </>
  );
}

export default App;