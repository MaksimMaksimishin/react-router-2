import { Routes, Route, Navigate } from "react-router-dom";
import { About, Blog, Contacts, Home, Page404, SinglePost } from "./pages";
import { Layout } from "./components/Layout";

const App = () => {
  const posts = [
    { id: 1, title: 'title post 1', body: 'text for post 1' },
    { id: 2, title: 'title post 2', body: 'text for post 2' },
    { id: 3, title: 'title post 3', body: 'text for post 3' },
  ];

  return (    
    <Routes>

      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="about" element={ <About /> } />

        <Route path="posts" element={ <Navigate to="/blog" replace /> } />

        <Route path="blog" element={ <Blog data={ posts }/> } />
        <Route path="blog/:id" element={ <SinglePost data={ posts }/> } />
        <Route path="contacts" element={ <Contacts /> } />
        <Route path="*" element={ <Page404 /> } />
      </Route>
      
    </Routes>
  );
}

export default App;
