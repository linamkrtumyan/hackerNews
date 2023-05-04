import { useState } from "react";
import { CiChat1 } from "react-icons/ci";

import { getStory } from "../../services/hnApi";
import { timeConverter } from "../../utils/timeConverter";

import styles from "./CommentItem.module.css";

type Comment ={
  comment: IComment
}

export interface IComment {
    author?: string;
    text?: string;
    kids?: [];
    time?: number;
}

function CommentItem({comment}: Comment) {

  const {author, kids =[], text, time} = comment

  const [comments, setComments] = useState<IComment[]>([]);

  const fetchNestedComments = () => {
    if (kids?.length > 0) {
      kids.map((id: number) => {
        getStory(id).then((data) => {
          data &&
            setComments((prevState: IComment[]) => {
              return [
                ...prevState,
                {
                  text: data.text,
                  author: data.by,
                  kids: data.kids,
                  time: data.time,
                },
              ];
            });
        });
      });
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <img
            src={`https://i.pravatar.cc/150?img=${Math.floor(
              Math.random() * 3
            )}`}
            className={styles.avatar}
            alt=""
            loading="lazy"
          />

          <p className="">{author}</p>
          <p className={styles.time}>{timeConverter(time)}</p>
        </div>
        <p
          className={styles.text}
          dangerouslySetInnerHTML={{ __html: `${text}` }}
        ></p>

        {kids?.length > 0 && comments?.length === 0 ? (
          <p className={styles.reply} onClick={fetchNestedComments}>
            <CiChat1 />
            {kids.length > 1 ? `${kids.length} replies ` : "1 reply"}{" "}
          </p>
        ) : null}

        {comments.length > 0 && (
          <div className="p-10">
            {comments.map((com) => (
              <CommentItem comment={com} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default CommentItem;
