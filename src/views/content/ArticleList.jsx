import { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import ArticleListItemSkeleton from '@/views/content/ArticleListItemSkeleton'
import ArticleListItem from '@/views/content/ArticleListItem'
import ArticleModal from '@/views/content/ArticleModal'
import {
  getAllArticles,
  getAllArticlesCount,
  getArticlesByTopic,
  getTopicArticlesCount,
  selectActiveTab,
  selectArticles,
  selectCount,
  selectSynching,
} from '@/store/slices/appSlice'

import styled from 'styled-components'

function ArticleList() {
  const dispatch = useDispatch()
  const activeTab = useSelector(selectActiveTab)
  const articles = useSelector(selectArticles)
  const count = useSelector(selectCount)
  const synching = useSelector(selectSynching)

  useEffect(() => {
    if(!synching) {
      if(activeTab !== 'all news') {
        dispatch(getArticlesByTopic(activeTab))
        dispatch(getTopicArticlesCount(activeTab))
      } else {
        dispatch(getAllArticles())
        dispatch(getAllArticlesCount())
      }
    }
  }, [dispatch, synching, activeTab])

  const observer = useRef()
  const lastArticleRef = useCallback(node => {

    observer.current = new IntersectionObserver(entries => {
      const [entry] = entries

      if(entry.isIntersecting && count[activeTab] !== articles[activeTab].length) {
        if(activeTab !== 'all news')
          dispatch(getArticlesByTopic(activeTab))
        else
          dispatch(getAllArticles())

        observer.current.disconnect()
      }
    })

    if(node) observer.current.observe(node)
  }, [dispatch, articles, count, activeTab])

  return (
    <Self>
      {
        !synching && articles?.[activeTab] && articles[activeTab].map(
          (article, id) => (
            <ArticleModal
              key={article.id}
              article={article}
            >
              {
                id + 1 === articles[activeTab].length ? (
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
        (synching || count[activeTab] !== articles?.[activeTab]?.length) && [...new Array(10).keys()].map((arg, id) =>
          <ArticleListItemSkeleton key={id} />
        )
      }

    </Self>
  )
}

const Self = styled.section`
  border-top: 2px solid var(--accent-primary);
  padding: 3rem 0;
`

export default ArticleList
