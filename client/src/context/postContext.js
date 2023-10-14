import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios"; // Importa axios aquí para que sea accesible para todas las funciones

const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  if (!context) throw new Error("Post Provider is missing");
  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    try {
      const res = await axios.get("https://server-pos-06ua.onrender.com/api/posts/");
      setPosts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      const res = await axios.delete("https://server-pos-06ua.onrender.com/api/posts/" + id);
      if (res.status === 204) {
        setPosts(posts.filter((post) => post._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createPost = async (post) => {
    try {
      const form = new FormData();
      for (let key in post) {
        form.append(key, post[key]);
      }
      const res = await axios.post("https://server-pos-06ua.onrender.com/api/posts", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setPosts([...posts, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const getPost = async (id) => {
    try {
      const res = await axios.get("https://server-pos-06ua.onrender.com/api/posts/" + id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updatePost = async (id, post) => {
    try {
      const form = new FormData();
      for (let key in post) {
        form.append(key, post[key]);
      }
      const res = await axios.put("https://server-pos-06ua.onrender.com/api/posts/" + id, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setPosts(posts.map((post) => (post._id === id ? res.data : post)));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <postContext.Provider
      value={{ posts, deletePost, createPost, getPost, updatePost }}
    >
      {children}
    </postContext.Provider>
  );
};
