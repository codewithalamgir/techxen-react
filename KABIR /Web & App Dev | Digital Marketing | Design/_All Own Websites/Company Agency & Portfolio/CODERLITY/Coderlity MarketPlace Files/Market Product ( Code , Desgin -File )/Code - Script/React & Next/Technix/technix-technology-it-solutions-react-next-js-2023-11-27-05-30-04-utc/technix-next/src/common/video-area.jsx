import VideoPopup from "@/src/modals/video-popup";
import { useState } from "react";

import video_img from "@assets/img/others/video-img.jpg";
import Image from "next/image";

const VideoArea = ({service})  => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <div className={`tp-video-area ${service ? "pt-105" : "pt-50"}`}>
                <div className="container-fluid gx-0">
                    <div className="row gx-0">
                    <div className="col-xl-12">
                        <div className="tp-video-breadcrumb p-relative">
                            <Image src={video_img} alt="theme-pure" />
                            <div className="tp-video-play text-center">
                                <a className="popup-video" 
                                onClick={() => setIsVideoOpen(true)}  
                                ><i className="fa-sharp fa-solid fa-play"></i></a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
             {/* video modal start */}
            <VideoPopup
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"dGcsHMXbSOA"}
            />
            {/* video modal end */}
    </>
    )

}
export default VideoArea;