import { memo } from "react";
import { CiUser, CiTimer, CiGlobe } from "react-icons/ci";

import { timeConverter } from "../../utils/timeConverter";

import styles from "./NewsCard.module.css";

import { News } from "../../model";

export const NewsCard = memo(function NewsCard({ news }: News) {
  return (
    <div className={styles.container}>
      <div className={styles.itemGroup}>
        <div className={styles.item}>
          <CiTimer />
          <span className={styles.itemTitle}>{timeConverter(news.time)}</span>
        </div>
        <div className={styles.item}>
          <CiUser />
          <span className={styles.itemTitle}>{news.by}</span>{" "}
        </div>
      </div>
      <p className={styles.title}>{news.title}</p>
      <div className={styles.item}>
        <CiGlobe />
        <span className={styles.itemTitle}>
          <a href={news.url}>{news.url}</a>
        </span>
      </div>
    </div>
  );
});
