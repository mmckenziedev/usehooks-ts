export function useSet(): [number, () => number] {
  const value = 2
  const method = () => 2

  return [value, method]
}
