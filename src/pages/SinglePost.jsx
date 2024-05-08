import { useNavigate, useParams, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const SinglePost = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { data: posts } = props;
  const post = posts.find(item => item.id == id);

  // Сохраняем последний просмотренный пост в localStorage
  useEffect(() => {
    if (post) {
      localStorage.setItem('lastViewedPost', JSON.stringify(post));
    }
  }, [post]);

  const gobackHandler = () => {
    navigate('/blog', { state: { id } });
  };

  return (
    <div className="single-post-page">
      <h1>Single page</h1>
      <button onClick={gobackHandler}>go back</button>
      <Link to="/blog" state={{ id }}>back to blog</Link>

      {post ? (
        <div className="post">
          <h3 className="post__title">{post.title}</h3>
          <p className="post__body">{post.body}</p>
        </div>
      ) : (
        <h3>No post data (((</h3>
      )}
      
      {/* Вывод последнего просмотренного поста */}
      {location.state && location.state.lastViewedPost && (
        <div>
          <h3>Last Viewed Post:</h3>
          <p>{location.state.lastViewedPost.title}</p>
        </div>
      )}
    </div>
  );
};
