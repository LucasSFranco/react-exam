import moment from 'moment'
import uniqid from 'uniqid'

class Article {
  constructor (data) {
    this.id = data.id ?? Date.parse(data.published_date) + '-' + uniqid()
    this.abstract = data.abstract
    this.byLine = data.byLine ?? data.byline
    this.kicker = data.kicker
    this.publishedDate = data.publishedDate ?? data.published_date
    this.section = data.section
    this.subsection = data.subsection
    this.title = data.title
    this.topic = data.topic
    this.uri = data.uri
    this.url = data.url

    const largeThumb = data.multimedia instanceof Array &&
      data.multimedia.find(({ format }) => format === 'mediumThreeByTwo210')

    const fullImage = data.multimedia instanceof Array &&
      data.multimedia.find(({ format }) => format === 'superJumbo')

    this.multimedia = {
      fullImage: {
        url: data.multimedia?.fullImage?.url ?? fullImage.url,
        width: data.multimedia?.fullImage?.width ?? fullImage.width,
        height: data.multimedia?.fullImage?.height ?? fullImage.height,
        caption: data.multimedia?.fullImage?.caption ?? fullImage.caption,
        copyright: data.multimedia?.fullImage?.copyright ?? fullImage.copyright
      },
      largeThumb: {
        url: data.multimedia?.largeThumb?.url ?? largeThumb.url,
        width: data.multimedia?.largeThumb?.width ?? largeThumb.width,
        height: data.multimedia?.largeThumb?.height ?? largeThumb.height,
        caption: data.multimedia?.largeThumb?.caption ?? largeThumb.caption,
        copyright: data.multimedia?.largeThumb?.copyright ?? largeThumb.copyright
      }
    }
  }

  format (pattern = 'LLL') {
    return {
      ...this,
      publishedDate: moment(this.publishedDate).format(pattern)
    }
  }
}

export default Article
