import moment from 'moment'
import callFlickrEffect from './callFlickrEffect'

jest.mock('./getRecentFlickr')
jest.mock('./searchFlickr')

test('callFlickrEffect with no text, minTakenDate and maxTakenDate should call getRecent method', (done) => {
  const text = undefined
  const minTakenDate = undefined
  const maxTakenDate = undefined
  const page = 1

  expect.assertions(1)
  callFlickrEffect(text, minTakenDate, maxTakenDate, page, (res) => {
    expect(res.body.stat).toBe('ok')
    done()
  })
})

test('callFlickrEffect with text only should call search method', (done) => {
  const text = 'hello'
  const minTakenDate = undefined
  const maxTakenDate = undefined
  const page = 1

  expect.assertions(1)
  callFlickrEffect(text, minTakenDate, maxTakenDate, page, (res) => {
    expect(res.body.stat).toBe('ok')
    done()
  })
})

test('callFlickrEffect with minTakenDate only should call search method', (done) => {
  const text = undefined
  const minTakenDate = moment('2019-12-01')
  const maxTakenDate = undefined
  const page = 1

  expect.assertions(1)
  callFlickrEffect(text, minTakenDate, maxTakenDate, page, (res) => {
    expect(res.body.stat).toBe('ok')
    done()
  })
})

test('callFlickrEffect with maxTakenDate only should call search method', (done) => {
  const text = undefined
  const minTakenDate = undefined
  const maxTakenDate = moment('2019-12-12')
  const page = 1

  expect.assertions(1)
  callFlickrEffect(text, minTakenDate, maxTakenDate, page, (res) => {
    expect(res.body.stat).toBe('ok')
    done()
  })
})
