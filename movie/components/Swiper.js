import Head from "next/head";
import Link from 'next/link'
import { Box, Heading, Text, Button } from '@chakra-ui/core'
import { Carousel } from 'react-responsive-carousel'
import { css } from '@emotion/core'
import styled from "@emotion/styled";
import axios from 'axios'
import { baseURL } from "../axiosConfig";

const CarouselItem = styled.div`
  position: relative;
  & > div {
    position: absolute;
    left: 30%;
    top: 0;
    transform: translateX(-50%);
    color: #FFF;
    padding-top: 180px;
    text-align: left;
    max-width: 1200px;
    & > p {
      margin: 15px 0;
      font-size: 14px;
      width: 450px;
    }
    & > img {
      filter: brightness(50%);
    }
  }
`
const swiperContainer = css`
  position: relative;
  & > .carousel:last-child {
    position: absolute;
    bottom: 0;
    left: 50%;
    tranfrom: translatex(-50%);
  }
`
export default function Swiper({ data }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/carousel.min.css" ></link>
      </Head>
      <Carousel css={swiperContainer} showArrows={false} showIndicators={false} showStatus={false} >
        
        {
          data.map(swiper => (
            <CarouselItem key={swiper.id} >
              <img src={swiper.url} />
              <Box>
                <Heading  as="h2" size="lg" >
                  {swiper.title}
                </Heading>
                <Text>
                  {swiper.description}
                </Text>
                <Button bgColor="#f40" >
                  <Link href="/detail/[id]" as={`/detail/${swiper.vid}`} >
                    <a>CHECK DETAIL</a>
                  </Link>
                </Button>
              </Box>
            </CarouselItem>
          ))
        }
      </Carousel>
    </>
  )
}

export function loadSwiper () {
  return axios.get('/api/swiper', {
    baseURL
  })
}