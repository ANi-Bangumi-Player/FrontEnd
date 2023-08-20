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
    return <div className="box-border overflow-y-auto h-full bg-gray-300 rounded-lg px-8 relative ">{
        Array(props.number).fill(114514).map((val,idx)=>(
            <button
                type="button"
                aria-current="true"
                className={
                    `mb-[8em] pt-4 pr-10 pb-4 pl-10 block w-full overflow-hidden break-all text-ellipsis whitespace-nowrap cursor-pointer border-[1px] box-border bg-light-50`
                }
                // {id==idx+1?
                //     "bg-primary-100 text-primary-600"
                //     :
                //     transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"}
                // flex rounded-lg bg-primary px-10 gap-5 pb-2 pt-2.5 text-xs text-white 
                onClick={switchRoute}
                id={idx+1}
            >{idx+1}</button>
        ))
    }</div>
}