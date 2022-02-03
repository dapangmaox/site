import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '../types';
import { http } from '../utils/http';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ContentContainer } from '../components/styles/Container.styled';
import SidePanel from '../components/SidePanel';

export const ArticleDetail: React.FC = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    http(`article/${id}`).then((data) => setArticle(data.data));
  }, [id]);

  return (
    <>
      {article && (
        <div style={{ display: 'flex', padding: '10px' }}>
          <ContentContainer>
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
          <SidePanel></SidePanel>
        </div>
      )}
    </>
  );
};
