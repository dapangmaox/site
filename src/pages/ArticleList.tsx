import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ArticleCard } from '../components/ArticleCard';
import { Article } from '../types/Article';
import { http } from '../utils/http';

export interface ArticleListProps {}

export const ArticleList: React.FC<ArticleListProps> = () => {
  const [articleList, setArticleList] = useState<Article[]>([]);
  useEffect(() => {
    http('article').then((data) => setArticleList(data.data));
  }, []);
  return (
    <StyledArticleList>
      <div>
        <Menu mode={'horizontal'}>
          <Menu.Item key={'推荐'}>推荐</Menu.Item>
          <Menu.Item key={'前端'}>前端</Menu.Item>
          <Menu.Item key={'后端'}>后端</Menu.Item>
        </Menu>
        <div></div>
        {articleList?.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>
      <aside>
        <h1>公众号</h1>
        <h1>热门推荐</h1>
      </aside>
    </StyledArticleList>
  );
};

const StyledArticleList = styled.div`
  margin-top: 10px;
`;
