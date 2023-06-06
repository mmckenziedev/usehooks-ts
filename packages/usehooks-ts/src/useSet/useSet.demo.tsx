import { useSet } from '..'

export default function Component() {
  const [two] = useSet()

  return <div>Hello {two}</div>
}
