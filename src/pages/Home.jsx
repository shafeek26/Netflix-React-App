import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Request";
const Home = () => {
  return (
    <div>
      <Main />
      <Row title = 'UpComing' fetchUrl = {requests.requestUpcoming}/>
      <Row title = 'Popular' fetchUrl = {requests.requestPopular}/>
      <Row title = 'Trending' fetchUrl = {requests.requestTrending}/>
      <Row title = 'Horror' fetchUrl = {requests.requestHorror}/>
      <Row title = 'TopRated' fetchUrl = {requests.requestTopRated}/>
    </div>
  )
}

export default Home
