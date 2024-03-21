import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'
import CheckIcon from '../Icon'
import { lighten } from 'polished'
import { STYLES_CONST } from './Button.styles'

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

export const VariantsHovered: Story = {
  name: 'Variants:hover',
  args: {
    text: 'Variants:hover',
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
    const getColor = (variant: string) => {
      const colorKey = variant.replace('-outline', '') as keyof typeof STYLES_CONST
      const color = STYLES_CONST[colorKey] as string
      return { backgroundColor: lighten(0.25, color) }
    }

    return (
      <>
        <Button text='Primary' variant='primary' customStyles={getColor('primary')} />
        <Button text='Secondary' variant='secondary' customStyles={getColor('secondary')} />
        <Button text='Success' variant='success' customStyles={getColor('success')} />
        <Button text='Warning' variant='warning' customStyles={getColor('warning')} />
        <Button text='Error' variant='error' customStyles={getColor('error')} />
        <Button text='Primary-outline' variant='primary-outline' customStyles={getColor('primary-outline')} />
        <Button text='Secondary-outline' variant='secondary-outline' customStyles={getColor('secondary-outline')} />
        <Button text='Success-outline' variant='success-outline' customStyles={getColor('success-outline')} />
        <Button text='Warning-outline' variant='warning-outline' customStyles={getColor('warning-outline')} />
        <Button text='Error-outline' variant='error-outline' customStyles={getColor('error-outline')} />
      </>
    )
  },
}

export const VariantsFocused: Story = {
  name: 'Variants:focus',
  args: {
    text: 'Variants:focus',
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
    const forceFocusStateStyles = {
      boxShadow: '0px 0px 0px 2px #42445a',
    }

    return (
      <>
        <Button text='Primary' variant='primary' customStyles={forceFocusStateStyles} />
        <Button text='Secondary' variant='secondary' customStyles={forceFocusStateStyles} />
        <Button text='Success' variant='success' customStyles={forceFocusStateStyles} />
        <Button text='Warning' variant='warning' customStyles={forceFocusStateStyles} />
        <Button text='Error' variant='error' customStyles={forceFocusStateStyles} />
        <Button text='Primary-outline' variant='primary-outline' customStyles={forceFocusStateStyles} />
        <Button text='Secondary-outline' variant='secondary-outline' customStyles={forceFocusStateStyles} />
        <Button text='Success-outline' variant='success-outline' customStyles={forceFocusStateStyles} />
        <Button text='Warning-outline' variant='warning-outline' customStyles={forceFocusStateStyles} />
        <Button text='Error-outline' variant='error-outline' customStyles={forceFocusStateStyles} />
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

export const Test: Story = {
  args: {
    text: 'Variants:hover',
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
    const getColor = (variant: string) => {
      const colorKey = variant.replace('-outline', '') as keyof typeof STYLES_CONST
      const color = STYLES_CONST[colorKey] as string
      return { backgroundColor: lighten(0.25, color) }
    }
    const forceFocusStateStyles = {
      boxShadow: '0px 0px 0px 2px #42445a',
    }
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
            <Button text='Primary:hover' variant='primary' customStyles={getColor('primary')} />
            <Button text='Primary:focus' variant='primary' customStyles={forceFocusStateStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Secondary' variant='secondary' />
            <Button text='Secondary:hover' variant='secondary' customStyles={getColor('secondary')} />
            <Button text='Secondary:focus' variant='secondary' customStyles={forceFocusStateStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Success' variant='success' />
            <Button text='Success:hover' variant='success' customStyles={getColor('success')} />
            <Button text='Success:focus' variant='success' customStyles={forceFocusStateStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Warning' variant='warning' />
            <Button text='Warning:hover' variant='warning' customStyles={getColor('warning')} />
            <Button text='Warning:focus' variant='warning' customStyles={forceFocusStateStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Error' variant='error' />
            <Button text='Error:hover' variant='error' customStyles={getColor('error')} />
            <Button text='Error:focus' variant='error' customStyles={forceFocusStateStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Primary-outline' variant='primary-outline' />
            <Button text='Primary-outline:hover' variant='primary-outline' customStyles={getColor('primary-outline')} />
            <Button text='Primary-outline:focus' variant='primary-outline' customStyles={forceFocusStateStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Secondary-outline' variant='secondary-outline' />
            <Button
              text='Secondary-outline:hover'
              variant='secondary-outline'
              customStyles={getColor('secondary-outline')}
            />
            <Button text='Secondary-outline:focus' variant='secondary-outline' customStyles={forceFocusStateStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Success-outline' variant='success-outline' />
            <Button text='Success-outline:hover' variant='success-outline' customStyles={getColor('success-outline')} />
            <Button text='Success-outline:focus' variant='success-outline' customStyles={forceFocusStateStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Warning-outline' variant='warning-outline' />
            <Button text='Warning-outline:hover' variant='warning-outline' customStyles={getColor('warning-outline')} />
            <Button text='Warning-outline:focus' variant='warning-outline' customStyles={forceFocusStateStyles} />
          </>,
        )}
        {VariantWrapper(
          <>
            <Button text='Error-outline' variant='error-outline' />
            <Button text='Error-outline:hover' variant='error-outline' customStyles={getColor('error-outline')} />
            <Button text='Error-outline:focus' variant='error-outline' customStyles={forceFocusStateStyles} />
          </>,
        )}
      </div>
    )
  },
}
