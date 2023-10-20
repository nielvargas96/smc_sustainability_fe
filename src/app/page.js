import Landing from '../components/landing'
import Main from '../components/main'
import Ceo from '../components/ceo'


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
      <Main />
    </>
  )
}
