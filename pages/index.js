import Head from "next/head";
import Images from "../components/Images";
import Jumbotron from "../components/Jumbotron";
import SearchBar from "../components/SearchBar";
import useAxios from "../hooks/useAxios";
import { createContext, useState, useEffect } from "react";

export const ImageContext = createContext({});

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("laptop");
  const { response, error, isLoading, fetchData } = useAxios(
    `search/photos?page=1&query=${searchQuery}&client_id=${process.env.ACCESS_KEY}`
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const query = window.localStorage.getItem("query");
      setSearchQuery(query);
    }
  }, [response]);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchQuery,
    setSearchQuery,
  };

  return (
    <ImageContext.Provider value={value}>
      <Head>
        <title>Find Images App</title>
        <meta name="description" content="Search and find any image on the go!!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Jumbotron>
        <SearchBar />
      </Jumbotron>
      <Images />
    </ImageContext.Provider>
  );
}
