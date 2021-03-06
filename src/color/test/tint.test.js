// @flow
import tint from '../tint'

describe('test', () => {
  it('should tint the provided color with white by the given percentage', () => {
    expect(tint(0.25, '#00f')).toMatchSnapshot()
  })

  it('should tint the provided 8-digit hex color with white by the given percentage', () => {
    expect(tint(0.25, '#000fffcc')).toMatchSnapshot()
  })

  it('should tint the provided 4-digit hex color with white by the given percentage', () => {
    expect(tint(0.25, '#0f08')).toMatchSnapshot()
  })

  it('should tint the provided color when passed a string for amount', () => {
    expect(tint('0.25', '#00f')).toMatchSnapshot()
  })

  it('should return transparent when passed transparent', () => {
    expect(tint('0.25', 'transparent')).toMatchSnapshot()
  })
})
