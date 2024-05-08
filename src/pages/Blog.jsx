import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Blog = (props) => {
  const location = useLocation();
  const { data:posts } = props;

  return (
    <div className="posts-page">
      <h1>Blog</h1>

      <div className="posts">
        <h2 className="posts__title">Post list</h2>
        <ul className="posts__list">

          {
            posts.map(post => {
              const { id, title, body } = post;
              const additClass = id == location.state?.id ? 'visited' : '';
              return (
                <li key={ id } className={ `post ${ additClass }` }>
                  <Link to={ `${id}` }>
                    <h3 className="post__title">{ title }</h3>
                    <p className="post__body">{ body }</p>
                  </Link>
                </li>
              );
            })
          }

        </ul>
      </div>

    </div>
  );
};