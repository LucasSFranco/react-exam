import styled from 'styled-components'

import { ChevronRight } from '../../assets/icons'

function Breadcrumb({ items, forwardRef, ...otherProps }) {
  return (
    <Self
      className="breadcrumb"
      ref={forwardRef}
      {...otherProps}
    >
      {
        items.map((item, order) =>
          item && (
            order !== 0 ? (
              <span key={order}>
                <ChevronRight />
                {item}
              </span>
            ) : (
              <span key={order}>{item}</span>
            )
          )
        )
      }
    </Self>
  )
}

const Self = styled.div`
  span {
    color: var(--text-secondary);
    font-size: .75rem;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;

    svg {
      color: var(--text-muted);
      margin: 0 .25rem;
    }
  }
`

export default Breadcrumb
