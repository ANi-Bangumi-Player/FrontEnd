import { useEffect,useState } from "react";
export default function LazyImg(props){
    const [isLoading,setIsLoading] = useState(true);
    const [imageSrc,setImageSrc] = useState('');
    useEffect(()=>{
        const loadImage = async() => {
            try{
                const response = await fetch(props.src,{
                    mode: "no-cors"
                });
                // const blob = await response.blob();
                // const objUrl = URL.createObjectURL(blob);
                setImageSrc(props.src);
                setIsLoading(false);
            }
            catch(error){
                console.log(error);
            }
        }
        loadImage();
        return ()=>{
            // URL.revokeObjectURL(imageSrc);
        }
    },[props.src]);
    if(isLoading){
        return <img src="/placeholder.jpg" alt="Loading"/>
    }
    return <img src={imageSrc} alt="LoadedImage"/>
}