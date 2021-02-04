import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser}) => {
    const authRoute = (currentUser) ? "/hives/1" : "/login";

    return (
        <div className="grid-3Ykf_K heroBackground-3m0TRU">
            <div className="row-3wW-Fx header-Y5-yn4 colorSchemeWhite-33VuSr">
                <header className="wrapper-vInhSw wrapperMobile-3gWL2X">
                    <nav className="nav-IGyg0q">
                        <a className="link-1bIkeG logoLink-38lqtu" aria-label="Home" href="/">
                            <svg width="124" height="34" viewBox="0 0 124 34" className="logo-3LF899">
                            <g fill="currentColor">
                                <path d="M18.1558 14.297C17.1868 14.297 16.4218 15.13 16.4218 16.167C16.4218 17.204 17.2038 18.037 18.1558 18.037C19.1248 18.037 19.8898 17.204 19.8898 16.167C19.8898 15.13 19.1078 14.297 18.1558 14.297ZM11.9508 14.297C10.9818 14.297 10.2168 15.13 10.2168 16.167C10.2168 17.204 10.9988 18.037 11.9508 18.037C12.9198 18.037 13.6848 17.204 13.6848 16.167C13.7018 15.13 12.9198 14.297 11.9508 14.297Z"></path>
                                <path d="M26.4178 0.152954H3.63783C1.71683 0.152954 0.152832 1.71695 0.152832 3.63795V26.418C0.152832 28.339 1.71683 29.903 3.63783 29.903H22.9158L22.0148 26.792L24.1908 28.798L26.2478 30.685L29.9198 33.864V3.63795C29.9028 1.71695 28.3388 0.152954 26.4178 0.152954ZM19.8558 22.168C19.8558 22.168 19.2438 21.437 18.7338 20.808C20.9608 20.179 21.8108 18.802 21.8108 18.802C21.1138 19.261 20.4508 19.584 19.8558 19.805C19.0058 20.162 18.1898 20.383 17.3908 20.536C15.7588 20.842 14.2628 20.757 12.9878 20.519C12.0188 20.332 11.1858 20.077 10.4888 19.788C10.0978 19.635 9.67283 19.448 9.24783 19.21C9.19683 19.176 9.14583 19.159 9.09483 19.125C9.06083 19.108 9.04383 19.091 9.02683 19.091C8.72083 18.921 8.55083 18.802 8.55083 18.802C8.55083 18.802 9.36683 20.145 11.5258 20.791C11.0158 21.437 10.3868 22.185 10.3868 22.185C6.62983 22.066 5.20183 19.618 5.20183 19.618C5.20183 14.195 7.64983 9.79195 7.64983 9.79195C10.0978 7.97295 12.4098 8.02395 12.4098 8.02395L12.5798 8.22795C9.51983 9.09495 8.12583 10.438 8.12583 10.438C8.12583 10.438 8.49983 10.234 9.12883 9.96195C10.9478 9.16295 12.3928 8.95895 12.9878 8.89095C13.0898 8.87395 13.1748 8.85695 13.2768 8.85695C14.3138 8.72095 15.4868 8.68695 16.7108 8.82295C18.3258 9.00995 20.0598 9.48595 21.8278 10.438C21.8278 10.438 20.4848 9.16295 17.5948 8.29595L17.8328 8.02395C17.8328 8.02395 20.1618 7.97295 22.5928 9.79195C22.5928 9.79195 25.0408 14.195 25.0408 19.618C25.0408 19.601 23.6128 22.049 19.8558 22.168ZM45.5258 7.42895H39.8818V13.77L43.6388 17.153V10.999H45.6448C46.9198 10.999 47.5488 11.611 47.5488 12.597V17.306C47.5488 18.292 46.9538 18.955 45.6448 18.955H39.8648V22.542H45.5088C48.5348 22.559 51.3738 21.046 51.3738 17.578V12.512C51.3908 8.97595 48.5518 7.42895 45.5258 7.42895ZM75.1058 17.578V12.376C75.1058 10.506 78.4718 10.081 79.4918 11.951L82.6028 10.693C81.3788 8.00695 79.1518 7.22495 77.2988 7.22495C74.2728 7.22495 71.2808 8.97595 71.2808 12.376V17.578C71.2808 21.012 74.2728 22.729 77.2308 22.729C79.1348 22.729 81.4128 21.794 82.6708 19.346L79.3388 17.816C78.5228 19.907 75.1058 19.397 75.1058 17.578ZM64.8208 13.09C63.6478 12.835 62.8658 12.41 62.8148 11.679C62.8828 9.92795 65.5858 9.85995 67.1668 11.543L69.6658 9.62195C68.1018 7.71795 66.3338 7.20795 64.5148 7.20795C61.7438 7.20795 59.0578 8.77195 59.0578 11.73C59.0578 14.603 61.2678 16.15 63.6988 16.524C64.9398 16.694 66.3168 17.187 66.2828 18.037C66.1808 19.652 62.8488 19.567 61.3358 17.731L58.9218 19.992C60.3328 21.811 62.2538 22.729 64.0558 22.729C66.8268 22.729 69.9038 21.131 70.0228 18.207C70.1928 14.518 67.5068 13.583 64.8208 13.09ZM53.4308 22.525H57.2388V7.42895H53.4308V22.525ZM117.64 7.42895H111.996V13.77L115.753 17.153V10.999H117.759C119.034 10.999 119.663 11.611 119.663 12.597V17.306C119.663 18.292 119.068 18.955 117.759 18.955H111.979V22.542H117.64C120.666 22.559 123.505 21.046 123.505 17.578V12.512C123.505 8.97595 120.666 7.42895 117.64 7.42895ZM89.9468 7.22495C86.8188 7.22495 83.7078 8.92495 83.7078 12.41V17.561C83.7078 21.012 86.8358 22.746 89.9808 22.746C93.1088 22.746 96.2198 21.012 96.2198 17.561V12.41C96.2198 8.94195 93.0748 7.22495 89.9468 7.22495ZM92.3948 17.561C92.3948 18.649 91.1708 19.21 89.9638 19.21C88.7398 19.21 87.5158 18.683 87.5158 17.561V12.41C87.5158 11.305 88.7058 10.71 89.8958 10.71C91.1368 10.71 92.3948 11.237 92.3948 12.41V17.561ZM109.888 12.41C109.803 8.87395 107.389 7.44595 104.278 7.44595H98.2428V22.542H102.102V17.748H102.782L106.284 22.542H111.044L106.93 17.357C108.749 16.779 109.888 15.198 109.888 12.41ZM104.346 14.45H102.102V10.999H104.346C106.743 10.999 106.743 14.45 104.346 14.45Z"></path>
                            </g>
                            </svg>
                        </a>
                        <div className="mobileButtonContainer-3I8xXw">

                            {/* <a className="button-195cDm buttonWhite-18r1SC buttonSmall-2bnF7I gtm-click-class-login-button button-1x6X9g mobileAppButton-2dMGaq" href="//discord.com/login">Open buzzhive</a> */}
                            <Link className="button-195cDm buttonWhite-18r1SC buttonSmall-2bnF7I gtm-click-class-login-button button-1x6X9g mobileAppButton-2dMGaq" to={authRoute}>Open buzzhive</Link>
                            <button className="menuIcon-3UgAfy" aria-hidden="false">
                            <svg width="40" height="40" viewBox="0 0 40 40">
                                <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M33.3327 10H6.66602V15H33.3327V10ZM6.66602 18.3317H33.3327V23.3317H6.66602V18.3317ZM6.66602 26.665H33.3327V31.665H6.66602V26.665Z"></path>
                            </svg>
                            </button>
                        </div>
                    </nav>
                </header>
                <header className="wrapper-vInhSw wrapperDesktop-1VrZRb">
                    <nav className="nav-IGyg0q">
                        <a className="link-1bIkeG logoLink-38lqtu" aria-label="Home" href="/">
                            <svg width="124" height="34" viewBox="0 0 124 34" className="logo-3LF899">
                            <g fill="currentColor">
                                <path d="M18.1558 14.297C17.1868 14.297 16.4218 15.13 16.4218 16.167C16.4218 17.204 17.2038 18.037 18.1558 18.037C19.1248 18.037 19.8898 17.204 19.8898 16.167C19.8898 15.13 19.1078 14.297 18.1558 14.297ZM11.9508 14.297C10.9818 14.297 10.2168 15.13 10.2168 16.167C10.2168 17.204 10.9988 18.037 11.9508 18.037C12.9198 18.037 13.6848 17.204 13.6848 16.167C13.7018 15.13 12.9198 14.297 11.9508 14.297Z"></path>
                                <path d="M26.4178 0.152954H3.63783C1.71683 0.152954 0.152832 1.71695 0.152832 3.63795V26.418C0.152832 28.339 1.71683 29.903 3.63783 29.903H22.9158L22.0148 26.792L24.1908 28.798L26.2478 30.685L29.9198 33.864V3.63795C29.9028 1.71695 28.3388 0.152954 26.4178 0.152954ZM19.8558 22.168C19.8558 22.168 19.2438 21.437 18.7338 20.808C20.9608 20.179 21.8108 18.802 21.8108 18.802C21.1138 19.261 20.4508 19.584 19.8558 19.805C19.0058 20.162 18.1898 20.383 17.3908 20.536C15.7588 20.842 14.2628 20.757 12.9878 20.519C12.0188 20.332 11.1858 20.077 10.4888 19.788C10.0978 19.635 9.67283 19.448 9.24783 19.21C9.19683 19.176 9.14583 19.159 9.09483 19.125C9.06083 19.108 9.04383 19.091 9.02683 19.091C8.72083 18.921 8.55083 18.802 8.55083 18.802C8.55083 18.802 9.36683 20.145 11.5258 20.791C11.0158 21.437 10.3868 22.185 10.3868 22.185C6.62983 22.066 5.20183 19.618 5.20183 19.618C5.20183 14.195 7.64983 9.79195 7.64983 9.79195C10.0978 7.97295 12.4098 8.02395 12.4098 8.02395L12.5798 8.22795C9.51983 9.09495 8.12583 10.438 8.12583 10.438C8.12583 10.438 8.49983 10.234 9.12883 9.96195C10.9478 9.16295 12.3928 8.95895 12.9878 8.89095C13.0898 8.87395 13.1748 8.85695 13.2768 8.85695C14.3138 8.72095 15.4868 8.68695 16.7108 8.82295C18.3258 9.00995 20.0598 9.48595 21.8278 10.438C21.8278 10.438 20.4848 9.16295 17.5948 8.29595L17.8328 8.02395C17.8328 8.02395 20.1618 7.97295 22.5928 9.79195C22.5928 9.79195 25.0408 14.195 25.0408 19.618C25.0408 19.601 23.6128 22.049 19.8558 22.168ZM45.5258 7.42895H39.8818V13.77L43.6388 17.153V10.999H45.6448C46.9198 10.999 47.5488 11.611 47.5488 12.597V17.306C47.5488 18.292 46.9538 18.955 45.6448 18.955H39.8648V22.542H45.5088C48.5348 22.559 51.3738 21.046 51.3738 17.578V12.512C51.3908 8.97595 48.5518 7.42895 45.5258 7.42895ZM75.1058 17.578V12.376C75.1058 10.506 78.4718 10.081 79.4918 11.951L82.6028 10.693C81.3788 8.00695 79.1518 7.22495 77.2988 7.22495C74.2728 7.22495 71.2808 8.97595 71.2808 12.376V17.578C71.2808 21.012 74.2728 22.729 77.2308 22.729C79.1348 22.729 81.4128 21.794 82.6708 19.346L79.3388 17.816C78.5228 19.907 75.1058 19.397 75.1058 17.578ZM64.8208 13.09C63.6478 12.835 62.8658 12.41 62.8148 11.679C62.8828 9.92795 65.5858 9.85995 67.1668 11.543L69.6658 9.62195C68.1018 7.71795 66.3338 7.20795 64.5148 7.20795C61.7438 7.20795 59.0578 8.77195 59.0578 11.73C59.0578 14.603 61.2678 16.15 63.6988 16.524C64.9398 16.694 66.3168 17.187 66.2828 18.037C66.1808 19.652 62.8488 19.567 61.3358 17.731L58.9218 19.992C60.3328 21.811 62.2538 22.729 64.0558 22.729C66.8268 22.729 69.9038 21.131 70.0228 18.207C70.1928 14.518 67.5068 13.583 64.8208 13.09ZM53.4308 22.525H57.2388V7.42895H53.4308V22.525ZM117.64 7.42895H111.996V13.77L115.753 17.153V10.999H117.759C119.034 10.999 119.663 11.611 119.663 12.597V17.306C119.663 18.292 119.068 18.955 117.759 18.955H111.979V22.542H117.64C120.666 22.559 123.505 21.046 123.505 17.578V12.512C123.505 8.97595 120.666 7.42895 117.64 7.42895ZM89.9468 7.22495C86.8188 7.22495 83.7078 8.92495 83.7078 12.41V17.561C83.7078 21.012 86.8358 22.746 89.9808 22.746C93.1088 22.746 96.2198 21.012 96.2198 17.561V12.41C96.2198 8.94195 93.0748 7.22495 89.9468 7.22495ZM92.3948 17.561C92.3948 18.649 91.1708 19.21 89.9638 19.21C88.7398 19.21 87.5158 18.683 87.5158 17.561V12.41C87.5158 11.305 88.7058 10.71 89.8958 10.71C91.1368 10.71 92.3948 11.237 92.3948 12.41V17.561ZM109.888 12.41C109.803 8.87395 107.389 7.44595 104.278 7.44595H98.2428V22.542H102.102V17.748H102.782L106.284 22.542H111.044L106.93 17.357C108.749 16.779 109.888 15.198 109.888 12.41ZM104.346 14.45H102.102V10.999H104.346C106.743 10.999 106.743 14.45 104.346 14.45Z"></path>
                            </g>
                            </svg>
                        </a>
                        <div className="links-10hR8L"><a className="link-1bIkeG link-oDO0Ir" href="#">Download</a><a className="link-1bIkeG link-oDO0Ir" href="#">Why buzzhive?</a><a className="link-1bIkeG link-oDO0Ir" href="#">Nitro</a><a className="link-1bIkeG link-oDO0Ir" href="#">Safety</a><a className="link-1bIkeG link-oDO0Ir" href="#">Support</a></div>
                        <div className="appButton-2wSXh-">
                            {/* <a className="button-195cDm buttonWhite-18r1SC buttonSmall-2bnF7I gtm-click-class-login-button button-1x6X9g" href="//discord.com/login">Open buzzhive</a> */}
                            <Link className="button-195cDm buttonWhite-18r1SC buttonSmall-2bnF7I gtm-click-class-login-button button-1x6X9g" to={authRoute}>Open buzzhive</Link>
                        </div>
                    </nav>
                </header>
            </div>

            <div className="row-3wW-Fx heroContainer-3j1eQg">
                <div className="heroBody-3b6R3c">
                    <div className="heroText-Sc7-zG">
                        <h1 className="h1-1JG5Bw">Your place to talk</h1>
                        <div className="text-3U-SDd textMedium-1DcD2z heroSubtitle-32Iz6d">Whether you’re part of a school club, gaming group, worldwide art community, or just a handful of friends that want to spend time together, buzzhive makes it easy to talk every day and hang out more often.</div>
                    </div>
                    <div className="ctaContainer-3vWJHU">
                        <a className="button-195cDm buttonWhite-18r1SC buttonLarge-2j8B-n downloadButton-111eh6 twoButtons-3Bk8eU">
                            <svg width="24" height="24" viewBox="0 0 24 24" className="icon-nuGd5b">
                            <g fill="currentColor">
                                <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                                <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
                            </g>
                            </svg>
                            Download
                        </a>
                        <Link to="/login"><button className="button-195cDm buttonDark-1kG4vN buttonLarge-2j8B-n gtm-click-class-open-button openButton-McADyK">Open buzzhive in your browser</button></Link>
                    </div>
                </div>
            </div>

            <div aria-hidden="true" className="heroImageContainer-36P5yd">
                <img alt="firstElement.png" className="backgroundImages-2rUazg stripe1-3BXB_U" src={window.firstElement}/>
                <img alt="secondElement.png" className="backgroundImages-2rUazg stripe2-8Dj-R4" src={window.secondElement}></img>
                <img alt="thirdElement.png" className="backgroundImages-2rUazg stripe3-2NZ4zi" src={window.thirdElement}></img>
                <img alt="fourthElement.png" className="backgroundImages-2rUazg stripeCute-2yWHX7" src={window.fourthElement}></img>
                <img alt="fifthElement.png" className="backgroundImages-2rUazg island2-2Nb-g5" src={window.fifthElement}></img>
                <img alt="sixthElement.png" className="backgroundImages-2rUazg island1-3TIhuh" src={window.sixthElement}></img>
                <img alt="seventhElement.png" className="backgroundImages-2rUazg cloud4-2BRRU2" src={window.seventhElement}></img>
                <img alt="eigthElement.png" className="backgroundImages-2rUazg cloud5-34_2QW" src={window.eigthElement}></img>
                <img alt="ninthElement.png" className="backgroundImages-2rUazg cloud2Second-Gbh2WA" src={window.ninthElement}></img>
                <img alt="eleventhElement.png" className="backgroundImages-2rUazg cloud1-1oi7Jg" src={window.eleventhElement}></img>
                <img alt="twelthElement png" className="backgroundImages-2rUazg cloud2-2ngq2N" src={window.twelthElement}></img>
                <img alt="thirteenthElement.png" className="backgroundImages-2rUazg cloud3-3IZheo" src={window.thirteenthElement}></img>
                <img alt="fourteenthElement.png" className="backgroundImages-2rUazg cloud6-j2xFjt" src={window.fourteenthElement}></img>
                <img alt="fifteenthElement.png" className="backgroundImages-2rUazg cloud7-29FdT1" src={window.fifteenthElement}></img>
                <img alt="sixteenthElement.png" className="backgroundImages-2rUazg cloud9-16dNGB" src={window.sixteenthElement}></img>
                <img alt="seventeenthElement.png" className="backgroundImages-2rUazg diamond-2IoVJv" src={window.seventeenthElement}></img>
                <img alt="eighteenthElement.png" className="backgroundImages-2rUazg ship-2AEkqt" src={window.eighteenthElement}></img>
                <img alt="nineteenthElement.png" className="backgroundImages-2rUazg cloudCute-s1ak5z" src={window.nineteenthElement}></img>
                <img alt="twentiethElement.png" className="backgroundImages-2rUazg cloud8-3V2ZT2" src={window.twentiethElement}></img>
                <img alt="twentyfirstElement.png" className="backgroundImages-2rUazg cloud10-3dZ5jP" src={window.twentyfirstElement}></img>
                <img alt="twentysecondElement.png" className="backgroundBuildings-1dpPv_" src={window.twentysecondElement}></img>
                <img alt="twentythirdElement.png" className="foregroundLeft-oYeoOv" src={window.twentythirdElement}></img>
                <img alt="twentyfourthElement.png" className="foregroundRight-31UKnq" src={window.twentyfourthElement}></img>
            </div>
        </div>
    );
};
