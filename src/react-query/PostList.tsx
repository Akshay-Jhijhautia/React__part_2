import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePosts({ pageSize });

  if (isLoading) <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul className="list-group">
        {posts?.pages.map((page, index) => (
          <>
            {page.map((post) => (
              <li key={post.id} className="list-group-item">
                {post.title}
              </li>
            ))}
          </>
        ))}
      </ul>
      <button
        className="btn btn-primary my-3 ms-1"
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
