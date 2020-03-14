import { render, waitForElementToBeRemoved } from '@testing-library/react'
import React from 'react'
import PhotoSearch from './PhotoSearch'

jest.mock('../../_shared/useFlickr/callFlickrEffect/getRecentFlickr')
jest.mock('../../_shared/useFlickr/callFlickrEffect/searchFlickr')

test('PhotoSearch with empty query should return recents photos', async () => {
  const query = {}
  const { container } = render(
    <PhotoSearch
      query={query}
    />
  )

  const spinner1 = container.querySelector('.ant-spin')

  expect(spinner1).not.toBeNull()

  await waitForElementToBeRemoved(() => container.querySelector('.ant-spin'))

  const photoCards1 = container.querySelectorAll('.ant-card')
  expect(photoCards1.length).toBe(30)
})

test('PhotoSearch with non-empty query should return search result photos', async () => {
  const query = {
    text: 'hello'
  }
  const { container } = render(
    <PhotoSearch
      query={query}
    />
  )

  const spinner1 = container.querySelector('.ant-spin')

  expect(spinner1).not.toBeNull()

  await waitForElementToBeRemoved(() => container.querySelector('.ant-spin'))

  const photoCards1 = container.querySelectorAll('.ant-card')
  expect(photoCards1.length).toBe(30)
})
