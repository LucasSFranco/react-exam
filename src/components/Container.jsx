import styled from 'styled-components'

const Container = styled.div`
  margin: 0 1.5rem;

  @media (min-width: 768px) {
    margin: 0 3rem;
  }

  @media (min-width: 1280px) {
    max-width: calc(1280px - 3rem);

    margin: 0 auto;
  }
`

export default Container
