import moment from 'moment'
import uniqid from 'uniqid'

class Article {

  constructor(data) {

    const largeThumb = data.multimedia instanceof Array && data.multimedia.find(
      image => image.format === 'mediumThreeByTwo210'
    )

    const fullImage = data.multimedia instanceof Array && data.multimedia.find(
      image => image.format === 'superJumbo'
    )

    this.id = data.id ?? uniqid(data.published_date)
    this.uri = data.uri
    this.topic = data.topic
    this.section = data.section
    this.subsection = data.subsection
    this.kicker = data.kicker
    this.title = data.title
    this.abstract = data.abstract
    this.url = data.url
    this.byLine = data.byLine ?? data.byline
    this.publishedDate = data.publishedDate ?? data.published_date
    this.multimedia = {
      fullImage: {
        url: data.multimedia?.fullImage?.url ?? fullImage.url,
        width: data.multimedia?.fullImage?.width ?? fullImage.width,
        height: data.multimedia?.fullImage?.height ?? fullImage.height,
        caption: data.multimedia?.fullImage?.caption ?? fullImage.caption,
        copyright: data.multimedia?.fullImage?.copyright ?? fullImage.copyright,
      },
      largeThumb: {
        url: data.multimedia?.largeThumb?.url ?? largeThumb.url,
        width: data.multimedia?.largeThumb?.width ?? largeThumb.width,
        height: data.multimedia?.largeThumb?.height ?? largeThumb.height,
        caption: data.multimedia?.largeThumb?.caption ?? largeThumb.caption,
        copyright: data.multimedia?.largeThumb?.copyright ?? largeThumb.copyright,
      },
    }
  }

  format(pattern = 'LLL') {
    return {
      ...this,
      publishedDate: moment(this.publishedDate).format(pattern)
    }
  }

}

export default Article
