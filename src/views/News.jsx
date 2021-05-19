import styled from 'styled-components'

import Container from '@/components/atoms/Container'
import ButtonReturnToTop from '@/components/molecules/ButtonReturnToTop'
import Header from '@/components/molecules/Header'
import ArticleList from '@/components/organisms/ArticleList'
import Navbar from '@/components/organisms/Navbar'

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
        height: 16px;
      }

      &::-webkit-scrollbar-thumb {
        background: var(--accent-secondary);
        background-clip: padding-box;
        border: 4px solid transparent;
      }
    }
  }
`

export default News
