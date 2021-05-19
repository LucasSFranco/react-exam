import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ArticleListItem from '../molecules/ArticleListItem'
import ArticleListItemSkeleton from '../molecules/ArticleListItemSkeleton'
import ArticleModal from '../molecules/ArticleModal'
import {
  getAllArticles,
  getAllArticlesCount,
  getTopicArticles,
  getTopicArticlesCount,
  selectActiveTab,
  selectArticles,
  selectCount,
  selectSynching,
} from '../../store/slices/newsSlice'

import styled from 'styled-components'

function ArticleList() {
  const dispatch = useDispatch()
  const activeTab = useSelector(selectActiveTab)
  const articles = useSelector(selectArticles)
  const count = useSelector(selectCount)
  const synching = useSelector(selectSynching)

  const loader = useRef(
    [...new Array(10).keys()]
      .map(key => <ArticleListItemSkeleton key={key} />)
  )

  useEffect(() => {
    if(!synching && activeTab && !articles[activeTab]) {
      if(activeTab !== 'all news') {
        dispatch(getTopicArticles(activeTab))
        dispatch(getTopicArticlesCount(activeTab))
      } else {
        dispatch(getAllArticles())
        dispatch(getAllArticlesCount())
      }
    }
  }, [activeTab, articles, dispatch, synching])

  const observer = useRef()
  const lastArticleRef = useCallback(node => {
    observer.current = new IntersectionObserver(entries => {
      const [entry] = entries

      if(entry.isIntersecting && count[activeTab] !== articles[activeTab].length) {
        if(activeTab !== 'all news')
          dispatch(getTopicArticles(activeTab))
        else
          dispatch(getAllArticles())

        observer.current.disconnect()
      }
    })

    if(node) observer.current.observe(node)

  }, [activeTab, articles, count, dispatch])

  return (
    <Self className="article list">
      {
        !synching && (articles[activeTab] || []).map(
          (article, pos) => (
            <ArticleModal
              key={article.id}
              article={article}
            >
              {
                pos + 1 === articles[activeTab].length ? (
                  <ArticleListItem
                    forwardRef={lastArticleRef}
                    article={article}
                  />
                ) : (
                  <ArticleListItem
                    article={article}
                  />
                )
              }
            </ArticleModal>
          )
        )
      }

      {
        count[activeTab] !== (articles[activeTab]?.length || []) && loader.current
      }

    </Self>
  )
}

const Self = styled.section`
  border-top: 2px solid var(--accent-primary);
  padding: 3rem 0;
`

export default ArticleList
