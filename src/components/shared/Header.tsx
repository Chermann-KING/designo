"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "../../../public/images/shared/mobile/icon-hamburger.svg";
import CloseIcon from "../../../public/images/shared/mobile/icon-close.svg";

export default function Header() {
  // etat
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // comportement
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // affichage
  return (
    <HeaderStytled>
      <Link href={"/"} className="logo" role="logo" passHref>
        <Image
          src={"/images/favicon-32x32.png"}
          alt="picto designo"
          width={24}
          height={24}
        />
        <span>Designo</span>
      </Link>

      {/* mobile menu*/}
      <MobileMenuIcon onClick={toggleMenu}>
        {isMenuOpen ? (
          <Image src={CloseIcon} alt="Fermer menu" width={24} height={24} />
        ) : (
          <Image src={MenuIcon} alt="Ouvrir menu" width={24} height={24} />
        )}
      </MobileMenuIcon>

      {/* desktop menu*/}
      <nav className={isMenuOpen ? "active" : ""}>
        <ul>
          <li>
            <Link href={"/our-company"}>Our company</Link>
          </li>
          <li>
            <Link href={"/location"}>Location</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </HeaderStytled>
  );
}

const HeaderStytled = styled.header`
  height: 24px;
  max-width: 1111px;
  margin: 0 auto;
  margin-top: 64px;
  padding: 0 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    gap: 19px;

    span {
      color: #1d1c1e;
      font-size: 1.8rem;
      text-transform: uppercase;
      font-weight: bold;
    }
  }

  /* nav sur ordinateur et tablette */
  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-transform: uppercase;

    ul {
      list-style: none;
      font-size: 0.875rem;

      display: flex;
      gap: 42px;
    }

    ul li:hover {
      text-decoration: underline;
    }
  }

  // masque ou affiche la nav sur mobile
  @media (max-width: 768px) {
    nav {
      display: none;
      position: absolute;
      top: 16%;
      left: 0;
      right: 0;
      flex-direction: column;
      background: white;
      padding: 30px 0;

      ul {
        align-items: center;
        flex-direction: column;
      }

      &.active {
        display: flex;
      }
    }
  }
`;

const MobileMenuIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;
