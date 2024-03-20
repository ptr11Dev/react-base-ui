import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'

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

export const Error: Story = {
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

export const OnClickCall: Story = {
  args: {
    text: 'Button Primary',
    variant: 'primary',
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
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          alignItems: 'flex-end',
        }}>
        <Story />
      </div>
    ),
  ],
  render: () => {
    return (
      <>
        <Button text='Primary' variant='primary' />
        <Button text='Secondary' variant='secondary' />
        <Button text='Success' variant='success' />
        <Button text='Warning' variant='warning' />
        <Button text='Error' variant='error' />
        <Button text='Primary-outline' variant='primary-outline' />
        <Button text='Secondary-outline' variant='secondary-outline' />
        <Button text='Success-outline' variant='success-outline' />
        <Button text='Warning-outline' variant='warning-outline' />
        <Button text='Error-outline' variant='error-outline' />
      </>
    )
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
          alignItems: 'flex-end',
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
