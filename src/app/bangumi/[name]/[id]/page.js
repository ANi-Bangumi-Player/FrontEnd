"use client"
import EpisodeList from "@/app/components/EpisodeList";
import { useParams } from "next/navigation";
import Artplayer from "@/app/components/Player";
export default function Player(){
    const {name,id} = useParams();
    const src = "https://player.tv"//get from api
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
                            loading: '<img src="/artplayer/ploading.svg"/>',
                            state: '<img width="150" heigth="150" src="/artplayer/state.svg">',
                            indicator: '<img width="16" heigth="16" src="/artplayer/indicator.svg">'
                        }
                    }}
                    className="flex xl:basis-9/12 md:w-full relative aspect-video"
                />
            {/* </div> */}
            <div className="flex xl:basis-3/12 md:!visible relative">
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