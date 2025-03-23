import './App.css'
import Header from '../Header/Header'
import styled from 'styled-components'

const Content = styled.div`
    width: 80%;
    display: flex;
    justify-self: center;
    margin: 0 auto;
`

function App() {

  return (
    <>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>

    <Content>
      <Header></Header>
    </Content>
      
    </>
  )
}

export default App
