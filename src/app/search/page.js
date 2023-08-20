"use client";
import BangumiList from "../components/listBangumi";
import {useSearchParams} from "next/navigation";
import Error from "../utils/error";
import config from "../config";
export default function Search(){
    // const router = useRouter();
    // router
    const searchParams = useSearchParams();
    const q = searchParams.get("q");
    if(!q){
        return <Error h1="喂喂喂这里是搜索页！" hints="好歹搜点东西吧？"><a
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light"
        href="/"
        role="button"
    >回到首页！</a
    ></Error>
    }
    return <BangumiList listurl={`${config.API_LIST.SEARCH_URL}${q}`}></BangumiList>
}