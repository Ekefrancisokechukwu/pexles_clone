import { createClient } from "pexels";
import { useEffect, useState } from "react";

export const client = createClient(import.meta.env.VITE_API_KEY);

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [featured, setFeatured] = useState([]);
  const [videos, setVideos] = useState([]);

  const getdata = async () => {
    try {
      const curatedPhotos = await client.photos
        .curated({ per_page: 40 })
        .then((photos) => {
          return photos;
        });

      const popularVideos = await client.videos
        .popular({ per_page: 40 })
        .then((photos) => {
          return photos;
        });
      setFeatured(curatedPhotos.photos);
      setVideos(popularVideos.videos);
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

export const useFetchSingle = (param) => {
  const [data, setData] = useState(null);
  const fetch = async () => {
    try {
      const getPhoto = await client.photos
        .show({ id: param || null })
        .then((photos) => {
          return photos;
        });

      setData(getPhoto);
      console.log(getPhoto);
    } catch (error) {}
  };

  useEffect(() => {
    fetch();
  }, [param]);

  return {};
};
