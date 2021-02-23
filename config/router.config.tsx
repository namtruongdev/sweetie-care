import {
  SmileOutlined,
  SettingOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons';

export default {
  path: '/',
  routes: [
    {
      path: '/',
      name: 'Trang chủ',
      icon: <SmileOutlined />,
      routes: [
        {
          path: '/welcome',
          name: 'Account Settings',
          icon: <SettingOutlined />,
        },
      ],
    },
    {
      path: '/example',
      name: 'Example Page',
      icon: <PlaySquareOutlined />,
    },
  ],
};
