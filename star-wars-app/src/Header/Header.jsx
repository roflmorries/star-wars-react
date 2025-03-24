// import React from 'react'
import styled from 'styled-components'
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const Navbar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    `;

const NavMenu = styled.div`
    ul {
        display: flex;
        list-style: none;
        justify-content: center;
        gap: 50px;
    }

    ul li a {
        text-decoration: none;
        color: #ffe81f;
        font-family: "Orbitron", serif;
        text-shadow: #090a0f 10px 10px 10px;
    }

    ul li a:hover {
        border-bottom: 1.5px solid #ffe81f;
    }
    `

const NavIcon = styled.div`
    img {
        width: 120px;
        height: 80px;
    }
    `

export default function Header({ onCategoryChange }) {
  const [modal2Open, setModal2Open] = useState(false);

  return (
    <Navbar>
        <NavIcon>
            <img src="/nav_logo.png" alt="nav logo"/>
        </NavIcon>
        <NavMenu>
        <ul>
            <li>
            <a onClick={() => {
                onCategoryChange('people')
            }} href="#">Characters</a>
            </li>
            <li>
            <a onClick={() => onCategoryChange('planets')} href="#">Planets</a>
            </li>
            <li>
            <a onClick={() => onCategoryChange('vehicles')} href="#">Vehicles</a>
            </li>
        </ul>
        </NavMenu>
              <Modal
                title="Vertically centered modal dialog"
                centered
                open={modal2Open}
                onOk={() => setModal2Open(false)}
                onCancel={() => setModal2Open(false)}
              >
                <p>some contents...</p>
                <p>some contents...</p>
                <p>some contents...</p>
              </Modal>
    </Navbar>
  )
}
