import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';

import ROUTES from '@config/router.config';

import type { ProSettings, MenuDataItem } from '@ant-design/pro-layout';

const ProLayout = dynamic(() => import('@ant-design/pro-layout'), {
  ssr: false,
});
const SettingDrawer = dynamic(
  () => import('@ant-design/pro-layout/es/components/SettingDrawer'),
  {
    ssr: false,
  }
);

const DefaultFooter = dynamic(
  () => import('@ant-design/pro-layout/es/Footer'),
  {
    ssr: false,
  }
);

const Main = ({ children }) => {
  const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({
    title: 'Sweetie Care',
  });
  const [pathname, setPathname] = useState('/');

  const handleMenuClick = (options) => {
    setPathname(options.path || '/');
  };

  const menuHeaderRender = (logo: React.ReactNode, title: React.ReactNode) => (
    <Link href="/">
      <a>
        <img
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
          height="28px"
          alt="logo"
        />
        {title}
      </a>
    </Link>
  );

  const menuItemRender = (options: MenuDataItem, element: React.ReactNode) => (
    <Link href={options.path}>
      <a onClick={(options) => handleMenuClick(options)} aria-hidden="true">
        {element}
      </a>
    </Link>
  );

  const footerRender = () => (
    <DefaultFooter
      links={[]}
      copyright={`${new Date().getFullYear()} Sweetie Care`}
    />
  );
  return (
    <div id="dnt-pro-layout">
      <ProLayout
        title="Sweetie Care"
        logo="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*1NHAQYduQiQAAAAAAAAAAABkARQnAQ"
        style={{ minHeight: '100vh' }}
        route={ROUTES}
        menuItemRender={menuItemRender}
        menuHeaderRender={menuHeaderRender}
        footerRender={footerRender}
        {...settings}
      >
        {children}
      </ProLayout>
      <SettingDrawer
        pathname={pathname}
        getContainer={() => document.querySelector('#dnt-pro-layout')}
        settings={settings}
        onSettingChange={(changeSetting) => setSetting(changeSetting)}
      />
    </div>
  );
};

export default Main;
