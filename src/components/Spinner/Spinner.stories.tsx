import type { Meta, StoryObj } from '@storybook/react'
import { Spinner } from './Spinner'

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    $backgroundColor: {
      type: 'string',
    },
    $color: {
      type: 'string',
    },
    $offColor: {
      type: 'string',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    type: 'basic',
  },
}

export const Dual: Story = {
  args: {
    type: 'dual',
  },
  tags: ['hideInSidebar'],
}

export const Dots: Story = {
  args: {
    type: 'dots',
  },
  tags: ['hideInSidebar'],
}

export const FadingDots: Story = {
  args: {
    type: 'fadingDots',
  },
  tags: ['hideInSidebar'],
}

export const Customized: Story = {
  args: {
    type: 'dual',
    size: 'lg',
    $color: 'red',
    $offColor: 'blue',
    $backgroundColor: 'yellow',
  },
  tags: ['hideInSidebar'],
}

export const Sizes: Story = {
  name: 'Sizes&Types',
  parameters: {
    docs: { disable: true },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'column',
          gap: '50px',
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
        <div style={{ display: 'flex', gap: '20px' }}>
          <Spinner type='basic' size='sm' />
          <Spinner type='basic' size='md' />
          <Spinner type='basic' size='lg' />
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Spinner type='dual' size='sm' />
          <Spinner type='dual' size='md' />
          <Spinner type='dual' size='lg' />
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Spinner type='fadingDots' size='sm' />
          <Spinner type='fadingDots' size='md' />
          <Spinner type='fadingDots' size='lg' />
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Spinner type='dots' size='sm' />
          <Spinner type='dots' size='md' />
          <Spinner type='dots' size='lg' />
        </div>
      </>
    )
  },
}

export const Color: Story = {
  parameters: {
    docs: { disable: true },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '50px',
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
        <Spinner type='basic' $color='black' />
        <Spinner type='basic' $color='black' $offColor='rgba(0,255,0,0.8)' />
        <Spinner type='dual' $color='black' />
        <Spinner type='dual' $color='black' $offColor='rgba(0,255,0,0.8)' />
        <Spinner type='fadingDots' $color='black' />
        <Spinner type='dots' $color='black' />
      </>
    )
  },
}

export const BackgroundColor: Story = {
  parameters: {
    docs: { disable: true },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '50px',
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
        <Spinner type='basic' $backgroundColor='black' $color='white' size='lg' />
        <Spinner type='dual' $backgroundColor='black' $color='white' size='lg' />
        <Spinner type='fadingDots' $backgroundColor='black' $color='white' size='lg' />
        <Spinner type='dots' $backgroundColor='black' $color='white' size='lg' />
      </>
    )
  },
}
