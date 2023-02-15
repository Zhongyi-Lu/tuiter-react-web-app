const exploreItem = (item) => {
    return (`
        <div class="wd-sub-container-b">
        <div class="wd-image-box">
            <img class="wd-small-image"
                 src="${item.icon}">
        </div>


        <div class="wd-detail-tuit">
            <div class="wd-sub-box-b">
                <div>
                    <span class="wd-username-text">
                        ${item.userName}
                    </span>
                    <span>
                        <i class="fa-regular fa-circle-check"></i>
                    </span>
                    <span class="wd-userhandle-text">
                        @${item.handle} · ${item.time}
                    </span>

                    <div class="wd-three-dots">
                        <svg fill="rgb(111, 120, 128)" height="12px" width="12px" version="1.1" id="Capa_1"
                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                             viewBox="0 0 32.055 32.055" xml:space="preserve">
                            <g>
                                <path d="M3.968,12.061C1.775,12.061,0,13.835,0,16.027c0,2.192,1.773,3.967,3.968,3.967c2.189,0,3.966-1.772,3.966-3.967
                                    C7.934,13.835,6.157,12.061,3.968,12.061z M16.233,12.061c-2.188,0-3.968,1.773-3.968,3.965c0,2.192,1.778,3.967,3.968,3.967
                                    s3.97-1.772,3.97-3.967C20.201,13.835,18.423,12.061,16.233,12.061z M28.09,12.061c-2.192,0-3.969,1.774-3.969,3.967
                                    c0,2.19,1.774,3.965,3.969,3.965c2.188,0,3.965-1.772,3.965-3.965S30.278,12.061,28.09,12.061z"/>
                            </g>
                        </svg>
                    </div>
                    <div class="wd-message-body">
                        ${item.tuitBody}
                    </div>
                </div>

            </div>

            <div class="wd-sub-container-b2">
                <img class="wd-large-image" src="${item.largeImage}" width="504" height="264" style="display: block">


                ${item.imageTitle !== undefined ?`
                    <div class="wd-image-after-title-box">
                        <div class="wd-image-title-box">
                            ${item.imageTitle !== undefined ? `
                                <div class="wd-image-title-text">
                                        ${item.imageTitle}
                                    </div>
                                    ` : `<div></div>`
                        }
            
            
                            ${item.imageBody !== undefined ?
                            `<div 
                                            className="wd-image-title-text-gray">
                                            ${item.imageBody}
                                        </div>` : `<div></div>`
            
                        }
            
            
                            ${item.website !== undefined ? `
                                        <div class="wd-image-title-text-gray">
                                            <span><i class="fa-solid fa-link"></i></span>
                                            ${item.website}
                                        </div>
                                        ` : `<div></div>`
            
                        }
                        </div>
            
                    </div>
                    `:`<div></div>`
                }
            </div>

            <div class="wd-counter-container">
                <div class="wd-counter-box">
                    <svg fill="rgb(111, 120, 128)" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                         class="bi bi-chat" viewBox="0 0 16 16">
                        <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                    </svg>
                    <div class="wd-counter-text">
                        ${item.reply}
                    </div>
                </div>

                <div class="wd-counter-box">
                    <svg width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"
                         stroke-width="3" stroke="rgb(111, 120, 128)" fill="none">
                        <path d="M52.94,42.93V18.3a5.54,5.54,0,0,0-5.54-5.54H11.83"/>
                        <path d="M11.83,20.14V44.77a5.54,5.54,0,0,0,5.54,5.54H52.94"/>
                        <polyline points="4.15 26.39 12.09 20.14 19.51 26.88"/>
                        <polyline points="60.36 36.12 52.91 42.94 45 36.76"/>
                    </svg>

                    <div class="wd-counter-text">
                        ${item.retweet}
                    </div>
                </div>

                <div class="wd-counter-box">

                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.7692 6.70483C9.53846 2.01902 4 3.90245 4 8.68256C4 13.4627 13.2308 20 13.2308 20C13.2308 20 22 13.2003 22 8.68256C22 4.16479 16.9231 2.01903 13.6923 6.70483L13.2308 7.0791L12.7692 6.70483Z"
                              fill="rgb(224,37,94)" stroke="rgb(224,37,94)" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                    <div class="wd-counter-text">
                        ${item.like}
                    </div>
                </div>

                <div class="wd-counter-box">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 6L12 3M12 3L9 6M12 3V15M16 10H17C18.1046 10 19 10.8954 19 12V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V12C5 10.8954 5.89543 10 7 10H8"
                              stroke="rgb(111, 120, 128)" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </div>

            </div>
        </div>

    </div>
    `);
}

export default exploreItem;
