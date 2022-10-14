import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from './Checkbox'
import { Text } from './Text'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <label className='flex items-center gap-2'>
        {Story()}
        <Text>Remember me my self for 30 days.</Text>
      </label>
    )
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
