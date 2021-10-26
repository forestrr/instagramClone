import Head from 'next/head'
import Feed from './components/Feed'
import Header from './components/Header'
import {GrInstagram} from "react-icons/gr"
export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram </title>
        <link rel="icon" href={<GrInstagram/> } />
      </Head>
      <Header/>
      <Feed/>
      {/*Model */}
    </div>
  )
}
