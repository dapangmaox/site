import { Route, Routes } from 'react-router-dom';
import './App.less';
import { Footer } from './components/Footer';
import Header from './components/Header';
import { Container } from './components/styles/Container.styled';
import { ArticleDetail } from './pages/ArticleDetail';
import { ArticleList } from './pages/ArticleList';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<ArticleList />} />
          <Route path='blog/:id' element={<ArticleDetail />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
