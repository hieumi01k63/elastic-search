export const subString = (str: string, len: number) => {
  if (str.length <= len) {
    return str
  }

  return `${str.substring(0, len)}...`
}

export const debounce = <F extends (...args: Parameters<F>) => void>(
  func: F,
  delay: number
) => {
  let timer: ReturnType<typeof setTimeout>

  return (...args: Parameters<F>): void => {
    clearTimeout(timer)
    timer = setTimeout(() => func(...args), delay)
  }
}
