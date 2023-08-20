import BangumiList from './components/ListBangumi'
import config from '@/app/config';
export default function Home() {
  return (<div className="">
    <BangumiList listurl={config.API_LIST.LIST_BANGUMI}/>
  </div>
  )
}
