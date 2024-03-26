import { test, expect } from '@playwright/experimental-ct-react'
import { Button } from './Button'
import { convertHexToRGB } from '../../utils/convertHexToRGB'
import { STYLES_CONST } from './const'
import CheckIcon from '../Icon'

test('Prop test: customStyles', async ({ mount }) => {
  const customStyles = { backgroundColor: '#adfe53', color: '#0842ac' }
  const component = await mount(<Button text='Custom Styled' customStyles={customStyles} />)
  await expect(component).toHaveCSS('background-color', convertHexToRGB('#adfe53'))
  await expect(component).toHaveCSS('color', convertHexToRGB('#0842ac'))
})

test('Prop test: disabled', async ({ mount }) => {
  const component = await mount(<Button text='Disabled Button' disabled />)
  await expect(component).toBeDisabled()
})

test('Prop test: isLoading', async ({ mount }) => {
  const component = await mount(<Button text='Loading...' isLoading />)
  await expect(component.locator('.spinner')).toBeVisible()
})

test('Prop test: onClick', async ({ mount }) => {
  let clicked = false
  const component = await mount(
    <Button
      text='Example text'
      onClick={() => {
        clicked = !clicked
      }}
    />,
  )
  await component.click()
  expect(clicked).toBeTruthy()
  await component.click()
  expect(clicked).toBeFalsy()
})
//

test('Prop test: size', async ({ mount }) => {
  const component = await mount(<Button text='Example text' size='lg' />)

  await expect(component).toHaveCSS('min-width', `${STYLES_CONST.buttonWidth * STYLES_CONST.lgMultiplier}px`)
  await expect(component).toHaveCSS('padding', '12px 20px')
})

test('Prop test: text', async ({ mount }) => {
  const component = await mount(<Button text='Example text' type='submit' />)

  await expect(component).toHaveText('Example text')
})

test('Prop test: type', async ({ mount }) => {
  const component = await mount(<Button text='type submit' type='submit' />)

  await expect(component).toHaveAttribute('type', 'submit')
})

test('Prop test: variant - primary', async ({ mount }) => {
  const component = await mount(<Button text='Primary' variant='primary' />)
  await expect(component).toHaveCSS('background-color', convertHexToRGB(STYLES_CONST.primary))
})

test('Prop test: variant - secondary-outline', async ({ mount }) => {
  const component = await mount(<Button text='Secondary' variant='secondary-outline' />)
  await expect(component).toHaveCSS('background-color', convertHexToRGB('#ffffff'))
  await expect(component).toHaveCSS('border', `2px solid ${convertHexToRGB(STYLES_CONST.secondary)}`)
})

test('Prop test: LeftIcon and RightIcon', async ({ mount }) => {
  const component = await mount(<Button text='With Icons' LeftIcon={<CheckIcon />} RightIcon={<CheckIcon />} />)

  expect(await component.locator('div > :first-child').evaluate((el) => el.tagName.toLowerCase())).toBe('svg')
  expect(await component.locator('div > :last-child').evaluate((el) => el.tagName.toLowerCase())).toBe('svg')
})
