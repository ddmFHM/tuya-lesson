import Swiper, { loadSwiper } from "../components/Swiper"
import Movies, { loadMovie } from "../components/Movies"
import Layout from "../components/Layout"

export default function Home({ swiper, movie }) {
  return (
    <Layout>
      <Swiper data={ swiper } />
      <Movies data={ movie } title="电影" />
     </Layout>
  )
}

export async function getStaticProps () {
  // 获取轮播图数据
  let { data: swiper } = await loadSwiper()
  let { data: movie } = await loadMovie()
  return {
    props: {
      swiper,
      movie
    }
  }
}