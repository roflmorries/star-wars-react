import React from 'react'
import styled from 'styled-components'

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

export default function Header() {


  return (
    <Navbar>
    <NavIcon>
        <img src="/nav_logo.png" alt="nav logo"/>
    </NavIcon>
    <NavMenu>
      <ul>
        <li>
          <a id="button" data-category="people" href="#">Characters</a>
        </li>
        <li>
          <a id="button" data-category="planets" href="#">Planets</a>
        </li>
        <li>
          <a id="button" data-category="vehicles" href="#">Vehicles</a>
        </li>
      </ul>
    </NavMenu>
  </Navbar>
  )
}
