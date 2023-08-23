import axios from "axios";
import { useEffect, useState } from "react";

export const API_PHOTO_ENDPIONT = "https://api.pexels.com/v1";
export const API_VIDEO_ENDPIONT = "https://api.pexels.com/videos/";

export const authFetch = axios.create({
  headers: {
    Authorization: import.meta.env.VITE_API_KEY,
  },
});

export const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [featured, setFeatured] = useState([]);
  const [videos, setVideos] = useState([]);

  const getdata = async () => {
    setLoading(true);
    try {
      const curatedPhotos = await authFetch
        .get(`${API_PHOTO_ENDPIONT}/curated?page=2&per_page=30`)
        .then((photos) => {
          return photos.data.photos;
        });

      const popularVideos = await authFetch
        .get(`${API_VIDEO_ENDPIONT}/popular?page=2&per_page=30`)
        .then((video) => {
          return video.data.videos;
        });
      setFeatured(curatedPhotos);
      setVideos(popularVideos);
      setLoading(false);
    } catch (error) {
      setError(error.response);
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return {
    loading,
    featured,
    videos,
    error,
  };
};
