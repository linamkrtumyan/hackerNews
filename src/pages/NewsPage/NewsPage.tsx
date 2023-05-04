import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CiSquareChevLeft } from "react-icons/ci";

import { getStory } from "../../services/hnApi";

import CommentItem from "../../components/CommentItem/CommentItem";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import { NewsCard } from "../../components/NewsCard/NewsCard";

interface INewsDetails {
  url: string;
  title: string;
  by: string;
  time: string;
  kids: [];
  score: number;
  descendants: number;
  text: string;
}

type CommentsIds = [];

type Comment = {
  author: string;
  text: string;
  kids?: [];
  time: number;
};

function NewsPage() {
  const navigate = useNavigate();
  let { id } = useParams();

  const [news, setNews] = useState<INewsDetails>();
  const [commentIds, setCommentIds] = useState<CommentsIds>();
  const [comments, setComments] = useState<Comment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingComments, setIsLoadingComments] = useState(true);

  const fetchNews = () => {
    getStory(id).then((data) => {
      data && setNews(data);
      setIsLoading(false);
    });
  };

  const fetchComments = () => {
    setIsLoadingComments(true);
    getStory(id).then((data) => {
      data && setCommentIds(data.kids);
      setComments([]);
      setIsLoadingComments(false);
    });
  };

  useEffect(() => {
    fetchComments();
    fetchNews();
  }, []);

  useEffect(() => {
    if (commentIds) {
      commentIds.map((id) => {
        getStory(id).then((data) => {
          data &&
            setComments((prevState: Comment[]) => {
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
  }, [commentIds]);

  const backTo = () => {
    navigate(-1);
  };

  if (isLoading) return <Spinner />;

  return news ? (
    <div>
      <Button onClick={backTo} variant="secondary">
        <CiSquareChevLeft />
        Back to newslist
      </Button>
      <NewsCard news={news} />

      {isLoadingComments ? (
        <Spinner />
      ) : (
        <>
          {news.descendants > 0 && (
            <div className="flex justify-between" >
             
              <p>Comments: ({news.descendants}) </p>
              <Button
                variant="primary"
                onClick={fetchComments}
                children="Update comments"
              />
            </div>
          )}
          {comments.map((com, index) => {
            return <CommentItem comment={com} key={index} />;
          })}
        </>
      )}
    </div>
  ) : null;
}

export default NewsPage;
