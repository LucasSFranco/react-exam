import styled from 'styled-components'

function ArticleListItem() {

  const generateRandomInteger = (from, to) => {
    return Math.round(
      Math.random() * (to - from)
    ) + from
  }

  const generateImage = () => {
    return <span className="image" style={{ paddingTop: `${generateRandomInteger(60, 110)}%` }} />
  }

  const generateKicker = () => {
    if(generateRandomInteger(1, 5) !== 5) return

    return [...new Array(generateRandomInteger(4, 7)).keys()]
      .map((arg, id) =>
        <span key={arg + id} style={{ width: generateRandomInteger(30, 70) }} />
      )
  }

  const generateTitle = () => {
    return [...new Array(generateRandomInteger(7, 12)).keys()]
      .map((arg, id) =>
        <span key={arg + id} style={{ width: generateRandomInteger(30, 80) }} />
      )
  }

  const generateAbstract = () => {
    return [...new Array(generateRandomInteger(50, 70)).keys()]
      .map((arg, id) =>
        <span key={arg + id} style={{ width: generateRandomInteger(20, 80) }} />
      )
  }

  const generateByLine = () => {
    return [...new Array(generateRandomInteger(7, 13)).keys()]
      .map((arg, id) =>
        <span key={arg + id} style={{ width: generateRandomInteger(10, 50) }} />
      )
  }

  return (
    <Self className="article-list__item--skeleton">
      <div className="accessory">
        <span className="published-date" />
      </div>
      <div className="main">
        { generateImage() }
        <div className="kicker">
          { generateKicker() }
        </div>
        <div className="title">
          { generateTitle() }
        </div>
        <div className="abstract">
          { generateAbstract() }
        </div>
        <div className="by-line">
          { generateByLine() }
        </div>
      </div>
    </Self>
  )
}

const Self = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: 0 5px 10px rgba(0, 0, 0, .05), 0 0 5px rgba(0, 0, 0, .06);
  padding: 1rem;
  position: relative;

  animation: fadeInOut 1000ms ease-in-out infinite;

  span {
    width: 100%;

    display: inline-block;
    margin-right: .25rem;
    border-radius: 2px;
  }

  .accessory {
    border-top: 1px solid var(--accent-secondary);
    margin-top: .5rem;
    padding-top: .5rem;

    order: 2;

    .published-date {
      background: var(--text-secondary);
      height: .75rem;
      width: 72px;
    }

    @media (min-width: 768px) {
      border: initial;
      order: initial;
      padding: initial;

      margin: .25rem 0;
      flex: 0 0 7.5rem;
    }
  }

  .main {
    flex: 1 1 auto;

    .image {
      width: 100%;

      background: rgba(204, 204, 204, .5);

      @media (min-width: 768px) {
        padding: initial !important;

        width: 180px;
        height: 120px;

        float: right;
        margin: 0 0 1rem 1rem;
      }

      @media (min-width: 1280px) {
        width: 210px;
        height: 140px;
      }
    }

    .kicker {
      margin-bottom: .25rem;

      span {
        background: rgba(51, 51, 51, .5);
        height: .675rem;
      }
    }

    .title {
      margin-bottom: .5rem;

      span {
        background: rgba(0, 0, 0, .5);
        height: 1.25rem;
        margin-right: .3125rem;
      }
    }

    .abstract {
      margin-bottom: .5rem;

      span {
        background: rgba(51, 51, 51, .5);
        height: 1rem;
      }
    }

    .by-line {
      span {
        background: rgba(153, 153, 153, .5);
        height: .75rem;
      }
    }
  }

  small {
    color: rgba(153, 153, 153, .5);
    font-family: 'Roboto', sans-serif;
    font-size: .75rem;

    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  * + & {
    margin-top: 1.5rem;

    @media (min-width: 768px) {
      margin: initial;

      border-top: 1px solid var(--accent-secondary);
    }
  }

  @media (min-width: 768px) {
    box-shadow: initial;
    flex-direction: initial;

    padding: 1rem 3rem;
  }

  @media (min-width: 1280px) {
    padding: 1rem;
  }

  @keyframes fadeInOut {
    0% {
      opacity: .5;
    }

    50% {
      opacity: .75;
    }

    100% {
      opacity: .5;
    }
  }
`

export default ArticleListItem
