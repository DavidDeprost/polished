import math from '../math'

describe('math', () => {
  it('should be able to do simple addition', () => {
    expect(math('1rem + 2rem')).toMatchSnapshot()
    expect(math('1rem + 2')).toMatchSnapshot()
    expect(math('1em + 5em')).toMatchSnapshot()
    expect(math('1in + 5in + 10')).toMatchSnapshot()
  })
  it('should be able to do simple subtraction', () => {
    expect(math('1rem - 2rem')).toMatchSnapshot()
    expect(math('1rem - 2')).toMatchSnapshot()
    expect(math('1em - 5em')).toMatchSnapshot()
    expect(math('1in - 5in - 10')).toMatchSnapshot()
  })
  it('should be able to do simple multiplication', () => {
    expect(math('1rem * 2rem')).toMatchSnapshot()
    expect(math('1rem * 2')).toMatchSnapshot()
    expect(math('1em * 5em')).toMatchSnapshot()
    expect(math('1in * 5in * 10')).toMatchSnapshot()
  })
  it('should be able to do simple division', () => {
    expect(math('1rem * 2rem')).toMatchSnapshot()
    expect(math('1rem * 2')).toMatchSnapshot()
    expect(math('1em * 5em')).toMatchSnapshot()
    expect(math('1in * 5in * 10')).toMatchSnapshot()
  })
  it('should be able to do simple factorial', () => {
    expect(math('3!')).toMatchSnapshot()
  })
})
