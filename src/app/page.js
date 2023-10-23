import Landing from '../components/landing'
import Main from '../components/main'
import Ceo from '../components/ceo/index'
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
      <Ceo />
      {/* <Main /> */}
      <Sustainability />
      {/* <TextScroll /> */}
    </>
  )
}
