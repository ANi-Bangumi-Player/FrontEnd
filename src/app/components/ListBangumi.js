"use client";
import { useState,useEffect } from "react";
import Error from '@/app/utils/error';
export default function BangumiList(props){
    // const {data ,err,mutate} = useSWR(config.API_LIST.LIST_BANGUMI,fetcher);
    // const handleRefresh = () => {
    //     mutate();
    // }
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const fetchData = async () =>{
        try{
            const response = await fetch(props.listurl);
            const data = await response.json();
            setData(data);
            setLoading(false);
        }
        catch(error) {
            console.error("Failed to fetch.",error);
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchData();
    },[]);
    if(loading){
        return (<div id="bangumilist" class="mx-auto grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 container columns-2 gap-8">
            {
                Array(30).fill(0).map((o,p)=>(
                    
                    <div>
                        <img src="/placeholder.jpg" alt="placeholder"/>
                        <p
                            aria-hidden="true"
                            className="mb-4 text-base text-neutral-700 dark:text-white">
                            <span
                                className="inline-block min-h-[1em] w-6/12 flex-auto cursor-wait bg-current align-middle opacity-50">
                            </span>
                        </p>
                    </div>
                ))
            }
        </div>)
    }

    if (!data&&!loading) {
        return (<Error h1="加载失败惹qaq" hints="要再来一次吗" backIndex={false}><a
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                role="button"
                onClick={fetchData}
            >重新加载！</a
            ></Error>)
    }

    return (<div id="bangumilist" class="mx-auto grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 container columns-2 gap-8">
        {data.map((item,idx)=>(
            <a className="flex flex-col w-full" href={`/bangumi/${item.name}/1`}>
                <img src={`https://mikanani.me${item.cover}`} alt={item.name}/>
                <p className="mt-2">{item.name}</p>
            </a>
            
        ))}
        </div>)
}