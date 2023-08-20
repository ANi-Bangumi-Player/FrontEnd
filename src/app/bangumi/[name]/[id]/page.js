"use client"
import EpisodeList from "@/app/components/EpisodeList";
import { useParams } from "next/navigation";
// import { Player as DPlayer } from "rc-dplayer";
import Artplayer from "@/app/components/Player";
export default function Player(){
    const {name,id} = useParams();
    const src = "https://aniopen.an-i.workers.dev/2023-7/%5BANi%5D%20%E7%A5%9E%E5%8A%8D%E9%97%96%E6%B1%9F%E6%B9%96%20%E2%80%95%E6%98%8E%E6%B2%BB%E5%8A%8D%E5%AE%A2%E6%B5%AA%E6%BC%AB%E8%AD%9A%E2%80%95%20-%2007%20%5B1080P%5D%5BBaha%5D%5BWEB-DL%5D%5BAAC%20AVC%5D%5BCHT%5D.mp4"//get from api
    const epinum = 12
    return <>
        <h1>{decodeURI(name)}   第{id}集</h1>
        <div className="flex">
            {/* <div className="flex basis-9/12 relative"> */}
                {/* <DPlayer className="" src={src}/> */}
                <Artplayer
                    option={{
                        url: src,
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
                            loading: '<img src="/artplayer/ploading.gif"/>',
                            state: '<img width="150" heigth="150" src="/artplayer/state.svg">',
                            indicator: '<img width="16" heigth="16" src="/artplayer/indicator.svg">'
                        }
                    }}
                    className="flex basis-9/12 relative aspect-video"
                />
            {/* </div> */}
            <div className="flex basis-3/12 relative">
                <EpisodeList number={epinum} now={id} 
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