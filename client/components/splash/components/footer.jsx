import React from 'react';
import { Link } from 'react-router-dom';

export default ({currentUser}) => {
    const authRoute = (currentUser) ? "client/hives/1" : "/login";

    return (
        <div className="grid-3Ykf_K footer-2JjWU3 brand-2EpRQL" role="navigation">
            <div className="row-3wW-Fx">
                <div className="infoBox-2VU2Db">
                    <h4 className="h4-1gN70b tagline-1MAOjD">Your place to talk</h4>
                    <div className="language-22KUGc">
                        <div className="container-39M5NE">
                        <div tabIndex="0" className="selectorContainer-1V6WCy" role="button">
                            <div className="localeContainer-3-LqgX">
                                <img className="flag-1DqYaK" src="/assets/e6d6b255259ac878d00819a9555072ad.png" alt="" />
                                <div className="text-3U-SDd textExtraSmall-JZhbhQ selectorlanguageName-2UyByn">English, USA</div>
                            </div>
                            <img className="arrowIcon-3ZvdFr" src="/assets/779a770c34fcb823a598a7277301adaf.svg" alt="Open Locale Picker" />
                        </div>
                        </div>
                    </div>



                    <div className="social-3JNwIn">
                        <a className="link-1bIkeG linkDefault-1Ca2JP socialLink-31Zbhj" href="https://github.com/matteeyao" target="_blank" title="Buzzhive on Github">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="socialIcon-32i0_n">
                            <g fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </g>
                        </svg>
                        </a>
                        <a className="link-1bIkeG linkDefault-1Ca2JP socialLink-31Zbhj" href="https://www.linkedin.com/in/matt-yao/" target="_blank" title="Buzzhive on LinkedIn">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="socialIcon-32i0_n">
                            <g fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </g>
                        </svg>
                        </a>
                        <a className="link-1bIkeG linkDefault-1Ca2JP socialLink-31Zbhj" href="https://angel.co/u/myao" target="_blank" title="Buzzhive on Angel List">
                        <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" className="socialIcon-32i0_n" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 369">
                            <g fill="currentColor">
                            <path d="M214.9 157.358c15.265 2.348 25.834 9.394 31.706 18.789c5.871 9.394 9.394 25.835 9.394 46.972c0 42.275-12.917 77.505-38.752 104.514c-25.835 27.01-58.716 41.1-98.642 41.1c-15.267 0-30.533-2.348-45.799-8.22c-15.266-5.87-27.009-14.091-37.578-23.485c-11.743-10.57-21.137-23.487-27.009-35.23C3.523 288.881 0 275.963 0 263.046c0-14.092 3.523-25.835 9.394-34.055c5.872-8.22 16.44-12.918 29.358-16.44c-2.348-5.872-4.697-10.57-5.871-15.267c-1.175-3.523-2.349-7.045-2.349-9.394c0-7.046 3.523-15.266 11.743-23.486s15.266-11.743 22.312-11.743c3.523 0 5.872 0 9.395 1.174c3.523 1.174 7.046 2.348 11.743 5.871c-10.569-35.229-21.138-64.587-27.01-84.55c-5.871-19.963-8.22-32.88-8.22-41.101c0-10.569 2.349-18.789 8.22-24.66C63.414 3.522 71.634 0 81.029 0c15.266 0 35.229 35.23 59.89 106.862c4.697 11.744 7.045 21.138 9.394 28.184c2.349-4.697 4.697-12.918 8.22-22.312C183.192 42.275 204.33 7.046 220.771 7.046c8.22 0 15.266 2.348 21.137 8.22c4.698 5.872 8.22 14.092 8.22 23.486c0 7.046-2.348 21.138-8.22 41.101c-7.046 19.964-15.266 45.798-27.009 77.505zM34.054 260.698c2.349 2.348 5.872 7.045 9.395 12.917C54.018 288.88 64.587 297.1 73.982 297.1c3.523 0 5.871-1.174 8.22-3.523c2.348-2.349 3.523-4.697 3.523-5.872c0-2.348-1.175-7.045-4.697-12.917c-3.523-5.872-8.22-12.917-14.092-19.963c-7.046-8.22-12.918-15.266-16.44-18.79c-4.698-3.522-8.22-5.87-10.57-5.87c-5.871 0-11.743 3.522-16.44 9.394c-4.697 5.871-7.046 14.091-7.046 22.312c0 7.045 1.175 14.091 4.698 23.486c3.523 8.22 8.22 17.614 15.266 25.835c10.568 11.743 22.312 22.312 37.578 29.357c15.266 7.046 30.532 10.57 49.32 10.57c32.881 0 59.89-11.744 82.203-36.404c22.312-24.661 32.88-55.193 32.88-92.771c0-11.743-1.174-19.963-2.348-27.01c-1.175-7.045-4.698-11.742-8.22-14.091c-7.046-5.872-19.964-10.569-39.927-15.266c-19.963-4.697-41.101-7.046-62.239-7.046c-5.871 0-10.568 1.174-12.917 3.523s-3.523 5.872-3.523 10.569c0 11.743 5.872 19.963 18.789 24.66c12.917 4.698 34.055 8.22 62.239 8.22h10.568c2.349 0 4.698 1.175 5.872 2.35c1.174 2.348 2.349 4.696 2.349 8.22c-2.35 2.348-8.22 5.871-17.615 9.394c-9.395 3.523-15.266 7.046-19.963 10.569c-10.57 7.046-18.79 16.44-24.661 27.009c-5.872 10.569-9.395 19.963-9.395 29.358c0 5.871 1.175 11.743 3.523 19.963c2.35 8.22 3.523 12.917 3.523 14.092v4.697c-7.046 0-12.917-4.697-17.614-12.917c-4.698-8.22-5.872-18.79-5.872-32.881v-2.349c-1.174 1.174-2.348 2.349-3.523 2.349c-1.174 0-2.348 1.174-4.697 1.174h-4.697c-1.175 0-2.349-1.174-4.698-1.174c0 2.348 1.175 3.523 1.175 5.871v4.698c0 5.871-2.349 11.743-7.046 16.44c-4.697 4.697-10.569 7.046-17.615 7.046c-10.569 0-21.137-4.697-32.88-15.266c-10.57-10.569-16.44-19.964-16.44-30.532c0-2.349 0-3.523 1.173-4.698c0-5.871 1.175-7.045 2.349-8.22zm76.33 5.87c2.349 0 5.872-1.174 8.22-3.522c2.35-2.349 3.523-5.872 3.523-8.22c0-3.523-2.348-10.57-7.045-22.312c-4.698-11.743-10.57-23.486-17.615-34.055c-4.697-8.22-10.569-15.266-15.266-18.79c-4.697-4.697-9.395-5.87-14.092-5.87c-3.523 0-7.046 2.348-11.743 7.045s-5.872 8.22-5.872 12.917c0 3.523 2.349 10.57 5.872 18.79c4.697 8.22 9.394 16.44 16.44 25.834C79.853 247.78 86.9 256 93.945 261.872c7.046 2.348 11.743 4.697 16.44 4.697zm24.66-122.128l-28.183-78.679c-7.045-19.963-11.743-34.055-16.44-39.926c-3.523-5.872-7.046-9.395-11.743-9.395c-3.523 0-5.872 1.175-8.22 3.523c-3.523 3.523-4.698 7.046-4.698 11.743c0 8.22 3.523 21.138 9.395 39.927c5.872 18.789 15.266 44.624 27.01 75.156c1.173-2.349 2.348-3.523 4.696-3.523c2.349-1.174 4.698-1.174 7.046-1.174h5.872c3.523 1.174 8.22 1.174 15.266 2.348zm28.184 76.33c-7.046 0-14.091-1.174-21.137-2.348c-7.046-1.174-12.918-2.349-18.79-4.697c2.35 5.871 4.698 10.569 7.047 16.44c2.348 5.872 3.523 10.569 4.697 16.44c3.523-4.697 8.22-9.394 12.917-14.091c5.872-4.697 10.57-8.22 15.266-11.743zm34.055-68.11c11.744-30.532 19.964-56.366 27.01-76.33c5.871-19.963 9.394-31.706 9.394-36.403c0-4.698-1.174-8.22-3.523-11.744c-2.348-2.348-4.697-3.522-8.22-3.522c-4.697 0-9.395 3.522-14.092 11.743c-4.697 8.22-10.569 19.963-16.44 37.578l-25.835 72.807l31.706 5.872z"/>
                            </g>
                        </svg>
                        </a>
                        <a className="link-1bIkeG linkDefault-1Ca2JP socialLink-31Zbhj" href="mailto:myao317@yahoo.com" target="_blank" title="Buzzhive on Mail">
                        <svg width="24" height="24" viewBox="0 0 24 24" className="socialIcon-32i0_n">
                            <g fill="currentColor">
                            <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
                            </g>
                        </svg>
                        </a>
                    </div>



                </div>
                <div className="spacer-1syQkv"></div>
                <div className="routeSection-3thsqR">
                    <h5 className="text-3U-SDd textSmall-2bq_Bu colHeader-2ikURV">Product</h5>
                    <a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Download</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Why buzzhive?</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Inspiration</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">College</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Nitro</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Status</span></a>
                </div>
                <div className="routeSection-3thsqR">
                    <h5 className="text-3U-SDd textSmall-2bq_Bu colHeader-2ikURV">Company</h5>
                    <a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">About</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Jobs</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Branding</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Newsroom</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Store</span></a>
                </div>
                <div className="routeSection-3thsqR">
                    <h5 className="text-3U-SDd textSmall-2bq_Bu colHeader-2ikURV">Resources</h5>
                    <a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Support</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Safety</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Blog</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Feedback</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Partners</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Verification</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Developers</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">StreamKit</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Open Source</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Security</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Moderation</span></a>
                </div>
                <div className="routeSection-3thsqR">
                    <h5 className="text-3U-SDd textSmall-2bq_Bu colHeader-2ikURV">Policies</h5>
                    <a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Terms</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Privacy</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Guidelines</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Acknowledgements</span></a><a className="link-1bIkeG linkDefault-1Ca2JP navLink-2UfL05" href="#"><span className="text-3U-SDd textSmall-2bq_Bu">Licenses</span></a>
                </div>
            </div>
            <div className="row-3wW-Fx">
                <div className="ctaContainer-1_2pP4">
                    <div className="ctaSeparator-ARE9P3"></div>
                    <div className="cta-3cmhBa">
                        <a className="link-1bIkeG linkDefault-1Ca2JP logoLink-2GlawA" aria-label="Home" href="/">
                        <svg width="124" height="34" viewBox="0 0 124 34" className="logo-1qRccC">
                            <g fill="currentColor">
                                <path d="M18.1558 14.297C17.1868 14.297 16.4218 15.13 16.4218 16.167C16.4218 17.204 17.2038 18.037 18.1558 18.037C19.1248 18.037 19.8898 17.204 19.8898 16.167C19.8898 15.13 19.1078 14.297 18.1558 14.297ZM11.9508 14.297C10.9818 14.297 10.2168 15.13 10.2168 16.167C10.2168 17.204 10.9988 18.037 11.9508 18.037C12.9198 18.037 13.6848 17.204 13.6848 16.167C13.7018 15.13 12.9198 14.297 11.9508 14.297Z"></path>
                                <path d="M26.4178 0.152954H3.63783C1.71683 0.152954 0.152832 1.71695 0.152832 3.63795V26.418C0.152832 28.339 1.71683 29.903 3.63783 29.903H22.9158L22.0148 26.792L24.1908 28.798L26.2478 30.685L29.9198 33.864V3.63795C29.9028 1.71695 28.3388 0.152954 26.4178 0.152954ZM19.8558 22.168C19.8558 22.168 19.2438 21.437 18.7338 20.808C20.9608 20.179 21.8108 18.802 21.8108 18.802C21.1138 19.261 20.4508 19.584 19.8558 19.805C19.0058 20.162 18.1898 20.383 17.3908 20.536C15.7588 20.842 14.2628 20.757 12.9878 20.519C12.0188 20.332 11.1858 20.077 10.4888 19.788C10.0978 19.635 9.67283 19.448 9.24783 19.21C9.19683 19.176 9.14583 19.159 9.09483 19.125C9.06083 19.108 9.04383 19.091 9.02683 19.091C8.72083 18.921 8.55083 18.802 8.55083 18.802C8.55083 18.802 9.36683 20.145 11.5258 20.791C11.0158 21.437 10.3868 22.185 10.3868 22.185C6.62983 22.066 5.20183 19.618 5.20183 19.618C5.20183 14.195 7.64983 9.79195 7.64983 9.79195C10.0978 7.97295 12.4098 8.02395 12.4098 8.02395L12.5798 8.22795C9.51983 9.09495 8.12583 10.438 8.12583 10.438C8.12583 10.438 8.49983 10.234 9.12883 9.96195C10.9478 9.16295 12.3928 8.95895 12.9878 8.89095C13.0898 8.87395 13.1748 8.85695 13.2768 8.85695C14.3138 8.72095 15.4868 8.68695 16.7108 8.82295C18.3258 9.00995 20.0598 9.48595 21.8278 10.438C21.8278 10.438 20.4848 9.16295 17.5948 8.29595L17.8328 8.02395C17.8328 8.02395 20.1618 7.97295 22.5928 9.79195C22.5928 9.79195 25.0408 14.195 25.0408 19.618C25.0408 19.601 23.6128 22.049 19.8558 22.168ZM45.5258 7.42895H39.8818V13.77L43.6388 17.153V10.999H45.6448C46.9198 10.999 47.5488 11.611 47.5488 12.597V17.306C47.5488 18.292 46.9538 18.955 45.6448 18.955H39.8648V22.542H45.5088C48.5348 22.559 51.3738 21.046 51.3738 17.578V12.512C51.3908 8.97595 48.5518 7.42895 45.5258 7.42895ZM75.1058 17.578V12.376C75.1058 10.506 78.4718 10.081 79.4918 11.951L82.6028 10.693C81.3788 8.00695 79.1518 7.22495 77.2988 7.22495C74.2728 7.22495 71.2808 8.97595 71.2808 12.376V17.578C71.2808 21.012 74.2728 22.729 77.2308 22.729C79.1348 22.729 81.4128 21.794 82.6708 19.346L79.3388 17.816C78.5228 19.907 75.1058 19.397 75.1058 17.578ZM64.8208 13.09C63.6478 12.835 62.8658 12.41 62.8148 11.679C62.8828 9.92795 65.5858 9.85995 67.1668 11.543L69.6658 9.62195C68.1018 7.71795 66.3338 7.20795 64.5148 7.20795C61.7438 7.20795 59.0578 8.77195 59.0578 11.73C59.0578 14.603 61.2678 16.15 63.6988 16.524C64.9398 16.694 66.3168 17.187 66.2828 18.037C66.1808 19.652 62.8488 19.567 61.3358 17.731L58.9218 19.992C60.3328 21.811 62.2538 22.729 64.0558 22.729C66.8268 22.729 69.9038 21.131 70.0228 18.207C70.1928 14.518 67.5068 13.583 64.8208 13.09ZM53.4308 22.525H57.2388V7.42895H53.4308V22.525ZM117.64 7.42895H111.996V13.77L115.753 17.153V10.999H117.759C119.034 10.999 119.663 11.611 119.663 12.597V17.306C119.663 18.292 119.068 18.955 117.759 18.955H111.979V22.542H117.64C120.666 22.559 123.505 21.046 123.505 17.578V12.512C123.505 8.97595 120.666 7.42895 117.64 7.42895ZM89.9468 7.22495C86.8188 7.22495 83.7078 8.92495 83.7078 12.41V17.561C83.7078 21.012 86.8358 22.746 89.9808 22.746C93.1088 22.746 96.2198 21.012 96.2198 17.561V12.41C96.2198 8.94195 93.0748 7.22495 89.9468 7.22495ZM92.3948 17.561C92.3948 18.649 91.1708 19.21 89.9638 19.21C88.7398 19.21 87.5158 18.683 87.5158 17.561V12.41C87.5158 11.305 88.7058 10.71 89.8958 10.71C91.1368 10.71 92.3948 11.237 92.3948 12.41V17.561ZM109.888 12.41C109.803 8.87395 107.389 7.44595 104.278 7.44595H98.2428V22.542H102.102V17.748H102.782L106.284 22.542H111.044L106.93 17.357C108.749 16.779 109.888 15.198 109.888 12.41ZM104.346 14.45H102.102V10.999H104.346C106.743 10.999 106.743 14.45 104.346 14.45Z"></path>
                            </g>
                        </svg>
                        </a>
                        {/* <a className="button-195cDm buttonBrand-33cvhX buttonSmall-2bnF7I" href="//discord.com/register">Open buzzhive</a> */}
                        <Link className="button-195cDm buttonBrand-33cvhX buttonSmall-2bnF7I" to={authRoute}>Open buzzhive</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
