import type { NextPage } from 'next'
import { HeaderListUser } from '../components/HeaderListUser'
import { ListUser } from '../components/ListUser'

const Home: NextPage = () => {
  return (
    <>
      <HeaderListUser
        title='Listagem de usuários'
        subTitle='Escolha um cliente para visualizar os detalhes'
        buttonNewUser={true} />
      <ListUser />
    </>
  )
}

export default Home
