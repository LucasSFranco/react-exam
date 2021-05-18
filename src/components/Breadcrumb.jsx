import styled from 'styled-components'

import { ChevronRight } from '@/assets/icons'

function Breadcrumb({ items }) {
  return (
    <Self className="breadcrumb">
      {
        items.map((item, order) =>
          item && (
            <span key={order}>
              {
                order !== 0 && <ChevronRight />
              }
              {item}
            </span>
          )
        )
      }
    </Self>
  )
}

const Self = styled.div`
  span {
    font-size: .75rem;
    font-family: 'Roboto', sans-serif;
    color: var(--text-secondary);
    text-transform: uppercase;

    svg {
      color: var(--text-muted);
      margin: 0 .25rem;
    }
  }
`

export default Breadcrumb
