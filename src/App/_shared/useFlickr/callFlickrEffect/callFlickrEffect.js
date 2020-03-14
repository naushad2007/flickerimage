import getRecentFlickr from './getRecentFlickr'
import searchFlickr from './searchFlickr'

const perPage = 30

const callFlickrEffect = (text, minTakenDate, maxTakenDate, page, successFn, errorFn) => {
  const req = (!text && !minTakenDate && !maxTakenDate)
    ? getRecentFlickr({
      page: page,
      per_page: perPage
    })
    : searchFlickr({
      text: text,
      min_taken_date: minTakenDate,
      max_taken_date: maxTakenDate,
      page: page,
      per_page: perPage
    })

  req
    .then(successFn)
    .catch(errorFn)

  return () => {
    req && req.abort()
  }
}

export default callFlickrEffect
