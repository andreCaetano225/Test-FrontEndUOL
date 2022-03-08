import type { NextPage } from 'next'
import { Header } from '../components/BannerUOL'
import { HeaderListUser } from '../components/HeaderListUser'
import { HeaderText } from '../components/HeaderText'

const Home: NextPage = () => {
  return (
    <>
      <HeaderText />
      <HeaderListUser />
    </>
  )
}

export default Home
