self.addEventListener("install",(e)=>{
    console.log("Registered!!");
})
const VIDEO_PLAYER = {
    SOURCE_HOST: "player.tv",
    REPLACE_HOST_LIST: [
        "1",
        "2",
        "3",
        "4"
    ]
}
let idx = 0;
const getNextUrl = () => {
    const len = VIDEO.REPLACE_HOST_LIST.length;
    return VIDEO_PLAYER.REPLACE_HOST_LIST[(++idx)%len];
}
self.addEventListener('fetch',(e)=>{
    console.log("Detected Fetch Event!");
    let url = new URL(e.request.url);
    if(url.hostname == VIDEO_PLAYER.SOURCE_HOST){
        return fetch(getNextUrl,{
            ...e.request
        });
    }
    return fetch(e.request);
})