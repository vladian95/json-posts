import Post from './Post';
import { useState, useEffect } from 'react';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Immediately Invoked Function Expression
  useEffect(() => {
    (async function () {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    })();
  }, []);

  //without Immediately Invoked Function Expression
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch(API_URL);
  //       const posts = await res.json();
  //       setPosts(posts);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, []);

  // useEffect(() => {
  //   fetch(API_URL) //fetch функция которая отправляет запросы на удаленные сервера
  //     .then((response) => response.json())
  //     .then((posts) => {
  //       setPosts(posts);
  //     })
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

  if (error) {
    return <h1>ERROR FAILED {error}</h1>;
  }

  return (
    <div className="cards">
      <h1>POSTS</h1>
      <hr />
      {isLoading ? (
        <h1 style={{ fontSize: '250px' }}>LOADING...</h1>
      ) : (
        posts.map((post) => {
          return <Post {...post} key={post.id} />;
        })
      )}
    </div>
  );
}

export default Posts;
