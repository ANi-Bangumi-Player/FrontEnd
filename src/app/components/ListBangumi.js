"use client";
import { useState,useEffect } from "react";
import Error from '@/app/utils/error';
import LazyImg from "@/app/components/LazyImg.js";
import { useRouter } from "next/navigation";
import { setConfig } from "next/config";
export default function BangumiList(props){
    // console.log(props);
    const [currentPage,setcurrentPage] = useState(props.pageId);
    const itemPerPage = 18;
    // const data = props.data;
    const totalPage = Math.ceil(props.data.length/itemPerPage);
    const changeParams = (pageId) => {
        history.replaceState(null,document.title,`/?p=${pageId}${props.query!=""?`&q=${props.query}`:``}`)
    }
    const handlePagenation = (event) =>{
        setcurrentPage(event.target.innerHTML);
        changeParams(event.target.innerHTML);
    }
    const handlePrev = (event)=>{
        setcurrentPage(currentPage-1==0?1:currentPage-1);
        changeParams(currentPage-1==0?1:currentPage-1);
    }
    const handleNext = (event)=>{
        setcurrentPage(currentPage==totalPage?1:currentPage+1);
        changeParams(currentPage==totalPage?1:currentPage+1);
    }
    const router = useRouter();
    
    if(props.loading){
        return (<div id="bangumilist" className="mx-auto grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 container columns-2 gap-8">
            {
                Array(20).fill(0).map((o,p)=>(
                    
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

    if ((!props.data&&!props.loading)|| (props.data.length==0&&!props.loading)) {
        return (<Error h1="没找到呢？" hints="看看是不是输错了" backIndex={false}><a
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                role="button"
                onClick={()=>{router.push("/")}}
            >返回主页！</a
            ></Error>)
    }
    const renderBangumiList = ()=>{
        const startIdx = (currentPage-1)*itemPerPage;
        const endIdx = startIdx+itemPerPage;
        let currentItem = props.data.slice(startIdx,endIdx);
        if(currentItem.length==0){
            setcurrentPage(1);
            changeParams(1);
            const startIdx = (0)*itemPerPage;
            const endIdx = 0+itemPerPage;
            currentItem = props.data.slice(startIdx,endIdx);
        }
        return currentItem.map((item,idx)=>(
            <a className="flex flex-col w-full" href={`/bangumi/${item.name}/`}>
                <LazyImg src={`${item.picture}`} alt={item.name}/>
                <p className="mt-2">{item.name}</p>
            </a>
            
        ))
    }
    return (<div>
            <div id="bangumilist" className="mx-auto grid xl:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 container columns-2 gap-8">
                {renderBangumiList()}
            </div>
            <nav aria-label="Page navigation" className="items-center justify-center mx-auto">
            <ul className="list-style-none flex items-center justify-center mx-auto ">
                <li>
                    <a className={`relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300 ${currentPage==1?"pointer-events-none  text-neutral-500 dark:text-neutral-400":"text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"}`}
                        aria-label="Previous"
                        onClick={currentPage==1?null:handlePrev}
                    >
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {Array(totalPage).fill(114514).map((o,p)=>(
                    <li key={p+1} 
                    >
                        <p
                    className={`cursor-pointer relative block rounded  px-3 py-1.5 text-sm  ${currentPage==p+1?"bg-primary-100 font-medium text-primary-700":"bg-transparent text-neutral-600 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"}`}
                        key={p+1}
                        onClick={handlePagenation}
                        >{p+1}</p
                    >
                    </li>
                ))}
                <li>
                    <a className={`relative block rounded bg-transparent px-3 py-1.5 text-sm transition-all duration-300 ${currentPage==totalPage?"pointer-events-none  text-neutral-500 dark:text-neutral-400":"text-neutral-600 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"}`}
                        aria-label="Next"
                        onClick={currentPage==totalPage?null:handleNext}
                    >
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
        </div>)
}