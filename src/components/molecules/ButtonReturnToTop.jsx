import styled from 'styled-components'

import { AngleDoubleUp } from '../../assets/icons'

function ButtonReturnToTop() {

  const returnToTop = () => {
    document.querySelector('.scrollbox').scrollTop = 0
  }

  return (
    <Self
      className="button return-to-top"
      onClick={returnToTop}
    >
      <AngleDoubleUp />
    </Self>
  )
}

const Self = styled.button`
  width: 2.5rem;
  height: 2.5rem;

  background: var(--button-normal);
  color: var(--button-color);
  cursor: pointer;
  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 100ms background-color;

  position: absolute;
  left: 1.5rem;
  bottom: 1.5rem;

  &:hover {
    background: var(--button-hover);
  }

  &:active {
    background: var(--button-active);
  }
`

export default ButtonReturnToTop
