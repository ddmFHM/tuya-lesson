import Layout from "../../components/Layout"
import { Box, Heading, Text, Divider } from '@chakra-ui/core'
import { css } from '@emotion/core'
import axios from "axios"
import { baseURL } from "../../axiosConfig"

const DatailContainer = css`
  padding: 10px 0;
  & > p {
    font-size: 14px;
    margin-bottom: 10px
  }
  & > img {
    display: block;
    margin-bottom: 10px;
  }
`

export default function detail({ detail }) {
  return (
    <Layout>
      <Box maxW={1200} ms="auto" mt="70px" >
        <Heading as="h2" size="xl" >{detail.title}</Heading>
        <Heading as="h4" size="lg" mt="10px" color="gray.500" fontWeight="light" >{detail.sub}</Heading>
        <Divider mt="10px" />
        <Box overflow="hidden"  >
          <Text float="left" >作者：{detail.author}</Text>
          <Text float="right" >发布日期：{detail.publish}</Text>
        </Box>
        <Divider mt="10px" />
        <Box css={DatailContainer} dangerouslySetInnerHTML={{__html: detail.content}}>
        </Box>
      </Box>
    </Layout>
  )
}

// 获取到用户能访问到的所有路由参数
export async function getStaticPaths () {
  let { data } =  await axios.get('/api/videos', {
    baseURL
  })
  let paths = data.map(id => ({
    params: { id }
  }))
  return {
    paths,
    fallback: false
  }
}

// 根据参数获取其对应的数据
export async function getStaticProps ({ params }) {
  let id = params.id;
  let { data: detail } = await axios.get(`/api/detail?id=${id}`, {
    baseURL
  })
  return {
    props: {
      detail
    }
  }
}