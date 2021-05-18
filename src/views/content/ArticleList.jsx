import { useCallback, useEffect, useRef } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'

import {
  getAllArticlesCount,
  getTopicArticlesCount,
  getArticlesByTopic,
  getAllArticles,
  selectActiveTab,
  selectCount,
  selectArticles,
} from '@/store/slices/appSlice'

import ArticleListItemSkeleton from '@/views/content/ArticleListItemSkeleton'
import ArticleListItem from '@/views/content/ArticleListItem'
import ArticleModal from '@/views/content/ArticleModal'

import styled from 'styled-components'

function ArticleList() {
  const params = useParams()

  const dispatch = useDispatch()

  const articles = useSelector(selectArticles)
  const activeTab = useSelector(selectActiveTab)
  const count = useSelector(selectCount)

  useEffect(() => {
    if(params.topic) {
      dispatch(getArticlesByTopic(params.topic))
      dispatch(getTopicArticlesCount(params.topic))
    } else {
      dispatch(getAllArticles())
      dispatch(getAllArticlesCount())
    }
  }, [dispatch, params])

  const observer = useRef()
  const lastArticleRef = useCallback(node => {

    observer.current = new IntersectionObserver(entries => {
      const [entry] = entries

      if(entry.isIntersecting && count[activeTab] !== articles[activeTab].length) {
        if(params.topic)
          dispatch(getArticlesByTopic(params.topic))
        else
          dispatch(getAllArticles())

        observer.current.disconnect()
      }
    })

    if(node) observer.current.observe(node)
  }, [dispatch, params, articles, count, activeTab])

  return (
    <Self>
      {
        articles?.[activeTab] && articles[activeTab].map(
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
        count[activeTab] !== articles?.[activeTab]?.length && [...new Array(10).keys()].map((arg, id) =>
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
