self.addEventListener("install",(e)=>{
    console.log("Registered!!");
})
self.addEventListener("activate",(e)=>{
    console.log("Activated!")
})

self.addEventListener('fetch',(e)=>{
    async function handleResponse(req){
        const VIDEO_PLAYER = {
            SOURCE_HOST: "player.tv",
            REPLACE_HOST_LIST: [
                "1.player.tv",
                "2.player.tv",
                "3.player.tv",
                "4.player.tv"
            ]
        }
        const getNextUrl = () => {
            const len = VIDEO.REPLACE_HOST_LIST.length;
            return VIDEO_PLAYER.REPLACE_HOST_LIST[(new Date().getTime())%len];
        }
        console.log("Detected Fetch Event!");
        let url = new URL(req.url);
        if(url.hostname == VIDEO_PLAYER.SOURCE_HOST){
            return fetch(getNextUrl,{
                ...req
            });
        }
        return fetch(req);
    }
    e.respondWith(handleResponse(e.request));

})