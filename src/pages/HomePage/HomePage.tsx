import { useState, useEffect } from "react";

import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { getStoryIds } from "../../services/hnApi";

import { NewsItem } from "../../components/NewsItem/NewsItem";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";

import styles from "./HomePage.module.css";


function HomePage() {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  function fetchNews() {
    getStoryIds().then((data) => {
      setStoryIds(data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    fetchNews();
    const interval = setInterval(() => fetchNews(), 60000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  if (isLoading) return <Spinner />;

  return (
    <>
      <div className={styles.buttonContainer}>
        <Button onClick={fetchNews} variant="primary" children="Reload" />
      </div>
      {storyIds.slice(0, count).map((storyId) => (
        <NewsItem key={storyId} storyId={storyId} />
      ))}
    </>
  );
}

export default HomePage;
