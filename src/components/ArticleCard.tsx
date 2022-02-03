import { Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { Article } from '../types/Article';

const { Title } = Typography;

export const ArticleCard: React.FC<Article> = ({
  id,
  title,
  brief,
  cover,
  contents,
  author,
  created,
}) => {
  return (
    <StyledArticleCard>
      <Title level={4}>{title}</Title>
      <Typography.Paragraph ellipsis={{ rows: 1 }}>
        {contents}
      </Typography.Paragraph>
      <div style={{ display: 'flex' }}>
        {author}
        {created}
      </div>
    </StyledArticleCard>
  );
};

const StyledArticleCard = styled.div`
  display: flex;
  flex-direction: column;
`;
