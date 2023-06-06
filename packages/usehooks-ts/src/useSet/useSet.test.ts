import { act, renderHook } from '@testing-library/react-hooks/dom'

import { useSet } from './useSet'

describe('useSet()', () => {
  test('should useSet be ok', () => {
    const { result } = renderHook(() => useSet())
    const [value, method] = result.current

    expect(value).toBe(2)
    expect(typeof method).toBe('function')
  })

  test('should method returns 2', () => {
    const { result } = renderHook(() => useSet())
    const [, method] = result.current

    let value = 0

    act(() => {
      value = method()
    })

    expect(value).toBe(2)
  })
})