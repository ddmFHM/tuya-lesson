import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>index page</title>
      </Head>
      <div>
        Index Page works
        <hr />
        <Link href="/list" ><a className="demo" >jump to list page</a></Link>
      </div>
      <style jsx >{`
        .demo {
          color: #fcc;
          font-size: 20px;
        }
      `}</style>
    </>
  )
}
