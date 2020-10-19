import React from "react";
import Link from "../link";
import { styled } from "frontity";

const PostEntryInfo = ({ author, date }) => {
  return (
    <Card>
      <div className="postInfo">
      {author && (
        <div className="author">
          by: <Link link={author.link}> {author.name}</Link>
        </div>
      )}
      <div className="date">on {date.toDateString()}</div>
    </div>
    </Card>
  );
};

export default PostEntryInfo;

const Card = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
`