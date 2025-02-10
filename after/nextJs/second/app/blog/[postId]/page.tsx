import axios from "axios";
export default async function BlogPage({
  params,
}: {
  params: {
    postId: string;
  };
}) {
  const postId = params.postId;
  const res = await axios(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return (
    <div>
      <div>{res.data.title}</div>
      <div>{res.data.body}</div>
    </div>
  );
}
