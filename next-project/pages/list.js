import Head from 'next/head'
import Link from 'next/link'
import styles from './list.module.css'
import { join } from 'path'
import { readFile } from 'fs'
import { promisify } from 'util'

const read = promisify(readFile)

export default function list({ data }) {

  // console.log('page', data) // 输出在页面

  return (
    <>
      <Head>
        <title>List page</title>
      </Head>
      <div>
        List Page works
        <hr />
        <Link href="/" ><a className={styles.demo} >jump to / page</a></Link>
      </div>
    </>
  )
}

export async function getServerSideProps(content) {
  // console.log(content.query)
  let data = await read(join(process.cwd(), 'pages', '_app.js'), 'utf-8')
  // console.log('node')
  return {
    props: {
      data
    }
  }
}
