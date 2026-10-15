import { useState } from "react";
import "./App.css";

type Comment = {
  id: number;
  text: string;
  replies: Comment[];
};

const initialComments: Comment[] = [
  {
    id: 1,
    text: "This is a top-level comment!",
    replies: [
      {
        id: 2,
        text: "This is a nested reply.",
        replies: [],
      },
    ],
  },
];

function App() {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState("");
  const [replyComment, setReplyComment] = useState("");
  const [activeReplyId, setActiveReplyId] = useState<number | null>(null);
  const handleNestedComponent = (commentID: number) => {
    setReplyComment("");
    setActiveReplyId((prevId) => (prevId === commentID ? null : commentID));
  };

  const handleCommentData = () => {
    if (!newComment.trim()) return;
    const newCommentData: Comment = {
      id: Date.now(),
      text: newComment,
      replies: [],
    };
    setComments((prev) => [...prev, newCommentData]);
    setNewComment("");
  };

  const handleReplyComment = (nestedId: number) => {
    if (!replyComment.trim()) return;
    const newNestedCommentData: Comment = {
      id: Date.now(),
      text: replyComment,
      replies: [],
    };

    setComments((prev) =>
      prev.map((comment) => {
        if (comment.id === nestedId) {
          return {
            ...comment,
            replies: [...comment.replies, newNestedCommentData],
          };
        }

        return comment;
      }),
    );

    setReplyComment("");
    console.log(comments);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h3 className="text-3xl font-bold text-center mb-8">Nested Comments</h3>

      {/* Add comment */}
      <div className="flex justify-center gap-3 max-w-2xl mx-auto mb-10">
        <input
          type="text"
          placeholder="Enter your comment..."
          className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />

        <button
          type="button"
          className="bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium px-5 py-3 rounded-lg transition-all duration-200 whitespace-nowrap"
          onClick={handleCommentData}
        >
          Add Comment
        </button>
      </div>

      {/* Display comments */}
      <div className="max-w-2xl mx-auto space-y-4">
        {comments.map((data) => (
          <div
            key={data.id}
            className="bg-gray-900 border border-gray-800 rounded-xl p-4"
          >
            {/* Comment row */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-gray-200 break-words">{data.text}</span>

              <button
                type="button"
                onClick={() => handleNestedComponent(data.id)}
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg"
              >
                Reply
              </button>
            </div>

            {/* Reply form */}
            {activeReplyId === data.id && (
              <div className="flex gap-3 mt-4">
                <input
                  type="text"
                  placeholder="Enter your reply..."
                  className="flex-1 min-w-0 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white outline-none focus:border-blue-500"
                  value={replyComment}
                  onChange={(e) => setReplyComment(e.target.value)}
                />
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-lg"
                  onClick={() => handleReplyComment(data.id)}
                >
                  Add Reply
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
