import React from "react";
import Paper from "../components/Paper";
import UserPaper from "../components/UserPaper";

const UserPapersContainer = ({ userPapers }) => {
  const indexType = "user";

  const papers = userPapers.map(paper => (
    <UserPaper
      key={paper.id}
      id={paper.id}
      category={paper.category}
      title={paper.title}
      indexType={indexType}
    />
  ));
  return <ul className="user-papers-container">{papers}</ul>;
};

export default UserPapersContainer;
