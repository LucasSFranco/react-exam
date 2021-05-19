import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { generatePath, useParams } from 'react-router'
import { Link as RouterLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

import Container from '@/components/atoms/Container'
import { changeActiveTab, selectActiveTab, selectTabs } from '@/store/slices/newsSlice'
import { routes } from '@/views/Router'

function Navbar() {
  const dispatch = useDispatch()
  const activeTab = useSelector(selectActiveTab)
  const tabs = useSelector(selectTabs)
  const params = useParams()

  useEffect(() => {
    if(params.topic)
      dispatch(changeActiveTab(params.topic))
    else
      dispatch(changeActiveTab('all news'))
  })

  return (
    <Self className="navbar">
      <h1>{activeTab}</h1>
      <nav>
        {
          tabs.map(tab =>
            <Link
              key={tab}
              selected={tab === activeTab}
              to={
                tab === 'all news' ? (
                  generatePath(routes.news.path, { type: null, topic: null })
                ) : (
                  generatePath(routes.news.path, { type: 'topic', topic: tab })
                )
              }
              onClick={() => dispatch(changeActiveTab(tab))}
            >
              {tab}
            </Link>
          )
        }
      </nav>
    </Self>
  )
}

const Link = styled(RouterLink)`
  ${
    ({ selected }) => selected && css`
      &&& {
        font-weight: 600;
      }
    `
  }
`

const Self = styled(Container)`
  margin-top: 5rem;

  h1 {
    color: var(--header-normal);
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 2.625rem;
    margin-bottom: .75rem;
    text-transform: capitalize;
  }

  nav {
    border-top: 1px solid var(--accent-secondary);
    padding: .5rem 0;

    ${Link} {
      color: var(--text-primary);
      cursor: pointer;
      font-family: 'Roboto', sans-serif;
      font-size: .675rem;
      font-weight: 500;
      margin-bottom: .25rem;
      text-transform: uppercase;

      & + ${Link} {
        border-left: 1px solid var(--accent-secondary);
        margin-left: .5rem;
        padding-left: .5rem;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export default Navbar
