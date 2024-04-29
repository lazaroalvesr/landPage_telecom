'use client'

import styled from "styled-components";

export const HeaderLayour = styled.header`
    display: flex;
    max-width: 1200px;
    margin: auto;
    padding-top: 50px;
    align-items: center;
    justify-content: space-evenly;
    height: 0;
    @media screen and (max-width: 600px) {
    text-align: start;
    align-items: start;
    padding-top: 26px;
    justify-content: space-between;
    padding-left: 12px;
   }
`

export const TitleHeader = styled.h1`
   color: blue;
   font-size: 32px;
   cursor: pointer;
`

export const NavHeader = styled.nav`
    display: flex;
   justify-content: space-evenly;
   align-items: center;
   gap: 80px;
   height: 0;
 @media screen and (max-width: 600px) {
    flex-direction: column-reverse;
    position: absolute; 
    width: 100%;
    height: 100dvh;
    left: 0px;
     top: 90px;
    background-color: #f5f9ff;
 }

`

export const NavHeaderUl = styled.ul`
    display: flex;
    list-style: none;
    gap: 12px;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        position: absolute;
        top: 100px;
    }
`
export const NavHeaderLi = styled.li`
    display: flex;
    font-size: 17px;
    color: black;
    font-weight: 600;
   cursor: pointer;
   @media screen and (max-width: 600px) {
        font-size: 20px;
    }
        `

export const ButtonCustomerHeader = styled.button`
    width: 150px;
    height: 45px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
   cursor: pointer;
   @media screen and (max-width: 600px) {
        font-size: 17px;
        position: absolute; 
        width: 200px;
 
    }
`

export const ButtonMenuMobile =styled.button`
    display: none;
    @media screen and (max-width: 600px) {
        display: flex;
        padding-right: 12px;
        background-color: transparent;
        border: none;
    }
`