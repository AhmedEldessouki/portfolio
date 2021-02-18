export function replaceWhiteSpaceWith(str: string, newChar: string = ''): string {
  return str.replace(/\s/g, newChar)
}

