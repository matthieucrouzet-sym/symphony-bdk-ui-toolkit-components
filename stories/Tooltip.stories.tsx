import * as React from 'react';
import { useState } from 'react';
import { Tooltip } from '../src/components';
import Icon from '../src/components/icon';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <div style={{ margin: '150px auto', textAlign: 'center' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    placement: {
      control: {
        type: 'inline-radio',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
    children: { control: { disable: true } },
  },
};

const Template = (args) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    setShowTooltip(!showTooltip);
  };

  return <Tooltip visible={showTooltip} onHintClose={handleClick} {...args} />;
};

// eslint-disable-next-line react/display-name
const addExplanation = (explanation) => (Story) => (
  <div>
    <p>{explanation}</p>
    <Story />
  </div>
);
export const Standard = Template.bind({});

Standard.args = {
  children: <input type="text" name="fname" />,
  description: 'Some text',
  placement: 'top',
  visible: true,
};

export const WithACloseAction = Template.bind({});
WithACloseAction.args = {
  description: 'Some text',
  placement: 'top',
  closeLabel: 'Close',
  children: <input type="text" name="fname" />,
};

export const ShowHide = Template.bind({});
ShowHide.args = {
  description: 'Toggle the visibility of the Tooltip in the Controls tab',
  placement: 'top',
  visible: true,
  children: <input type="text" name="fname" />,
};
ShowHide.argTypes = {
  placement: { control: { disable: true } },
};

export const OnClick = (args) => {
  return (
    <Tooltip {...args}>
      <Icon iconName="info-round"/>
    </Tooltip>
  );
};

OnClick.args = {
  description: 'Click on the icon',
  displayTrigger: 'click',
  closeLabel: 'Close',
  placement: 'top',
  children: <button type={'button'}>A button</button>,
};

OnClick.decorators = [addExplanation('Click the icon to see the tooltip')];

export const OnHover = (args) => {
  return (
    <Tooltip {...args}>
      <span>
        <Icon iconName="info-round" />
      </span>
    </Tooltip>
  );
};

OnHover.args = {
  children: <button type={'button'}>A button</button>,
  description: 'Message appears on hover',
  displayTrigger: 'hover',
  placement: 'top',
};
OnHover.decorators = [addExplanation('Hover the icon to see the tooltip')];

export const Placements = Template.bind({});
Placements.args = {
  description: 'Select a placement in the Controls tab',
  placement: 'top',
  children: <input type="text" name="fname" />,
};

export const OnAButton = Template.bind({});
OnAButton.args = {
  description: 'Attached on a button',
  placement: 'top',
  children: <button type={'button'}>A button</button>,
};

export const OnATextField = Template.bind({});
OnATextField.args = {
  description: 'Attached on a text field',
  placement: 'top',
  children: <input type="text" name="textTextField" />,
};

export const OnATextArea = Template.bind({});
OnATextArea.args = {
  description: 'Attached on a text area',
  placement: 'top',
  children: <textarea name="aTextArea" rows={4} cols={50} value="Some text" />,
};

export const OnAnIcon = Template.bind({});
OnAnIcon.args = {
  description: 'Attached on an icon',
  placement: 'top',
  children: <Icon iconName="info-round" />,
};

export const OnADatePicker = Template.bind({});
OnADatePicker.args = {
  description: 'Attached on a date picker',
  placement: 'top',
  children: <input type="date" id="meeting" name="meeting" />,
};

export const OnAnImage = Template.bind({});
OnAnImage.args = {
  description: 'Attached on an image',
  placement: 'top',
  children: (
    <img
      style={{ width: '225px', height: '40px' }}
      src="https://symphony.com/wp-content/uploads/2019/06/logo.png"
    />
  ),
};