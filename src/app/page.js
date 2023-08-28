"use client"
import BangumiList from '@/app/components/ListBangumi'
import config from '@/app/config';
import { useParams, useSearchParams } from 'next/navigation';
import { useState,useEffect } from 'react';
import {useRouter} from 'next/navigation';
export default function Home() {
  const [data,setData] = useState([]);
  const sParams = useSearchParams();
  const pageId = sParams.get("p") || 1;
  const [loading,setLoading] = useState(true);
  // const [q,setQ] = useState(sParams.get("q")|| "")
  const q = sParams.get("q") || "";
  const router = useRouter();
  const fetchData = async () =>{
    try{
        const response = await fetch(config.API_LIST.SEARCH_URL+q);
        const data = await response.json();
        setData(data);
        setLoading(false);
        // settotalPage(Math.ceil(data.length / itemPerPage));
    } catch(error) {
        console.error("Failed to fetch.",error);
        setLoading(false);
    }
  }
  
  useEffect(()=>{
    fetchData();
  },[q]);
  return (<>
  <BangumiList data={data} query={q} pageId={pageId} loading={loading}/>
  </>
  )
}
