import React from 'react'
import { render } from '@testing-library/react'

import Breadcrumb from './Breadcrumb'

describe('Breadcrumb', () => {

  it('properly renders', async () => {

    const { container } = render(
      <Breadcrumb items={['item 1', 'item 2', 'item 3']} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

})
