"use client"
import EpisodeList from "@/app/components/EpisodeList";
import { useParams } from "next/navigation";
import Artplayer from "@/app/components/Player";
import config from "@/app/config";
export default async function Player(){
    const {name,ep} = useParams();
    // const src = "https://player.tv"//get from api
    // const epinum = 12
    let d = await fetch(`${config.API_LIST.SEARCH_URL}${name}/${ep}`)
    .then(res=>res.json())
    if(d.length==0){
        return <Error h1="404呢" hints="走丢了呜呜..."><a
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light"
        href="/"
        role="button"
        >回到首页！</a
        ></Error>
    }

    return <>
        <h1>{decodeURI(name)}   第{ep}集</h1>
        <div className="flex">
            {/* <div className="flex basis-9/12 relative"> */}
                {/* <DPlayer className="" src={src}/> */}
                <Artplayer
                    option={{
                        url: d[0].videoinfo,
                        volume: 0.5,
                        isLive: false,
                        muted: false,
                        autoplay: false,
                        pip: true,
                        autoSize: true,
                        autoMini: true,
                        screenshot: true,
                        setting: true,
                        loop: true,
                        flip: true,
                        playbackRate: true,
                        aspectRatio: true,
                        fullscreen: true,
                        fullscreenWeb: true,
                        // subtitleOffset: true,
                        miniProgressBar: true,
                        mutex: true,
                        backdrop: true,
                        playsInline: true,
                        autoPlayback: true,
                        airplay: true,
                        theme: '#23ade5',
                        icons: {
                            loading: '<img src="/artplayer/ploading.svg"/>',
                            state: '<img width="150" heigth="150" src="/artplayer/state.svg">',
                            indicator: '<img width="16" heigth="16" src="/artplayer/indicator.svg">'
                        }
                    }}
                    className="flex xl:basis-9/12 md:w-full relative aspect-video"
                />
            {/* </div> */}
            <div className="flex xl:basis-3/12 md:!visible relative">
                <EpisodeList 
                className="sidebar" 
                //overflow-y-auto h-full bg-[#f1f2f3] rounded-lg p-[8em] absolute inset-0
                bothClassName="item"
                activeclassName="active"
                // inactiveclassName="mb-[8rem] py-[4px] px-[10px] rounded-lg block w-full overflow-hidden text-ellipsis break-all whitespace-nowrap cursor-pointer border-1 border-solid border-white" 
                // activeclassName="mb-[8rem] py-[4px] px-[10px] rounded-lg block w-full overflow-hidden text-ellipsis break-all whitespace-nowrap cursor-pointer border-1 border-solid border-white "
                />
            </div>
        </div>
        </>
}