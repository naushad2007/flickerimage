import flickr from './flickr'

const searchFlickr = (options) => {
  return flickr.photos.search(options)
}

export default searchFlickr
