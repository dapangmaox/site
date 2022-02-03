import {
  EyeOutlined,
  FieldTimeOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Typography } from 'antd';
import dayjs from 'dayjs';
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
  times,
}) => {
  return (
    <StyledArticleCard>
      <Title level={5}>{title}</Title>
      <Typography.Paragraph ellipsis={{ rows: 2 }}>
        {contents}
      </Typography.Paragraph>
      <MetaContainer>
        <span>
          <UserOutlined />
          {author}
        </span>
        <span>
          <FieldTimeOutlined />
          {dayjs(created).format('YYYY-MM-DD')}
        </span>
        <span>
          <EyeOutlined />
          {times || 0}
        </span>
      </MetaContainer>
    </StyledArticleCard>
  );
};

const StyledArticleCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px 20px;
  border-bottom: 1px solid #e5e6eb;
  color: #909090;
`;

const MetaContainer = styled.div`
  display: flex;

  & > span {
    position: relative;
    padding-right: 15px;
  }

  .anticon {
    padding-right: 3px;
  }
`;
