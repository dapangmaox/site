import { Navigate, Route, Routes } from 'react-router-dom';
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
          <Route path='/blog' element={<ArticleList />} />
          <Route path='blog/:id' element={<ArticleDetail />} />
          <Route path='*' element={<Navigate to='/blog' replace />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}

export default App;
