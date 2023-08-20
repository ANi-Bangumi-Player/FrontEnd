import App from "next/app";
import config from "@/app/config";
import Layout from "@/app/layout";
class FetchIntercepter extends App {
    componentDidMount() {
        console.log("Yahoo!")
        const idx = 0;
        const getNextUrl = () => {
            return ++idx >= config.VIDEO_PLAYER.REPLACE_HOST_LIST.length ? 
            config.VIDEO_PLAYER.REPLACE_HOST_LIST[idx]:
            config.VIDEO_PLAYER.REPLACE_HOST_LIST[idx=0];
        }
        window.addEventListener('fetch',(event)=>{
            const url = new URL(event.request.url);
            console.log(url.hostname);
            if(url.hostname === config.VIDEO_PLAYER.SOURCE_HOST){
                const targetUrl = getNextUrl();
                return fetch(`${targetUrl}${url.pathname}`,{
                    ...event.request
                })
            }
            else {
                return fetch(event.request,{
                    ...event.request
                });
            }
        })
    }
    render({Component,pageProps}) {
        return (
            <Layout>
                1
                <Component {...pageProps}/>
            </Layout>
        )
    }
}