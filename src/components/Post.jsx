const Post = (props) => {
  const { title, body } = props;

  return (
    <div className="card">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default Post;
