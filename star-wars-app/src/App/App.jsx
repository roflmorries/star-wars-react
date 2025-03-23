import './App.css'
import Header from '../Header/Header'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

const Content = styled.div`
    width: 80%;
    display: flex;
    justify-self: center;
    margin: 0 auto;
`

function App() {
  const [category, setCategory] = useState('people');
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(`https://swapi.dev/api/${category}`);

  useEffect(() => {
    fetchData();
  }, [category])

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setUrl(result);
      console.log(result);
      setData((prevData) => [...prevData, ...result.results])
    } catch(error) {
      console.error(error)
    };
  };

  const handleCategoryChange = newCategory => {
    setCategory(newCategory);
    setData([]);
    setUrl(`https://swapi.dev/api/${category}`);
    console.log(newCategory)
  }


  return (
    <>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>

    <Content>
      <Header onCategoryChange={handleCategoryChange}></Header>
    </Content>
      
    </>
  )
}

export default App
