"use client";
import { useParams,useRouter } from "next/navigation";
import { useEffect } from "react";
import config from '@/app/config';
export default () => {
    const { name } = useParams();
    const router = useRouter();
    useEffect(()=>{
        fetch(`${config.API_LIST.SEARCH_URL}${name}/all`)
        .then(res=>res.json())
        .then(d=>{
            router.push(`/bangumi/${name}/${d[0]}`);
        })
    },[]);
    return <div className="flex justify-center items-center h-screen">
    <div
className="mx-auto inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
role="status">
<span
    className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span
>
</div>
</div>
}