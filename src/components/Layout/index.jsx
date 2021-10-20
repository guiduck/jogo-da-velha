import React, { useState } from 'react'

import BlockItem from '../BlockItem'

import { Container } from './styles'

export default function Layout() {
  const boardArray = Array(9).fill('')
  const [board, setBoard] = useState(boardArray)

  return (
    <Container>
      {board.map((board)=> {
        return (
          <BlockItem />
        )        
      })}      
    </Container>
  )
}
