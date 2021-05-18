import Container from '@/components/Container'

import ArticleList from '@/views/content/ArticleList'
import Navbar from '@/views/content/Navbar'
import Header from '@/views/content/Header'
import ButtonReturnToTop from '@/views/content/ButtonReturnToTop'

import styled from 'styled-components'

function News() {
  return (
    <Self className="news">
      <Header />
      <div className="content">
        <div className="scrollbox">
          <Navbar />
          <Container>
            <ArticleList />
          </Container>
        </div>
        <ButtonReturnToTop />
      </div>
    </Self>
  )
}

const Self = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  & > .content {
    flex: 1 1 auto;

    position: relative;

    & > .scrollbox {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      scroll-behavior: smooth;
      overflow: hidden scroll;
      overflow-anchor: none;

      &::-webkit-scrollbar {
        width: 16px;
        width: 16px;
      }

      &::-webkit-scrollbar-thumb {
        border: 4px solid transparent;
        background: var(--accent-secondary);
        background-clip: padding-box;
      }
    }
  }
`

export default News
