import React from 'react'
import { render } from '@testing-library/react'

import Container from './Container'

describe('Container', () => {

  it('matches snapshot', async () => {

    const { container } = render(
      <Container>
        Children
      </Container>
    )

    expect(container.firstChild).toMatchSnapshot()
  })

})
