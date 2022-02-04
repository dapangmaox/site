import { Tag, Typography } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';
import SidePanel from '../components/SidePanel';
import { ContentContainer } from '../components/styles/ArticleDetail.styled';
import {
  FlexContainer,
  MainContainer,
} from '../components/styles/Container.styled';
import { Article } from '../types';
import { http } from '../utils/http';

export const ArticleDetail: React.FC = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    http(`article/${id}`).then((data) => setArticle(data.data));
  }, [id]);

  return (
    <>
      {article && (
        <FlexContainer>
          <MainContainer>
            <ContentContainer>
              <Typography.Title level={2}>{article.title}</Typography.Title>
              <MetaContainer>
                <div style={{ marginBottom: '20px' }}>
                  {article.tags?.map((tag) => (
                    <Tag key={tag.id}>{tag.value}</Tag>
                  ))}
                </div>
                <Author>{article.author}</Author>
                <FlexContainer
                  style={{ marginBottom: '20px', color: '#909090' }}
                >
                  <span>{dayjs(article.created).format('YYYY-MM-DD')}</span>
                  <span>
                    阅读：
                    {article.times || 0}
                  </span>
                </FlexContainer>
              </MetaContainer>
              <ReactMarkdown
                children={article.contents}
                components={{
                  code({ node, inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, '')}
                        style={prism}
                        language={match[1]}
                        PreTag='div'
                        {...props}
                      />
                    ) : (
                      <code className={className} {...props}>
                        {children}
                      </code>
                    );
                  },
                }}
              />
            </ContentContainer>
          </MainContainer>
          <SidePanel></SidePanel>
        </FlexContainer>
      )}
    </>
  );
};

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-right: 10px;
  }
`;

const Author = styled.span`
  font-size: 16px;
  font-weight: 500;
`;
