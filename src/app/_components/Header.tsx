'use client'

import { Wrapper } from "./_Styles/Wrapper.style";
import { ButtonCustomerHeader, ButtonMenuMobile, HeaderLayour, NavHeader, NavHeaderLi, NavHeaderUl, TitleHeader } from "./_Styles/Header.style";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = () => {
    const [ativo, setAtivo] = useState(false)

    const toggle = () => {
        setAtivo((!ativo))
    }

    return (
        <Wrapper>
            <HeaderLayour>
                <TitleHeader>Minas Online.</TitleHeader>
                <ButtonMenuMobile onClick={toggle}>
                    {ativo ? <CiMenuFries size={30} /> : <IoMdClose size={30}/>}
                </ButtonMenuMobile>
                {!ativo && (
                    <NavHeader>
                        <NavHeaderUl>
                            <NavHeaderLi>Sobre nós</NavHeaderLi>
                            <NavHeaderLi>Detalhes</NavHeaderLi>
                            <NavHeaderLi>Serviços</NavHeaderLi>
                            <NavHeaderLi>Acessórios</NavHeaderLi>
                            <NavHeaderLi>Nossa Empresa</NavHeaderLi>
                        </NavHeaderUl>
                        <ButtonCustomerHeader>
                            Seja nosso Cliente
                        </ButtonCustomerHeader>
                    </NavHeader>
                )}
            </HeaderLayour>
        </Wrapper>
    )
}

export default Header