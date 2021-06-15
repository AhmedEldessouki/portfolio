/* eslint-disable @typescript-eslint/no-explicit-any */
// Note to self: Memoizing deepEqual with React.useMemo is not a good idea
// because an JS doesn't deepEqual Objects (or Even tell the difference between an array and a function)
function deepEqual(arg0: NonNullable<any>, arg1: NonNullable<any>): boolean {
  if (typeof arg0 !== typeof arg1) {
    return false
  }
  if (typeof arg0 !== 'object') {
    return arg0 === arg1
  }
  if (Array.isArray(arg0)) {
    const arr = arg0.map(item => arg1.includes(item))
    if (arg0.length === arg1.length && !arr.includes((item: boolean) => !item))
      for (let index = 0; index < arg0.length; index += 1) {
        const element = arg0[index]
        if (typeof element === 'object') {
          return deepEqual(
            element,
            arg1.find((item: any) => typeof item === typeof element),
          )
        }
      }
    return (
      arg0.length === arg1.length && !arr.includes((item: boolean) => !item)
    )
  }
  for (const key in arg0) {
    if (
      Object.hasOwnProperty.call(arg0, key) &&
      Object.hasOwnProperty.call(arg1, key)
    ) {
      const isEqual = deepEqual(arg0[key], arg1[key])
      if (!isEqual) {
        return false
      }
    }
  }

  return true
}

function replaceWhiteSpaceWith(str: string, newChar: string = ''): string {
  return str.replace(/\s/g, newChar)
}

export {deepEqual, replaceWhiteSpaceWith}
