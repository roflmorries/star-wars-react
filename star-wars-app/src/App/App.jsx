import './App.css'
import Header from '../Header/Header'
import DataList from '../DataList/DataList'
import styled from 'styled-components'
import DetailsList from '../DetailsList/DetailsList'
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
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);
    setData(prev => [...prev, ...result.results]);
    setUrl(result.next)
    console.log(data)
  };

  const handleCategoryChange = newCategory => {
    setCategory(newCategory);
    setData([]);
    setUrl(`https://swapi.dev/api/${newCategory}`);
  }

  const handleDetails = async nextUrl => {
    const response = await fetch(nextUrl);
    const result = await response.json();
    setDetails(result)
  }

  const handleLoadMore = () => {
    if (url) fetchData();
  }

  return (
    <>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>

    <Content>
      <Header onCategoryChange={handleCategoryChange}></Header>
    </Content>
    
 
    {details ? (
      <DetailsList details={details} onBack={() => setDetails(null)}></DetailsList>
    )
    : (
      <DataList data={data} category={category} url={url} onItemClick={handleDetails} onLoadMore={handleLoadMore}></DataList>
    )}
    
    </>
  )
}

export default App
