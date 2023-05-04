import { useState, useEffect, memo } from "react";
import { CiUser, CiTimer, CiChat1, CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

import { getStory } from "../../services/hnApi";
import { timeConverter } from "../../utils/timeConverter";

import styles from "./NewsItem.module.css";

export interface INewsItem {
  url: string;
  title: string;
  by: string;
  time: string;
  kids: [];
  score: number;
  descendants: number;
}
export const NewsItem = memo(function NewsItem(props: { storyId:number }) {
  const [story, setStory] = useState<INewsItem>();

  useEffect(() => {
    getStory(props.storyId).then((data) => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <>
      <div className={styles.container}>
        <Link to={`/news/${props.storyId}`} className="">
          <div className={styles.itemGroup}>
            <div className={styles.item}>
              <CiTimer />
              <span className={styles.itemTitle}>
                {timeConverter(story.time)}
              </span>{" "}
            </div>
            <div className={styles.item}>
              <CiUser />
              <span className={styles.itemTitle}>{story.by}</span>{" "}
            </div>
          </div>

          <p className={styles.title}>{story.title}</p>

          <div className={styles.itemGroup}>
            <div className={styles.item}>
              <CiChat1 />
              <span className={styles.itemTitle}>{story.descendants}</span>{" "}
            </div>
            <div className={styles.item}>
              <CiStar />
              <span className={styles.itemTitle}> {story.score}</span>{" "}
            </div>
          </div>
        </Link>
      </div>
    </>
  ) : null;
});
