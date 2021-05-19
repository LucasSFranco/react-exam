import styled from 'styled-components'

import Article from '../../models/Article'

function ArticleListItem({ article, forwardRef, ...otherProps }) {
  const formattedArticle = new Article(article).format('LL')

  const aspectRatio =
    formattedArticle.multimedia.fullImage.height /
    formattedArticle.multimedia.fullImage.width

  return (
    <Self
      className="article list__item"
      data-testid="article-list-item"
      ref={forwardRef}
      {...otherProps}
    >
      <div className="accessory">
        <time>{formattedArticle.publishedDate}</time>
      </div>
      <div className="main">
        <figure>
          <picture style={{ paddingTop: `${aspectRatio * 100}%` }}>
            <source
              media="(min-width: 768px)"
              srcSet={formattedArticle.multimedia.largeThumb.url}
            />
            <img
              src={formattedArticle.multimedia.fullImage.url}
              alt={formattedArticle.multimedia.fullImage.caption}
            />
          </picture>
          <figcaption>{formattedArticle.multimedia.fullImage.copyright}</figcaption>
        </figure>
        <h6>{formattedArticle.kicker}</h6>
        <h3>{formattedArticle.title}</h3>
        <p>{formattedArticle.abstract}</p>
        <span>{formattedArticle.byLine}</span>
      </div>
    </Self>
  )
}

const Self = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: 0 5px 10px rgba(0, 0, 0, .05), 0 0 5px rgba(0, 0, 0, .06);
  cursor: pointer;
  padding: 1rem;
  position: relative;

  .accessory {
    border-top: 1px solid var(--accent-secondary);
    margin-top: .5rem;
    order: 2;
    padding-top: .5rem;

    time {
      color: var(--text-secondary);
      font-family: 'Roboto', sans-serif;
      font-size: .75rem;
    }

    @media (min-width: 768px) {
      border: initial;
      order: initial;
      padding: initial;

      flex: 0 0 7.5rem;
      margin: .5rem 0;
    }
  }

  .main {
    flex: 1 1 auto;

    figure {
      margin-bottom: 2rem;

      picture {
        display: block;
        position: relative;

        img {
          width: 100%;

          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;

          @media (min-width: 768px) {
            position: initial;
            top: initial;
            left: initial;
            right: initial;
            bottom: initial;
          }
        }

        @media (min-width: 768px) {
          padding: initial !important;
          position: initial;
        }
      }

      figcaption {
        color: var(--text-secondary);
        font-family: 'Roboto', sans-serif;
        font-size: .625rem;
        text-transform: uppercase;
        text-align: right;
      }

      @media (min-width: 768px) {
        width: 180px;

        float: right;
        margin: 0 0 1rem 1rem;
      }

      @media (min-width: 1280px) {
        width: 210px;
      }
    }

    h6 {
      color: var(--text-primary);
      font-family: 'Roboto', sans-serif;
      font-size: .675rem;
      font-weight: 500;
      margin-bottom: .25rem;
      text-transform: uppercase;
    }

    h3 {
      color: var(--header-normal);
      font-size: 1.375rem;
      line-height: 1.625rem;
      margin-bottom: .5rem;
    }

    p {
      color: var(--text-primary);
      font-size: 1.125rem;
      line-height: 1.375rem;
      margin-bottom: .5rem;
    }

    span {
      color: var(--text-secondary);
      font-family: 'Roboto', sans-serif;
      font-size: .75rem;
    }
  }

  small {
    color: var(--text-secondary);
    font-family: 'Roboto', sans-serif;
    font-size: .75rem;

    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  &:hover {
    h3 {
      text-decoration: underline;
    }
  }

  & + & {
    margin-top: 1.5rem;

    @media (min-width: 768px) {
      margin: initial;

      border-top: 1px solid var(--accent-secondary);
    }
  }

  &:hover {
    @media (min-width: 768px) {
      border-color: transparent;
      box-shadow: 0 5px 10px rgba(0, 0, 0, .05), 0 0 5px rgba(0, 0, 0, .06);
    }
  }

  &:hover + & {
    @media (min-width: 768px) {
      border-color: transparent;
    }
  }

  @media (min-width: 768px) {
    box-shadow: initial;
    flex-direction: initial;

    padding: 1rem 3rem;

    transition: 250ms border-color, 250ms box-shadow;
  }

  @media (min-width: 1280px) {
    padding: 1rem;
  }
`

export default ArticleListItem
