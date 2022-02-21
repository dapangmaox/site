import { Space, Typography } from 'antd';
import account from '../images/public_account.png';
import { RecommendArticles, StyledSidePanel } from './styles/SidePanel.styled';

const SidePanel = () => {
  return (
    <StyledSidePanel>
      <Space direction={'vertical'}>
        <img style={{ width: '360px' }} alt='' src={account} />
        <RecommendArticles>
          <Typography.Title level={5}>热门推荐</Typography.Title>
        </RecommendArticles>
        <RecommendArticles>
          <Typography.Title level={5}>标签</Typography.Title>
        </RecommendArticles>
      </Space>
    </StyledSidePanel>
  );
};

export default SidePanel;
