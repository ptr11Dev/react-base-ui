import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'
import CheckIcon from '../Icon'
import { STYLES_CONST } from './const'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    text: 'Button Primary',
    variant: 'primary',
  },
  tags: ['hideInSidebar'],
}

export const Secondary: Story = {
  args: {
    text: 'Secondary',
    variant: 'secondary',
  },
  tags: ['hideInSidebar'],
}

export const Success: Story = {
  args: {
    text: 'Success',
    variant: 'success',
  },
  tags: ['hideInSidebar'],
}

export const Warning: Story = {
  args: {
    text: 'Warning',
    variant: 'warning',
  },
  tags: ['hideInSidebar'],
}

export const ErrorStory: Story = {
  name: 'Error',
  args: {
    text: 'Error',
    variant: 'error',
  },
  tags: ['hideInSidebar'],
}

export const Sm: Story = {
  args: {
    text: 'sm',
    size: 'sm',
  },
  tags: ['hideInSidebar'],
}

export const Md: Story = {
  args: {
    text: 'md',
    size: 'md',
  },
  tags: ['hideInSidebar'],
}

export const Lg: Story = {
  args: {
    text: 'lg',
    size: 'lg',
  },
  tags: ['hideInSidebar'],
}

export const Customized: Story = {
  args: {
    text: 'Custom Button',
    customStyles: {
      backgroundColor: 'red',
      minWidth: '500px',
      fontSize: '90px',
    },
  },
  tags: ['hideInSidebar'],
}

export const LeftIcon: Story = {
  args: {
    text: 'Left Icon',
    LeftIcon: <CheckIcon />,
  },
  tags: ['hideInSidebar'],
}

export const RightIcon: Story = {
  args: {
    text: 'Right Icon',
    RightIcon: <CheckIcon />,
  },
  tags: ['hideInSidebar'],
}

export const BothIcons: Story = {
  args: {
    text: 'Both Icons',
    LeftIcon: <CheckIcon />,
    RightIcon: <CheckIcon />,
  },
  tags: ['hideInSidebar'],
}

export const Disabled: Story = {
  args: {
    text: 'Disabled',
    disabled: true,
  },
  tags: ['hideInSidebar'],
}

export const OnClickCall: Story = {
  args: {
    text: 'Click Me!',
  },
}

export const Loading: Story = {
  args: {
    text: 'Loading Button',
    isLoading: true,
  },
}

export const Sizes: Story = {
  args: {
    text: 'Sizes',
  },
  parameters: {
    docs: { disable: true },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Story />
      </div>
    ),
  ],
  render: () => {
    return (
      <>
        <Button text='sm' size='sm' />
        <Button text='md' size='md' />
        <Button text='lg' size='lg' />
      </>
    )
  },
}

export const Icons: Story = {
  args: {
    text: 'Icons',
  },
  parameters: {
    docs: { disable: true },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Story />
      </div>
    ),
  ],
  render: () => {
    return (
      <>
        <Button text='Left Icon' LeftIcon={<CheckIcon />} />
        <Button text='Right Icon' RightIcon={<CheckIcon />} />
        <Button text='Both Icons' RightIcon={<CheckIcon />} LeftIcon={<CheckIcon />} />
      </>
    )
  },
}

export const Variants: Story = {
  args: {
    text: 'Variants',
  },
  parameters: {
    docs: { disable: true },
  },
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Story />
        </div>
      )
    },
  ],
  render: () => {
    const VariantWrapper = (children: JSX.Element) => {
      return <div style={{ display: 'flex', gap: '20px' }}>{children}</div>
    }

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {VariantWrapper(
          <>
            <Button text='Primary' variant='primary' />
            <Button text='Primary:active' variant='primary' customStyles={STYLES_CONST.activeStyles} />
            <Button text='Primary:focus' variant='primary' customStyles={STYLES_CONST.focusStyles} />
            <Button text='Primary:hover' variant='primary' customStyles={STYLES_CONST.hoverStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Secondary' variant='secondary' />
            <Button text='Secondary:active' variant='secondary' customStyles={STYLES_CONST.activeStyles} />
            <Button text='Secondary:focus' variant='secondary' customStyles={STYLES_CONST.focusStyles} />
            <Button text='Secondary:hover' variant='secondary' customStyles={STYLES_CONST.hoverStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Success' variant='success' />
            <Button text='Success:active' variant='success' customStyles={STYLES_CONST.activeStyles} />
            <Button text='Success:focus' variant='success' customStyles={STYLES_CONST.focusStyles} />
            <Button text='Success:hover' variant='success' customStyles={STYLES_CONST.hoverStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Warning' variant='warning' />
            <Button text='Warning:active' variant='warning' customStyles={STYLES_CONST.activeStyles} />
            <Button text='Warning:focus' variant='warning' customStyles={STYLES_CONST.focusStyles} />
            <Button text='Warning:hover' variant='warning' customStyles={STYLES_CONST.hoverStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Error' variant='error' />
            <Button text='Error:active' variant='error' customStyles={STYLES_CONST.activeStyles} />
            <Button text='Error:focus' variant='error' customStyles={STYLES_CONST.focusStyles} />
            <Button text='Error:hover' variant='error' customStyles={STYLES_CONST.hoverStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Primary-outline' variant='primary-outline' />
            <Button text='Primary-outline:active' variant='primary-outline' customStyles={STYLES_CONST.activeStyles} />
            <Button text='Primary-outline:focus' variant='primary-outline' customStyles={STYLES_CONST.focusStyles} />
            <Button text='Primary-outline:hover' variant='primary-outline' customStyles={STYLES_CONST.hoverStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Secondary-outline' variant='secondary-outline' />
            <Button
              text='Secondary-outline:active'
              variant='secondary-outline'
              customStyles={STYLES_CONST.activeStyles}
            />
            <Button
              text='Secondary-outline:focus'
              variant='secondary-outline'
              customStyles={STYLES_CONST.focusStyles}
            />
            <Button
              text='Secondary-outline:hover'
              variant='secondary-outline'
              customStyles={STYLES_CONST.hoverStyles}
            />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Success-outline' variant='success-outline' />
            <Button text='Success-outline:active' variant='success-outline' customStyles={STYLES_CONST.activeStyles} />
            <Button text='Success-outline:focus' variant='success-outline' customStyles={STYLES_CONST.focusStyles} />
            <Button text='Success-outline:hover' variant='success-outline' customStyles={STYLES_CONST.hoverStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Warning-outline' variant='warning-outline' />
            <Button text='Warning-outline:active' variant='warning-outline' customStyles={STYLES_CONST.activeStyles} />
            <Button text='Warning-outline:focus' variant='warning-outline' customStyles={STYLES_CONST.focusStyles} />
            <Button text='Warning-outline:hover' variant='warning-outline' customStyles={STYLES_CONST.hoverStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Error-outline' variant='error-outline' />
            <Button text='Error-outline:active' variant='error-outline' customStyles={STYLES_CONST.activeStyles} />
            <Button text='Error-outline:focus' variant='error-outline' customStyles={STYLES_CONST.focusStyles} />
            <Button text='Error-outline:hover' variant='error-outline' customStyles={STYLES_CONST.hoverStyles} />
          </>,
        )}
      </div>
    )
  },
}
