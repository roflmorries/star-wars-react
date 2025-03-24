import './App.css'
import Header from '../Header/Header'
import DataList from '../DataList/DataList'
import styled from 'styled-components'
import DetailsList from '../DetailsList/DetailsList'
import { useEffect, useState } from 'react'
import { Button, Modal, Flex, Spin  } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import MainTitle from '../MainTitle/MainTitle'

const Content = styled.div`
    width: 80%;
    display: flex;
    justify-self: center;
    margin: 0 auto;
`
const ContentList = styled.div`
  @import url(https://fonts.googleapis.com/css2?family=Orbitron:wght@400..900&display=swap);

  .data-list__container {
    display: flex;
    align-items: start;
    flex-direction: column;
    max-width: 80%;
    margin: 0 auto;
    gap: 10px;
    min-height: 605px;
    max-height: 605px;
    overflow-y: auto;
    position: relative;
    padding-bottom: 20px;
    overflow-anchor: none;
    scroll-snap-type: y mandatory; 
    div {
      scroll-snap-align: start;
      a {
        text-align: start;
        color: white;
        font-family: "Orbitron", serif;
        font-size: 0.9rem;
        &:hover {
          color: #ffe81f;
        }
      }
    }
    .load-more__button {
      background-color: #ffe81f;
      color: #232c38;
      width: 100%;
      min-height: 32px;
      border: none;
      border-radius: 7px;
      transition: background-color 0.2s ease-in-out;
      margin-top: 20px;
      font-family: "Orbitron", serif;
      &:hover {
        background-color: white;
      } 
    }
  }
`
const CustomModal = styled.div`
  .ant-modal {
    width: 100% !important;
    background: #1e1e2f;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }

  .ant-modal-header {
    background: #28293e;
    border-bottom: none;
    border-radius: 12px 12px 0 0;
  }

  .ant-modal-title {
    color: red;
    font-size: 20px;
  }

  .ant-modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ant-modal-content {
    border-radius: 17px;
    border: 4px solid rgba( 255, 255, 255, 0.25 );
    border-image-slice: 1;
    transition: border 0.5s ease-in-out; 
    color: white;
    background: rgba( 255, 255, 255, 0.08 );
    backdrop-filter: blur( 9px );
    -webkit-backdrop-filter: blur( 9px );
    padding: 70px;
    min-height: 750px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .ant-modal-close {
    color: #FF1300;
  }

  .ant-modal-footer {
    border-top: none;
    padding: 16px;
    border-radius: 0 0 12px 12px;
  }
`

function App() {
  const [category, setCategory] = useState(null);
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(`https://swapi.dev/api/${category}`);
  const [details, setDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async () => {
    setLoading(true)
    const response = await fetch(url);
    const result = await response.json();
    setData(prev => [...prev, ...result.results]);
    setUrl(result.next)
    setLoading(false)
  };

  const handleCategoryChange = newCategory => {
    setCategory(newCategory);
    setData([]);
    setUrl(`https://swapi.dev/api/${newCategory}`);
    setIsModalOpen(true)
  }

  const handleDetails = async nextUrl => {
    const response = await fetch(nextUrl);
    const result = await response.json();
    setDetails(result)
  }

  const handleLoadMore = () => {
    if (url) fetchData();
  }

  const handleModalClose = () => {
    setIsModalOpen(false);
    setCategory(null)
    setDetails(null)
  
  }

  return (
    <>
    <div id='stars'></div>
    <div id='stars2'></div>
    <div id='stars3'></div>

    <Content>
      <Header onCategoryChange={handleCategoryChange}></Header>
    </Content>
    
    <Modal
    open={isModalOpen}
    onCancel={handleModalClose}
    modalRender={(node) => <CustomModal>{node}</CustomModal>}
    width={'45%'}
    footer={null}
    >
      {loading ? (
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      ): (
      <ContentList>
        {details ? (
          <DetailsList details={details} onBack={() => setDetails(null)}></DetailsList>
        )
        : (
          <DataList data={data} category={category} url={url} onItemClick={handleDetails} onLoadMore={handleLoadMore}></DataList>
        )}
      </ContentList>
      )}
    </Modal>

      <MainTitle></MainTitle>
    
    </>
  )
}

export default App
