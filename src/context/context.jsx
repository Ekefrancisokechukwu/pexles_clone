import { createContext, useContext, useEffect, useState } from "react";
import { useFetch } from "../utils/useFetch";

const AppContext = createContext();

const getLocalStorage = () => {
  let favourite = localStorage.getItem("favorite");
  if (favourite) {
    return JSON.parse(localStorage.getItem("favorite"));
  } else {
    return {
      photos: {},
      videos: {},
    };
  }
};

const ContextProvider = ({ children }) => {
  const { featured, loading, videos, error } = useFetch();
  const [favorite, setFavorite] = useState([]);

  const FavoriteHanlder = (id, $element) => {
    console.log(id, $element);

    let $card = favorite.find((card) => card.id === id);

    if ($card) {
      let temp = favorite.filter((item) => item.id !== id);
      setFavorite([...temp]);
    } else {
      const $newItem = {
        id: id,
        name: $element.photographer,
        url: $element.src,
      };
      setFavorite([...favorite, $newItem]);
    }
  };

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  return (
    <AppContext.Provider
      value={{
        featured,
        loading,
        FavoriteHanlder,
        error,

        videos,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default ContextProvider;
