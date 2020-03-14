const photos = [
  { id: '49228050938', owner: '185677780@N06', secret: 'e938da6c5f', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228051303', owner: '185176283@N07', secret: '77e50265f6', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052073', owner: '99414504@N03', secret: 'd803c40081', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052113', owner: '185947672@N05', secret: '1ba0a8ab6e', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052318', owner: '183178725@N04', secret: 'c8b51d3b4a', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052918', owner: '77531522@N05', secret: '7b4327611a', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052928', owner: '185979450@N04', secret: '1d397be6b8', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228053658', owner: '147738390@N05', secret: 'af643ceeac', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052999', owner: '77531522@N05', secret: '7b43276199', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052988', owner: '185979450@N04', secret: '1d397be688', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },

  { id: '49228050938', owner: '185677780@N06', secret: 'e938da6c5f', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228051303', owner: '185176283@N07', secret: '77e50265f6', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052073', owner: '99414504@N03', secret: 'd803c40081', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052113', owner: '185947672@N05', secret: '1ba0a8ab6e', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052318', owner: '183178725@N04', secret: 'c8b51d3b4a', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052918', owner: '77531522@N05', secret: '7b4327611a', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052928', owner: '185979450@N04', secret: '1d397be6b8', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228053658', owner: '147738390@N05', secret: 'af643ceeac', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052999', owner: '77531522@N05', secret: '7b43276199', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052988', owner: '185979450@N04', secret: '1d397be688', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },

  { id: '49228050938', owner: '185677780@N06', secret: 'e938da6c5f', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228051303', owner: '185176283@N07', secret: '77e50265f6', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052073', owner: '99414504@N03', secret: 'd803c40081', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052113', owner: '185947672@N05', secret: '1ba0a8ab6e', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052318', owner: '183178725@N04', secret: 'c8b51d3b4a', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052918', owner: '77531522@N05', secret: '7b4327611a', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052928', owner: '185979450@N04', secret: '1d397be6b8', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228053658', owner: '147738390@N05', secret: 'af643ceeac', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052999', owner: '77531522@N05', secret: '7b43276199', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052988', owner: '185979450@N04', secret: '1d397be688', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },

  { id: '49228050938', owner: '185677780@N06', secret: 'e938da6c5f', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228051303', owner: '185176283@N07', secret: '77e50265f6', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052073', owner: '99414504@N03', secret: 'd803c40081', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052113', owner: '185947672@N05', secret: '1ba0a8ab6e', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052318', owner: '183178725@N04', secret: 'c8b51d3b4a', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052918', owner: '77531522@N05', secret: '7b4327611a', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052928', owner: '185979450@N04', secret: '1d397be6b8', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228053658', owner: '147738390@N05', secret: 'af643ceeac', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052999', owner: '77531522@N05', secret: '7b43276199', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 },
  { id: '49228052988', owner: '185979450@N04', secret: '1d397be688', server: '65535', farm: 66, title: 'photo title', ispublic: 1, isfriend: 0, isfamily: 0 }
]

const getRecentFlickr = (options) => {
  const { page, per_page: perPage } = options
  const startIndex = (page - 1) * perPage
  const endIndex = (page * perPage) - 1
  const result = photos.filter((el, idx) => {
    return idx >= startIndex && idx <= endIndex
  })

  const promise = new Promise((resolve, reject) => {
    resolve({
      body: {
        photos: {
          page: page,
          pages: Math.ceil(photos.length / perPage),
          perpage: perPage,
          photo: result,
          total: photos.length
        },
        stat: 'ok'
      }
    })
  })

  promise.abort = () => {}

  return promise
}

export default getRecentFlickr
