import styled from 'styled-components'

import logo from '@/assets/logo.svg'

function Header() {
  return (
    <Self>
      <a target="_blank" rel="noreferrer" href="https://www.nytimes.com/">
        <img src={logo} alt="The New York Times" />
      </a>
    </Self>
  )
}

const Self = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: .75rem 0;
  border-bottom: 1px solid var(--accent-secondary);

  a {
    width: 185px;
    height: 25px;

    display: flex;
  }
`

export default Header
