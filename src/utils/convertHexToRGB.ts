export const convertHexToRGB = (hex: string) => {
  const hexCode = hex.replace(/^#/, '')

  const red = parseInt(hexCode.substring(0, 2), 16)
  const green = parseInt(hexCode.substring(2, 4), 16)
  const blue = parseInt(hexCode.substring(4, 6), 16)

  return `rgb(${red}, ${green}, ${blue})`
}
