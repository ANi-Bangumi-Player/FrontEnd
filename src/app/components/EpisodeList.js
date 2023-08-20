"use client";
import { useRouter,useParams } from "next/navigation";
export default function EpisodeList(props){
    const router = useRouter();
    const {name,id} = useParams();
    const switchRoute = (event)=>{
        if(event.target.id!=id){
            router.push(`/bangumi/${name}/${event.target.id}`);
        }
    }
    return <div className={props.className}>
    {

    Array(props.number).fill(114514).map((val,idx)=>(
    <span
        type="button"
        aria-current="true"
        className={
            `${idx+1==id?props.activeclassName:""} ${props.bothClassName}`
        }
        onClick={switchRoute}
        id={idx+1}
    >{idx+1}</span>
))
}
</div>
}