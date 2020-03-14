import flickr from './flickr'

const getRecentFlickr = (options) => {
  return flickr.photos.getRecent(options)
}

export default getRecentFlickr
