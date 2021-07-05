import React from 'react'
import { Box, Container, Button, Image } from '@chakra-ui/core'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { FaSignInAlt, FaSearch } from 'react-icons/fa'
import { BsFillPersonFill } from 'react-icons/bs'

const SignInAddJoin = styled.div`
  height: 52px;
  line-height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  padding: 0 6px;
  float: left;
  color: #fff;
  & > button {
    padding: 0 10px;
  }
  & > button:nth-of-type(1):after {
    content: '';
    width: 1px;
    height: 10px;
    background: #fff;
    right: 0;
    position: absolute;
    top: 21px;
  }
`
const logo = css`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
`
const Search = styled.a`
  float: right;
  height: 52px;
  border-left: 1px solid #393939;
  border-right: 1px solid #393939;
  font-size: 20px;
  color: #fff;
  padding: 0 10px;
  display: flex;
  align-self: center;
`

export default function Header() {
  return (
    <Box h={52} bgColor="#202020" borderBottom="1px solid #393939">
      <Container h={52} maxW={1200} pos="relative" >
        <SignInAddJoin>
          <Button bgColor="#202020" leftIcon={FaSignInAlt} >登录</Button>
          <Button bgColor="#202020" leftIcon={BsFillPersonFill} >注册</Button>
        </SignInAddJoin>
        <Image css={logo} src="/images/logo.png" />
        <Search>
          <FaSearch />
        </Search>
      </Container>
    </Box>
  )
}
