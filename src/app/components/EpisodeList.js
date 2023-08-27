"use client";
import { useRouter,useParams } from "next/navigation";
import config from '@/app/config';
export default async function EpisodeList(props){
    const router = useRouter();
    const {name,ep} = useParams();
    const data = await fetch(`${config.API_LIST.SEARCH_URL}${name}/all`).then(res=>res.json());
    const switchRoute = (event)=>{
        if(event.target.id!=ep){
            // console.log(event.target.id)
            router.push(`/bangumi/${name}/${event.target.id}`);
        }
    }
    return <div className={props.className}>
    {

    data.map((val,idx)=>(
    <span
        type="button"
        aria-current="true"
        className={
            `${val==ep?props.activeclassName:""} ${props.bothClassName}`
        }
        onClick={switchRoute}
        id={val}
    >{val}</span>
))
}
</div>
}