import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class About extends Component {
    render() {
        return (
            <aside className="modal-background" onClick={() => this.props.closeModal()}>
                <figure className='about-modal' onClick={e => e.stopPropagation()}>
                    <section className="header">
                        <svg version="1.0" width="50pt" height="50pt" viewBox="0 0 714.000000 684.000000" preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,684.000000) scale(0.100000,-0.100000)" fill="gold" stroke="none">
                            <path d="M3490 6331 c-20 -12 -54 -20 -81 -21 -31 0 -55 -7 -72 -20 -14 -11 -37 -20 -51 -20 -15 0 -31 -8 -38 -20 -7 -11 -23 -20 -35 -20 -13 0 -28 -9 -35 -20 -7 -11 -18 -20 -24 -20 -18 0 -134 -61 -134 -71 0 -5 -9 -9 -20 -9 -12 0 -31 -11 -44 -25 -13 -14 -32 -25 -43 -25 -11 0 -28 -9 -38 -20 -10 -11 -28 -20 -41 -20 -13 0 -28 -9 -34 -20 -6 -11 -19 -20 -29 -20 -10 0 -26 -9 -36 -20 -10 -11 -26 -20 -35 -20 -9 0 -27 -9 -40 -20 -13 -11 -31 -20 -40 -20 -9 0 -25 -9 -35 -20 -10 -11 -26 -22 -37 -26 -11 -3 -39 -19 -63 -35 -24 -16 -59 -36 -78 -44 -19 -8 -37 -21 -40 -30 -4 -8 -18 -15 -32 -15 -14 0 -30 -9 -37 -20 -7 -11 -23 -20 -35 -20 -13 0 -28 -9 -35 -20 -7 -11 -20 -20 -29 -20 -9 0 -26 -9 -39 -20 -13 -11 -31 -20 -41 -20 -11 0 -24 -9 -31 -20 -7 -11 -22 -20 -34 -20 -11 0 -29 -9 -38 -19 -10 -11 -31 -25 -47 -31 -16 -7 -29 -16 -29 -21 0 -5 -8 -9 -18 -9 -10 0 -29 -11 -42 -25 -13 -14 -31 -25 -40 -25 -9 0 -25 -9 -35 -20 -10 -11 -23 -20 -30 -20 -7 0 -22 -9 -35 -20 -13 -11 -28 -20 -35 -20 -7 0 -20 -9 -30 -20 -10 -11 -26 -20 -36 -20 -11 0 -24 -9 -31 -20 -7 -11 -21 -20 -30 -20 -10 0 -23 -9 -30 -20 -7 -11 -20 -20 -30 -20 -17 0 -38 -15 -118 -87 -26 -24 -52 -43 -58 -43 -7 0 -17 -9 -24 -20 -7 -11 -17 -20 -23 -20 -11 0 -155 -142 -155 -153 0 -3 -9 -17 -20 -29 -11 -13 -39 -44 -62 -71 l-41 -47 5 -1274 c4 -1129 6 -1277 20 -1298 10 -15 17 -54 19 -107 3 -64 8 -86 22 -95 9 -7 17 -23 17 -35 0 -37 50 -111 130 -193 70 -71 140 -128 159 -128 4 0 30 -20 57 -45 27 -24 56 -45 65 -45 9 0 24 -9 34 -20 10 -11 23 -20 29 -20 6 0 17 -9 24 -20 7 -11 22 -20 35 -20 12 0 28 -9 35 -20 7 -11 20 -20 30 -20 9 0 23 -9 30 -20 7 -11 22 -20 35 -20 12 0 28 -9 35 -20 7 -11 21 -20 32 -20 12 0 23 -7 27 -15 3 -9 19 -23 36 -32 17 -8 37 -22 45 -29 7 -8 21 -14 31 -14 10 0 26 -9 36 -20 10 -11 26 -20 37 -20 10 0 18 -5 18 -11 0 -5 15 -16 33 -24 19 -8 39 -21 47 -29 7 -9 22 -16 34 -16 12 0 27 -9 34 -20 7 -11 22 -20 35 -20 12 0 28 -9 35 -20 7 -11 20 -20 31 -20 10 0 26 -9 36 -20 10 -11 28 -20 41 -20 13 0 28 -9 34 -20 6 -11 23 -23 38 -26 15 -4 35 -15 45 -25 10 -11 24 -19 31 -19 7 0 23 -9 36 -20 13 -11 31 -20 42 -20 10 0 27 -9 38 -20 11 -11 28 -20 38 -20 9 0 23 -9 30 -20 7 -11 23 -20 37 -20 14 0 29 -8 35 -20 6 -11 21 -20 34 -20 13 0 31 -9 41 -20 10 -11 28 -20 40 -20 13 0 28 -7 35 -15 16 -19 116 -75 135 -75 8 0 24 -9 35 -20 11 -11 29 -20 40 -20 11 0 29 -9 40 -20 11 -11 32 -20 48 -20 16 0 32 -8 40 -20 10 -16 23 -20 63 -20 38 0 55 -5 65 -17 11 -16 35 -18 254 -18 219 0 243 2 254 18 10 12 27 17 65 17 40 0 53 4 63 20 9 14 24 20 50 20 27 0 41 6 50 20 7 11 24 20 37 20 14 0 41 10 60 23 59 37 74 46 109 61 18 8 35 22 38 31 3 8 16 15 29 15 12 0 30 9 40 20 10 11 29 20 41 20 13 0 29 9 36 20 7 11 22 20 34 20 11 0 29 9 39 20 10 11 26 20 35 20 9 0 27 9 40 20 13 11 29 20 36 20 8 0 19 9 26 20 7 11 20 20 28 20 9 0 31 11 50 25 19 14 41 25 50 25 8 0 23 9 33 20 9 11 23 20 30 20 8 0 22 9 32 20 10 11 26 20 36 20 11 0 24 9 31 20 7 11 23 20 35 20 13 0 28 9 35 20 7 11 23 20 36 20 12 0 30 9 39 20 10 11 23 20 29 20 6 0 21 9 34 20 13 11 31 20 41 20 11 0 24 9 31 20 7 11 22 20 34 20 12 0 28 7 35 17 8 9 29 22 47 30 18 7 35 20 39 28 3 8 16 15 29 15 13 0 29 9 36 20 7 11 23 20 35 20 13 0 28 9 35 20 7 11 20 20 29 20 9 0 24 9 34 20 10 11 24 20 31 20 8 0 19 9 26 20 8 12 24 20 40 20 17 0 33 8 40 20 7 11 18 20 25 20 6 0 18 8 25 19 7 10 24 22 38 26 14 4 32 14 40 21 59 53 88 77 110 89 26 14 80 70 115 119 11 16 30 41 43 56 12 15 22 34 22 42 0 8 9 23 20 33 12 11 20 31 20 49 0 17 8 43 18 56 16 24 17 100 17 1266 0 1132 -1 1244 -16 1260 -11 13 -18 46 -22 107 -3 61 -10 94 -21 106 -9 10 -16 34 -16 54 0 26 -6 41 -20 49 -11 7 -20 17 -20 22 0 5 -11 24 -25 42 -14 18 -25 36 -25 39 0 11 -54 65 -65 65 -6 0 -16 9 -23 20 -7 11 -19 20 -26 20 -8 0 -36 20 -62 45 -25 25 -56 45 -68 45 -12 0 -27 9 -34 20 -7 11 -18 20 -25 20 -7 0 -20 9 -30 20 -9 11 -27 20 -39 20 -13 0 -29 9 -36 20 -7 11 -18 20 -26 20 -7 0 -23 9 -36 20 -13 11 -30 20 -39 20 -9 0 -22 9 -29 20 -7 11 -22 20 -35 20 -12 0 -28 9 -35 20 -7 11 -19 20 -28 20 -9 0 -29 11 -46 25 -16 14 -35 25 -43 25 -7 0 -15 7 -19 15 -3 8 -14 15 -24 15 -10 0 -29 11 -42 25 -13 14 -31 25 -40 25 -9 0 -27 9 -40 20 -13 11 -29 20 -37 20 -7 0 -22 9 -33 20 -11 11 -28 20 -38 20 -9 0 -23 9 -30 20 -7 11 -23 20 -37 20 -14 0 -29 8 -35 20 -6 11 -19 20 -29 20 -10 0 -30 9 -43 20 -14 11 -36 24 -49 30 -40 18 -69 36 -93 59 -12 11 -33 21 -47 21 -13 0 -30 9 -37 20 -7 11 -22 20 -35 20 -12 0 -28 9 -35 20 -7 12 -23 20 -40 20 -16 0 -32 8 -40 20 -7 11 -22 20 -35 20 -12 0 -28 9 -35 20 -7 11 -20 20 -31 20 -10 0 -26 9 -36 20 -10 11 -28 20 -40 20 -12 0 -30 9 -40 20 -10 11 -24 20 -31 20 -7 0 -30 11 -50 25 -20 14 -46 25 -58 25 -12 0 -27 9 -34 20 -7 12 -23 20 -40 20 -16 0 -32 8 -40 20 -8 14 -23 20 -47 20 -22 0 -43 8 -55 20 -14 14 -33 20 -63 20 -31 0 -45 5 -55 20 -10 17 -23 20 -89 20 -53 0 -81 4 -93 15 -10 9 -47 17 -101 20 -72 5 -89 3 -119 -14z m-263 -1151 c18 -11 39 -34 48 -52 8 -18 26 -51 40 -73 29 -48 27 -43 53 -130 12 -38 27 -126 33 -195 6 -69 15 -163 19 -210 5 -47 9 -227 9 -400 1 -258 -3 -346 -19 -484 -12 -94 -26 -188 -31 -210 -6 -23 -15 -63 -21 -91 -5 -27 -14 -63 -20 -80 -6 -16 -14 -47 -19 -67 -5 -21 -14 -57 -20 -80 -6 -24 -15 -70 -20 -103 -6 -33 -15 -78 -20 -100 -6 -22 -14 -60 -19 -85 -12 -63 -12 -313 0 -346 17 -42 211 -234 238 -234 13 0 36 -10 51 -21 26 -19 39 -21 133 -17 66 3 116 10 141 21 20 9 52 23 70 31 59 25 143 112 179 184 l33 67 0 165 c0 113 -4 172 -12 187 -7 12 -17 54 -23 93 -6 39 -17 84 -25 100 -8 16 -15 43 -15 59 0 17 -8 52 -19 78 -10 26 -22 68 -26 93 -4 25 -13 56 -20 70 -7 14 -16 50 -20 80 -4 30 -13 80 -20 110 -8 30 -19 100 -25 155 -5 55 -15 127 -21 160 -14 77 -14 486 -1 545 6 25 16 88 22 140 6 52 18 120 27 150 69 248 121 367 188 428 24 23 51 42 58 42 26 0 95 -74 122 -130 15 -30 34 -68 42 -85 16 -29 49 -171 60 -251 3 -22 -3 -166 -12 -320 -9 -153 -18 -352 -18 -441 l-1 -161 37 -55 c21 -30 48 -58 60 -61 12 -3 80 -6 150 -6 122 0 129 1 152 24 13 13 29 43 35 67 16 57 9 275 -9 308 -8 14 -17 58 -22 99 -5 41 -15 96 -23 121 -8 26 -20 134 -27 251 -19 309 2 421 87 477 22 14 31 15 58 4 17 -7 56 -20 86 -28 30 -8 60 -19 67 -25 7 -5 27 -14 45 -18 45 -11 138 -51 168 -73 13 -9 32 -17 42 -17 9 0 19 -4 22 -9 3 -5 32 -24 64 -41 92 -52 213 -161 267 -239 47 -69 48 -72 67 -208 17 -121 20 -219 24 -788 6 -660 0 -868 -30 -1080 -21 -143 -38 -202 -79 -261 -35 -52 -211 -205 -262 -230 -16 -8 -79 -45 -140 -84 -60 -38 -130 -82 -155 -96 -25 -15 -64 -39 -87 -53 -22 -14 -71 -44 -108 -66 -37 -22 -72 -45 -79 -51 -6 -6 -23 -15 -36 -19 -14 -4 -38 -18 -55 -30 -16 -13 -66 -42 -110 -65 -44 -23 -87 -48 -95 -54 -8 -7 -26 -18 -40 -24 -14 -7 -61 -33 -105 -57 -136 -75 -362 -185 -382 -185 -10 0 -28 -7 -40 -15 -34 -24 -171 -50 -258 -49 -60 1 -98 8 -155 29 -91 33 -217 92 -225 105 -3 6 -14 10 -24 10 -9 0 -32 11 -51 25 -19 14 -40 25 -48 25 -8 0 -25 9 -39 20 -14 11 -33 20 -43 20 -9 0 -27 11 -40 25 -13 14 -28 25 -34 25 -16 0 -93 38 -201 100 -175 100 -376 210 -384 210 -4 0 -16 8 -27 18 -10 10 -57 40 -104 67 -162 93 -401 255 -463 314 -103 96 -138 197 -167 476 -5 44 -9 402 -9 795 -1 702 0 718 23 878 32 217 58 274 184 393 82 78 110 99 211 159 24 14 65 39 92 57 27 17 59 35 72 39 12 3 58 23 102 44 178 83 175 82 257 46 87 -39 137 -106 158 -213 13 -67 11 -114 -13 -263 -36 -224 -41 -260 -45 -345 -4 -105 18 -181 59 -202 35 -18 159 -17 186 2 67 47 80 141 58 430 -14 194 -10 375 11 485 15 78 90 202 157 263 37 32 51 33 94 7z"/>
                            </g>
                        </svg>
                        <button onClick={ () => this.props.closeModal() } >
                            <figure className="x" >
                                <span>
                                    x
                                </span>
                            </figure>
                        </button>
                    </section>
                    <h2>buzzhive</h2>
                    <h3>Matt Yao</h3>
                    <p>
                        buzzhive is a full-stack clone of Slack, with an aim to re-create Slack's core features, seamless design, and excellent user experience.
                    </p>
                    <p>
                        Written from scratch in just over 14 days, this app utilizes a Ruby on Rails backend and JavaScript ES6/React/Redux frontend.
                    </p>
                    <p className="last-one">
                        For detailed technical information, feature highlights/walkthroughs, and more, please visit the <a href="https://github.com/matteeyao/buzzhive" target="_blank">production readme.</a>
                    </p>
                    <h3></h3>
                    <p className="endnote">
                        Thank you for checking out buzzhive! <br/> Feel free to reach out:
                    </p>
                    <ul>
                        <li>
                            <a href="https://github.com/matteeyao" target="_blank" rel="noreferrer">Github</a>
                        </li>
                        <li> • </li>
                        <li>
                            <a href="https://www.linkedin.com/in/matt-yao/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </li>
                        <li> • </li>
                        <li>
                            <a href="mailto:myao@myao.com" target="_blank" rel="noreferrer">Email</a>
                        </li>
                    </ul>
                </figure>
            </aside>
        );
    }
}

export default About;