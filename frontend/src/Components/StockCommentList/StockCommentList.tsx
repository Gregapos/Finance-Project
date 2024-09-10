import React from "react";
import { CommentGet } from "../../Models/Comment";
import { commentPostAPI } from "../../Services/CommentService";
import StockCommentListItem from "../StockCommentListItem/StockCommentListItem";

type Props = {
  comments: CommentGet[];
};

const StockCommentList = ({ comments }: Props) => {
  return (
    <>
      {comments &&
        comments.map((comment) => {
          return <StockCommentListItem comment={comment} />;
        })}
    </>
  );
};

export default StockCommentList;
