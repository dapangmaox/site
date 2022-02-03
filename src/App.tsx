import './App.less';
import { Footer } from './components/Footer';
import Header from './components/Header';
import { Container } from './components/styles/Container.style';
import { ArticleList } from './pages/ArticleList';

function App() {
  return (
    <>
      <Header />
      <Container>
        <ArticleList />
      </Container>
      <Footer />
    </>
  );
}

export default App;
