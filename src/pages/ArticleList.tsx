import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { ArticleCard } from '../components/ArticleCard';
import SidePanel from '../components/SidePanel';
import {
  ArticleContent,
  StyledArticleList,
} from '../components/styles/ArticleList.styled';
import { ContentContainer } from '../components/styles/Container.styled';
import { Category } from '../types';
import { Article } from '../types/Article';
import { http } from '../utils/http';

export interface ArticleListProps {}

export const ArticleList: React.FC<ArticleListProps> = () => {
  const [category, setCategory] = useState<Category[]>([]);
  const [articleList, setArticleList] = useState<Article[]>([]);

  useEffect(() => {
    http('article').then((data) => setArticleList(data.data));
    http('category').then((data) => setCategory(data.data));
  }, []);

  return (
    <StyledArticleList>
      <ContentContainer>
        <Menu selectedKeys={['0']} mode={'horizontal'}>
          <Menu.Item key={'0'}>推荐</Menu.Item>
          {category?.map((category) => (
            <Menu.Item key={category.id}>{category.value}</Menu.Item>
          ))}
        </Menu>
        <ArticleContent>
          {articleList?.map((article) => (
            <ArticleCard key={article.id} {...article} />
          ))}
        </ArticleContent>
      </ContentContainer>
      <SidePanel></SidePanel>
    </StyledArticleList>
  );
};
