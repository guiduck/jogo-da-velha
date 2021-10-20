import React, { useState } from 'react'

import { 
  Container,
  Options, 
  XIcon, 
  OIcon  
} from './styles'

export default function BlockItem() {
  const [option, setOption] = useState(''); 
  if (option !== '') {
    console.log(option);
  } 

  return (
    <Container>
      {
        option === 'x' ? 
          <XIcon style={{
              width: "100px", 
              height: "100px"
          }} /> : 
          <OIcon style={{
              width: "100px", 
              height: "100px"
          }} /> 
      }
      <Options >
        <div onClick={() => setOption('x')}><XIcon /></div>
        <div onClick={()=> setOption('o')}><OIcon /></div>
      </Options>      
    </Container>
  )
}
