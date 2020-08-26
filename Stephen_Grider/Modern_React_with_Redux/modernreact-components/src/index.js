import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        {/*Once wrapped in tags, the content inside becomes a prop as props.children */}
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45AM"
          avatar={faker.image.avatar()}
          content={faker.random.words()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00PM"
          avatar={faker.image.avatar()}
          content={faker.random.words()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Today at 5:00PM"
          avatar={faker.image.avatar()}
          content={faker.random.words()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
