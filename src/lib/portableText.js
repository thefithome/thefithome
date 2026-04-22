import { toHTML } from '@portabletext/to-html'

export function renderPortableText(value) {
  return toHTML(value)
}