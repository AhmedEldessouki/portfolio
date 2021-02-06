// eslint-disable-next-line @typescript-eslint/no-explicit-any
function deepEqual(arg0: NonNullable<any>, arg1: NonNullable<any>): boolean {
  if (typeof arg0 !== typeof arg1) {
    return false
  } else if (typeof arg0 !== 'object') {
    return arg0 === arg1
  } else if (Array.isArray(arg0)) {
    const arr = arg0.map(item => arg1.includes(item))
    return !arr.includes((item: boolean) => !item)
  } else {
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
  }
  return true
}
export {deepEqual}
