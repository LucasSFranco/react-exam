import React from 'react'
import { render } from '@testing-library/react'

import ButtonReturnToTop from './ButtonReturnToTop'

describe('Button Return To Top', () => {

  it('properly renders', async () => {

    const { container } = render(
      <ButtonReturnToTop />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

})
