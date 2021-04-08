/* eslint-disable import/no-anonymous-default-export */
import Icon from './Icon';

export default {
  title: 'MMAuto/UI/Icon',
  Component: Icon,
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/UqapsvM6RAF371unsQkgus/%EC%B0%A8%EB%9F%89%EC%84%9C%EB%B9%84%EC%8A%A4(%EC%88%98%EC%A0%95)?node-id=34%3A68'
    }
  },
  argTypes: {
    type: {
      description: '아이콘 이름과 타입',
      control: {
        type: 'select',
        options: ['facebook', 'instagram', 'more']
      }
    },
    color: {
      description: '아이콘 색',
      control: {
        type: 'select',
        options: ['red', 'blue', 'orange']
      }
    }
  }
};

const Template = args => <Icon {...args} />;

export const Facebook = Template.bind({});
Facebook.args = {
  type: 'facebook',
  // TODO: theme 색상 정해서 main 등으로 바꾸기
  color: 'red'
};

export const Instagram = Template.bind({});
Instagram.args = {
  type: 'instagram',
  color: 'red'
};

export const RightArray = Template.bind({});
RightArray.args = {
  type: 'rightArray',
  color: 'red'
};