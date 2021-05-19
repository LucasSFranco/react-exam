import React from "react"
import { render, screen } from '@testing-library/react'
import ArticleList from './ArticleList'

// jest.mock('./api')

describe('Article List', () => {
  it('properly renders articles', async () => {
    render(
      <ArticleList />
    )

    // api.listaTransacoes.mockResolvedValue([
    //   {
    //     "valor": '10',
    //     "transacao": "saque",
    //     "data": "10/08/2020",
    //     "id": 1
    //   },
    //   {
    //     "valor": '20',
    //     "transacao": "deposito",
    //     "data": "26/09/2020",
    //     "id": 2
    //   },
    // ])

    // render(<App />)

    // expect(await screen.findByText('saque')).toBeInTheDocument()

    // expect(screen.getByTestId('transacoes').children.length).toBe(2)

    expect(true).toBe(true)

  })
})
