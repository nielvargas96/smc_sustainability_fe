import Landing from '../components/landing'
import Main from '../components/main'
import Card from '../components/card/index'
import Sustainability from '../components/sustainability'
// import TextScroll from '../components/TextScroll/index'

export const metadata = {
  title: 'SMC - Sustainability',
  description: 'SMC - Sustainability A World of Good',
}

// const [isLoading, setIsLoading] = useState(true);

export default function page() {
  return (
    <>
      <Landing />
      <Card />
      {/* <Main /> */}
      <Sustainability />
      {/* <TextScroll /> */}
    </>
  )
}
