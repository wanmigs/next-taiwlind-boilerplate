import { Layout, Button, Input } from '~/components'

const Home = () => (
  <Layout>
    <h1>Hello World</h1>
    <Button className={`bg-blue-500 text-white w-40`}>Sample Button</Button>
    <Input placeholder={`Sample Input`}/>
  </Layout>
)

export default Home
