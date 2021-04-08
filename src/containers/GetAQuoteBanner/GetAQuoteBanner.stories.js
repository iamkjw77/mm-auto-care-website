import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';
import GetAQuoteBanner from './GetAQuoteBanner';

export default {
  title: 'MMAuto/Container/GetAQuoteBanner',
  component: GetAQuoteBanner,
  parameters: {
    docs: {
      description: {
        component:
          '**GetAQuoteBanner** 컨테이너는 메인 화면의 한 section 입니다.',
      },
    },
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=34%3A68',
    },
  },
};

const Template = (args) => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GetAQuoteBanner {...args} />
    </ThemeProvider>
  </BrowserRouter>
);

export const GetAQuoteBannerBlock = Template.bind({});

GetAQuoteBannerBlock.args = {
  children: [<GetAQuoteBanner.Title />, <GetAQuoteBanner.LinkButton />],
};

GetAQuoteBannerBlock.storyName = 'Get a quote 배너';
