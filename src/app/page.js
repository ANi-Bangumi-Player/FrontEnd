"use client";
import BangumiList from './components/listBangumi'
import config from '@/app/config';
import { useParams, useSearchParams } from 'next/navigation';
export default function Home() {
  const pageId = useSearchParams().get("p");
  return (<BangumiList listurl={config.API_LIST.LIST_BANGUMI} pageId={pageId}/>
  )
}
