class MediaPlayer {
  constructor(video) {
    this.__template = document.createElement("div");
    this.__element = null;
    this.__elements = {};
    this.__video = video;
    this.__icon = {};
    this.__constructor();
  }

  static {
    const style = document.createElement("style");

    style.innerHTML = `
            .div_odDylxaL9C44Cxz {
            position: inherit;
            inset: inherit;
            }

            .div_vze7xVdMQzHAUh {
            position: relative;
            background: #000000;

            width: 100%;
            height: 100%;

            color: #ffffff;

            & * {
                margin: 0;
                padding: 0;
                font-family: sans-serif;
            }

            & button {
                background: none;
                outline: none;
                border: none;
            }

            & svg {
                width: 15px;
                height: 15px;
                fill: #ffffff;
            }
            }

            .div_9sbPnGYDZ0MHJDx {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;

            & canvas {
                position: absolute;
                width: 100%;
                height: 100%;
                object-fit: cover;
                filter: blur(150px);
            }

            & video {
                position: relative;
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
            }

            .div_BzD7xoPAKTVhJ2J {
            position: absolute;
            inset: 0;

            display: flex;
            flex-direction: column;
            justify-content: space-between;
            }

            .div_30iEfg1Tp8Z9Sfe {
            width: 100%;
            height: 60px;

            display: flex;
            overflow: hidden;
            position: relative;
            background: rgb(0 0 0 / 0.3);
            }

            .div_fqntqCwolU7nS2I {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            gap: 15px;

            & button {
                background: rgb(0 0 0 / 0.3);
                width: 60px;
                height: 60px;

                display: flex;
                justify-content: center;
                align-items: center;

                border-radius: 50%;
                position: relative;
            }

            & svg {
                fill: #ffffff;
                width: 20px;
                height: 20px;
            }
            }

            .div_KYTTm4XcCkVvAmy {
            display: flex;
            padding: 10px;
            gap: 10px;
            flex: 1;

            overflow: hidden;
            }

            .div_swkEBnnVsXvSjjL {
            flex: 1;
            margin: auto;
            overflow: hidden;
            display: grid;

            color: #ffffff;

            & p {
                font-size: 15px;
                font-weight: bold;
            }

            & span {
                font-size: 13px;
            }
            }

            .div_quGYBx1MHxIWCd6 {
            position: relative;
            flex: 1;
            display: grid;
            margin: auto;
            padding-left: 20px;
            gap: 3px;

            & span {
                font-size: 14px;
            }
            }
            .button_wBp8eB3YdFZoLqE {
            margin: 10px;
            width: 40px;
            height: 40px;

            position: relative;
            }

            .div_iVl4urAy8xQ7zk6 {
            position: relative;
            display: flex;
            justify-content: center;
            align-items: center;

            background: rgb(255 255 255 / 0.3);
            height: 3px;
            border-radius: 3px;
            flex: 1;

            & input {
                position: relative;
                width: 100%;
                opacity: 0;
            }

            & hr {
                position: absolute;
                left: 0;
                background: #ffffff;
                width: 0;
                height: 100%;
                border: none;
                border-radius: inherit;
            }
            }

            .div_tmIkQJSqwdupw {
            position: absolute;
            inset: 0;
 
            display: flex;
            }

            .div_0wgv7xmg98Vw2IY {
            background: rgb(0 0 0 / 0.3);
            margin-left: auto;
            position: relative;
            width: 60px;
            height: 100%;

            overflow-y: auto;
            scrollbar-width: none;
            }

            .div_5lgw0Me5IocTECr {
            margin-bottom: auto;
            display: grid;
            padding: 10px;
            gap: 10px;

            & button {
                width: 40px;
                height: 40px;

                display: flex;
                justify-content: center;
                align-items: center;
            }
            }

            .div_pcg6NWag8XKbP8e {
            position: absolute;
            inset: 0;

            display: flex;
            }

            .div_q9MnoHmDRvz1I5g {
            position: relative;
            margin: auto;
            width: min(100%, 450px);

            background: rgb(0 0 0 / 0.3);
            padding: 20px;
            gap: 20px;

            display: grid;
            }

            .div_ccWrXBhzP0hqhl5 {
            display: grid;
            grid-template-columns: 1fr 40px;
            align-items: center;
            gap: 20px;

            text-align: center;
            }

            .div_KoXCFVHsmvOVAj1 {
            display: grid;
            grid-template-columns: 40px 1fr;
            align-items: center;
            padding-right: 10px;

            overflow: hidden;

            & button {
                width: 40px;
                height: 40px;

                display: flex;
                justify-content: center;
                align-items: center;
            }

            & span {
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            }

            .label_Vgul2cCgNhl4gPP {
            display: flex;
            justify-content: center;
            align-items: center;

            width: 40px;
            height: 40px;
            }

            .div_tAIppFChF7u7CjX {
            display: grid;
            grid-template-columns: repeat(4, 1fr);

            & button {
                border-radius: 30px;
                padding: 10px 20px;
                color: #ffffff;

                &.focus {
                background: rgb(255 255 255 / 0.3);
                }
            }
            }

            .div_CQM4abRCwN455Mw {
            --pixel: 45px;
            --color: #000000;
            margin: auto;

            display: flex;
            justify-content: center;
            align-items: center;
            }

            .div_CQM4abRCwN455Mw::before {
            content: "";
            width: var(--pixel);
            height: var(--pixel);
            border-radius: 50%;
            display: inline-block;
            border-top: 3px solid var(--color);
            border-right: 3px solid transparent;
            box-sizing: border-box;
            animation: rotation 1s linear infinite;
            }

            @keyframes rotation {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
            }
        `;

    document.head.append(style);
  }

  __constructor = () => {
    this.__icon = {
      play: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M20.494,7.968l-9.54-7A5,5,0,0,0,3,5V19a5,5,0,0,0,7.957,4.031l9.54-7a5,5,0,0,0,0-8.064Zm-1.184,6.45-9.54,7A3,3,0,0,1,5,19V5A2.948,2.948,0,0,1,6.641,2.328,3.018,3.018,0,0,1,8.006,2a2.97,2.97,0,0,1,1.764.589l9.54,7a3,3,0,0,1,0,4.836Z"></path></svg>',
      pause:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M6.5,0A3.5,3.5,0,0,0,3,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,6.5,0ZM8,20.5a1.5,1.5,0,0,1-3,0V3.5a1.5,1.5,0,0,1,3,0Z"></path><path d="M17.5,0A3.5,3.5,0,0,0,14,3.5v17a3.5,3.5,0,0,0,7,0V3.5A3.5,3.5,0,0,0,17.5,0ZM19,20.5a1.5,1.5,0,0,1-3,0V3.5a1.5,1.5,0,0,1,3,0Z"></path></svg>',
      download:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M9.878,18.122a3,3,0,0,0,4.244,0l3.211-3.211A1,1,0,0,0,15.919,13.5l-2.926,2.927L13,1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1l-.009,15.408L8.081,13.5a1,1,0,0,0-1.414,1.415Z"></path><path d="M23,16h0a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V17a1,1,0,0,0-1-1H1a1,1,0,0,0-1,1v4a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V17A1,1,0,0,0,23,16Z"></path></svg>',
      lock: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M19,8.424V7A7,7,0,0,0,5,7V8.424A5,5,0,0,0,2,13v6a5.006,5.006,0,0,0,5,5H17a5.006,5.006,0,0,0,5-5V13A5,5,0,0,0,19,8.424ZM7,7A5,5,0,0,1,17,7V8H7ZM20,19a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V13a3,3,0,0,1,3-3H17a3,3,0,0,1,3,3Z"></path><path d="M12,14a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0V15A1,1,0,0,0,12,14Z"></path></svg>',
      chromecast:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m24,7v10c0,2.757-2.243,5-5,5h-3c-.552,0-1-.448-1-1s.448-1,1-1h3c1.654,0,3-1.346,3-3V7c0-1.654-1.346-3-3-3H5c-1.363,0-2.557.919-2.902,2.236-.14.534-.684.855-1.221.713-.534-.14-.854-.687-.713-1.221.576-2.195,2.564-3.728,4.836-3.728h14c2.757,0,5,2.243,5,5ZM1.5,19c-.828,0-1.5.672-1.5,1.5s.672,1.5,1.5,1.5,1.5-.672,1.5-1.5-.672-1.5-1.5-1.5Zm-.5-5c-.552,0-1,.448-1,1s.448,1,1,1c2.757,0,5,2.243,5,5,0,.552.448,1,1,1s1-.448,1-1c0-3.86-3.14-7-7-7Zm.047-5c-.552,0-1,.448-1,1s.448,1,1,1c5.488,0,9.953,4.486,9.953,10,0,.552.448,1,1,1s1-.448,1-1c0-6.617-5.362-12-11.953-12Z"></path></svg>',
      playbackSpeed:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path  d="M24,13a11.914,11.914,0,0,1-3.508,8.47,3.037,3.037,0,0,1-4.12.174l-1.026-.887a1,1,0,0,1,1.308-1.514l1.027.888a1.014,1.014,0,0,0,1.395-.075,10.044,10.044,0,0,0-.414-14.513,9.9,9.9,0,0,0-7.823-2.478A9.992,9.992,0,0,0,4.962,20.094a1,1,0,0,0,1.357.038l1.027-.889a1,1,0,0,1,1.308,1.514l-1.026.888a3.016,3.016,0,0,1-4.073-.129A12,12,0,1,1,24,13ZM17.707,8.707a1,1,0,0,0-1.414-1.414l-3.775,3.775a2,2,0,1,0,1.414,1.414Z"></path></svg>',
      pip: '<svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m19 0h-8a5.006 5.006 0 0 0 -5 5v6h-1a5.006 5.006 0 0 0 -5 5v3a5.006 5.006 0 0 0 5 5h3a5.006 5.006 0 0 0 5-5v-1h6a5.006 5.006 0 0 0 5-5v-8a5.006 5.006 0 0 0 -5-5zm-8 16a3 3 0 0 1 -3-3 3 3 0 0 1 3 3zm0 3a3 3 0 0 1 -3 3h-3a3 3 0 0 1 -3-3v-3a3 3 0 0 1 3-3h1a5.006 5.006 0 0 0 5 5zm11-6a3 3 0 0 1 -3 3h-6a4.969 4.969 0 0 0 -.833-2.753l5.833-5.833v2.586a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3-3h-3a1 1 0 0 0 0 2h2.586l-5.833 5.833a4.969 4.969 0 0 0 -2.753-.833v-6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3z"></path></svg>',
      background:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M19,0H5C2.24,0,0,2.24,0,5v14c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5V5c0-2.76-2.24-5-5-5Zm3,14.59l-7.41,7.41h-4.17l11.59-11.59v4.17Zm-1.71-12.29L2.29,20.29c-.19-.39-.29-.83-.29-1.29v-2.59L16.41,2h2.59c.46,0,.9,.11,1.29,.29ZM2,9.41L9.41,2h4.17L2,13.59v-4.17ZM5,2h1.59L2,6.59v-1.59c0-1.65,1.35-3,3-3Zm-1.29,19.71L21.71,3.71c.19,.39,.29,.83,.29,1.29v2.59L7.59,22h-2.59c-.46,0-.9-.11-1.29-.29Zm15.29,.29h-1.59l4.59-4.59v1.59c0,1.65-1.35,3-3,3Z" /></svg>',
      resize:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M23,18H20V9a5.006,5.006,0,0,0-5-5H6V1A1,1,0,0,0,4,1V4H1A1,1,0,0,0,1,6H4v9a5.006,5.006,0,0,0,5,5h9v3a1,1,0,0,0,2,0V20h3a1,1,0,0,0,0-2ZM9,18a3,3,0,0,1-3-3V6h9a3,3,0,0,1,3,3v9Z"/></svg>',
      options:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><circle cx="12" cy="2" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="12" cy="22" r="2"></circle></svg>',
      seekLeft:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0A11.972,11.972,0,0,0,4,3.073V1A1,1,0,0,0,2,1V4A3,3,0,0,0,5,7H8A1,1,0,0,0,8,5H5a.854.854,0,0,1-.1-.021A9.987,9.987,0,1,1,2,12a1,1,0,0,0-2,0A12,12,0,1,0,12,0Z"></path><path d="M12,6a1,1,0,0,0-1,1v5a1,1,0,0,0,.293.707l3,3a1,1,0,0,0,1.414-1.414L13,11.586V7A1,1,0,0,0,12,6Z"></path></svg>',
      seekRight:
        '<svg height="512" viewBox="0 0 24 24" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m23 11a1 1 0 0 0 -1 1 10.034 10.034 0 1 1 -2.9-7.021.862.862 0 0 1 -.1.021h-3a1 1 0 0 0 0 2h3a3 3 0 0 0 3-3v-3a1 1 0 0 0 -2 0v2.065a11.994 11.994 0 1 0 4 8.935 1 1 0 0 0 -1-1z"></path><path d="m12 6a1 1 0 0 0 -1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414l-2.707-2.707v-4.586a1 1 0 0 0 -1-1z"></path></svg>',
      screenMax:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M19,24H17a1,1,0,0,1,0-2h2a3,3,0,0,0,3-3V17a1,1,0,0,1,2,0v2A5.006,5.006,0,0,1,19,24Z"></path><path d="M1,8A1,1,0,0,1,0,7V5A5.006,5.006,0,0,1,5,0H7A1,1,0,0,1,7,2H5A3,3,0,0,0,2,5V7A1,1,0,0,1,1,8Z"></path><path d="M7,24H5a5.006,5.006,0,0,1-5-5V17a1,1,0,0,1,2,0v2a3,3,0,0,0,3,3H7a1,1,0,0,1,0,2Z"></path><path d="M23,8a1,1,0,0,1-1-1V5a3,3,0,0,0-3-3H17a1,1,0,0,1,0-2h2a5.006,5.006,0,0,1,5,5V7A1,1,0,0,1,23,8Z"></path></svg>',
      screenMin:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M7,0A1,1,0,0,0,6,1V3A3,3,0,0,1,3,6H1A1,1,0,0,0,1,8H3A5.006,5.006,0,0,0,8,3V1A1,1,0,0,0,7,0Z"></path><path d="M23,16H21a5.006,5.006,0,0,0-5,5v2a1,1,0,0,0,2,0V21a3,3,0,0,1,3-3h2a1,1,0,0,0,0-2Z"></path><path d="M21,8h2a1,1,0,0,0,0-2H21a3,3,0,0,1-3-3V1a1,1,0,0,0-2,0V3A5.006,5.006,0,0,0,21,8Z"></path><path d="M3,16H1a1,1,0,0,0,0,2H3a3,3,0,0,1,3,3v2a1,1,0,0,0,2,0V21A5.006,5.006,0,0,0,3,16Z"></path></svg>',
      back: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M10.6,12.71a1,1,0,0,1,0-1.42l4.59-4.58a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L9.19,9.88a3,3,0,0,0,0,4.24l4.59,4.59a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42Z"></path></svg>',
      warning:
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><path d="M11,13V7c0-.55,.45-1,1-1s1,.45,1,1v6c0,.55-.45,1-1,1s-1-.45-1-1Zm1,2c-.83,0-1.5,.67-1.5,1.5s.67,1.5,1.5,1.5,1.5-.67,1.5-1.5-.67-1.5-1.5-1.5Zm11.58,4.88c-.7,1.35-2.17,2.12-4.01,2.12H4.44c-1.85,0-3.31-.77-4.01-2.12-.71-1.36-.51-3.1,.5-4.56L8.97,2.6c.71-1.02,1.83-1.6,3.03-1.6s2.32,.58,3,1.57l8.08,12.77c1.01,1.46,1.2,3.19,.49,4.54Zm-2.15-3.42s-.02-.02-.02-.04L13.34,3.67c-.29-.41-.79-.67-1.34-.67s-1.05,.26-1.36,.71L2.59,16.42c-.62,.88-.76,1.84-.4,2.53,.35,.68,1.15,1.05,2.24,1.05h15.12c1.09,0,1.89-.37,2.24-1.05,.36-.69,.22-1.65-.37-2.49Z"/></svg>',
    };
    this.__template.innerHTML = `
            <div class="div_vze7xVdMQzHAUh">

                <div class="div_9sbPnGYDZ0MHJDx">
                    <canvas id="canvas"></canvas>
                    <video id="video" src=""></video>
                </div>

                <div id="control" class="div_BzD7xoPAKTVhJ2J">
                    <div id="hideControl" class="div_odDylxaL9C44Cxz" data-status="true"></div>
                    <div class="div_30iEfg1Tp8Z9Sfe" data-control="">
                        <div class="div_KYTTm4XcCkVvAmy">
                            <div class="div_swkEBnnVsXvSjjL">
                                <p id="videoTitle" class="text-ellipsis"></p>
                                <span id="videoDescription" class="text-ellipsis"></span>
                            </div>
                        </div>
                        <button id="openOptions" class="button_wBp8eB3YdFZoLqE">${this.__icon.options}</button>
                    </div>
                    <div class="div_fqntqCwolU7nS2I" data-control="">
                        <button id="seekLeft">${this.__icon.seekLeft}</button>
                        <button id="play" style="width: 80px; height: 80px;" data-status="false">
                            <div class="div_CQM4abRCwN455Mw" style="--color:#ffffff; --pixel:60px"></div>
                        </button>
                        <button id="seekRight">${this.__icon.seekRight}</button>
                    </div>
                    <div class="div_30iEfg1Tp8Z9Sfe" data-control="">
                        <div id="duration" class="div_quGYBx1MHxIWCd6">
                            <span id="durationText">99:99</span>
                            <div class="div_iVl4urAy8xQ7zk6">
                                <hr id="durationBar">
                                <input id="durationInput" type="range" data-status="false" min="0" value="0" max="0">
                            </div>
                        </div>
                        <button id="buttonFullscreen" class="button_wBp8eB3YdFZoLqE">${this.__icon.screenMax}</button>
                    </div>
                </div>
                <div id="options" class="div_tmIkQJSqwdupw" style="display: none;">
                    <div id="closeOptions" class="div_odDylxaL9C44Cxz"></div>
                    <div class="div_0wgv7xmg98Vw2IY">
                        <div id="optionsButtons" class="div_5lgw0Me5IocTECr">
                            <button id="lock" data-option-action="lock">${this.__icon.lock}</button>
                            <button id="chromecast" data-option-action="chromecast">${this.__icon.chromecast}</button>
                            <button id="playback_speed" data-option-action="playback_speed">${this.__icon.playbackSpeed}</button>
                            <button id="pip" data-option-action="pip">${this.__icon.pip}</button>
                            <button id="background_ambient" data-option-action="background_ambient">${this.__icon.background}</button>
                            <button id="resize" data-option-action="resize" data-object-fit="contain">${this.__icon.resize}</button>
                            <button id="download" data-option-action="download">${this.__icon.download}</button>
                        </div>
                    </div>
                </div>
                <div id="speed" class="div_pcg6NWag8XKbP8e" style="display: none;">
                    <div id="closeSpeed" class="div_odDylxaL9C44Cxz"></div>
                    <div class="div_q9MnoHmDRvz1I5g">
                        <div class="div_KoXCFVHsmvOVAj1">
                            <button>${this.__icon.back}</button>
                            <span>Velocidad de reproduccion</span>
                        </div>
                        <div class="div_ccWrXBhzP0hqhl5">
                            <div class="div_iVl4urAy8xQ7zk6">
                                <hr id="speedBar">
                                <input id="speedInput" type="range" data-status="false" min="0" value="10" max="100">
                            </div>
                            <span id="speedText">1x</span>
                        </div>
                        <div id="speedButtons" class="div_tAIppFChF7u7CjX">
                            <button data-speed="5">0.5x</button>
                            <button data-speed="10" class="focus">1x</button>
                            <button data-speed="15">1.5x</button>
                            <button data-speed="20">2x</button>
                        </div>
                    </div>

                </div>
                <div id="background" class="div_pcg6NWag8XKbP8e" style="display: none;">
                    <div id="closeBackground" class="div_odDylxaL9C44Cxz"></div>
                    <div class="div_q9MnoHmDRvz1I5g">
                        <div class="div_KoXCFVHsmvOVAj1" style="grid-template-columns: 40px 1fr 40px; padding: 0;">
                            <button>${this.__icon.back}</button>
                            <span>Fondo de reproduccion</span>
                            <label class="label_Vgul2cCgNhl4gPP"><input type="checkbox" id="toggleBackground"
                                    checked></label>
                        </div>
                        <div class="div_ccWrXBhzP0hqhl5">
                            <div class="div_iVl4urAy8xQ7zk6">
                                <hr id="backgroundBar">
                                <input id="backgroundInput" type="range" data-status="false" min="0" value="150"
                                    max="200">
                            </div>
                            <span id="backgroundText">150</span>
                        </div>
                        <div id="backgroundButtons" class="div_tAIppFChF7u7CjX">
                            <button data-background="50">50</button>
                            <button data-background="100">100</button>
                            <button data-background="150" class="focus">150</button>
                            <button data-background="200">200</button>
                        </div>
                    </div>

                </div>
            </div>
        `;
    this.__element = this.__template.firstElementChild;

    this.__elements = Array.from(
      this.__element.querySelectorAll("[id]")
    ).reduce((prev, curr) => {
      prev[curr.getAttribute("id")] = curr;
      curr.removeAttribute("id");
      return prev;
    }, {});

    const $elements = this.__elements;

    $elements.video.replaceWith(this.__video);
    $elements.video = this.__video;

    const video = $elements.video;
    const canvas = $elements.canvas;
    const context = $elements.canvas.getContext("2d");

    const useThis = {
      timeHideControl: null,
    };

    const hideControl = (time, timeout = true, status = true) => {
      if (time != null) clearTimeout(time);

      $elements.hideControl.setAttribute("data-status", status);
      Array.from(document.querySelectorAll("[data-control]")).forEach(
        (control) => {
          styleElement(control, { display: status ? "" : "none" });
        }
      );

      return setTimeout(() => {
        if (timeout) {
          $elements.hideControl.setAttribute("data-status", false);
          Array.from(document.querySelectorAll("[data-control]")).forEach(
            (control) => {
              styleElement(control, { display: "none" });
            }
          );
        }
      }, 3000);
    };

    const draw = () => {
      if (!video.paused && !video.ended) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        requestAnimationFrame(draw); // Llamar a draw de nuevo en el siguiente cuadro de animación
      }
    };

    function styleElement(element, styles) {
      Object.keys(styles ?? {}).forEach(
        (key) => (element.style[key] = styles[key])
      );
      return element;
    }

    function convertSecondsToTime(seconds) {
      seconds = parseInt(seconds);

      return {
        hours: Math.floor(seconds / 3600),
        minutes: Math.floor((seconds % 3600) / 60),
        seconds: seconds % 60,
      };
    }

    function getPercentage(current, total) {
      return Math.floor((parseInt(current) / parseInt(total)) * 100);
    }

    function downloadFile(url, name = "") {
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    video.addEventListener("error", () => {
      if (URL.canParse && URL.canParse(video.getAttribute("src"))) {
        $elements.play.innerHTML = this.__icon.warning;
      }
    });

    video.addEventListener("loadstart", function () {
      styleElement($elements.duration, { visibility: "hidden" });
      styleElement($elements.seekLeft, { visibility: "hidden" });
      styleElement($elements.seekRight, { visibility: "hidden" });

      $elements.play.setAttribute("data-status", false);
    });

    video.addEventListener("loadedmetadata", () => {
      styleElement($elements.duration, { visibility: "" });
      styleElement($elements.seekLeft, { visibility: "" });
      styleElement($elements.seekRight, { visibility: "" });

      $elements.play.setAttribute("data-status", true);
      video.play();
    });

    video.addEventListener("durationchange", () => {
      const convert = convertSecondsToTime(video.duration);
      $elements.durationText.textContent = [
        convert.hours || "-",
        convert.minutes,
        convert.seconds,
      ].join(":");
      $elements.durationInput.max = parseInt(video.duration);
    });

    video.addEventListener("timeupdate", () => {
      if ($elements.durationInput.getAttribute("data-status") == "true") return;

      const convert = convertSecondsToTime(video.duration - video.currentTime);
      $elements.durationText.textContent = [
        convert.hours || "-",
        `0${convert.minutes}`.slice(-2),
        `0${convert.seconds}`.slice(-2),
      ].join(":");

      styleElement($elements.durationBar, {
        width: getPercentage(video.currentTime, video.duration) + "%",
      });

      $elements.durationInput.value = parseInt(video.currentTime);
    });

    video.addEventListener("waiting", () => {
      $elements.play.innerHTML =
        '<div class="div_CQM4abRCwN455Mw" style="--color:#ffffff; --pixel:60px"></div>';
    });

    video.addEventListener("seeking", () => {
      $elements.play.innerHTML =
        '<div class="div_CQM4abRCwN455Mw" style="--color:#ffffff; --pixel:60px"></div>';
    });

    video.addEventListener("seeked", () => {
      if (video.paused) $elements.play.innerHTML = this.__icon.play;
      else $elements.play.innerHTML = this.__icon.pause;
    });

    video.addEventListener("playing", () => {
      $elements.play.innerHTML = this.__icon.pause;
    });

    video.addEventListener("play", () => {
      $elements.play.innerHTML = this.__icon.pause;
      draw();
    });

    video.addEventListener("pause", () => {
      $elements.play.innerHTML = this.__icon.play;
    });

    $elements.play.addEventListener("click", () => {
      if ($elements.play.getAttribute("data-status") == "true") {
        if (video.paused) video.play();
        else video.pause();
      }
    });

    $elements.seekLeft.addEventListener("click", () => {
      video.currentTime = parseInt(video.currentTime) - 10;
    });

    $elements.seekRight.addEventListener("click", () => {
      video.currentTime = parseInt(video.currentTime) + 10;
    });

    $elements.speedInput.addEventListener("input", () => {
      const speed = parseInt($elements.speedInput.value) / 10;
      video.playbackRate = speed;
      $elements.speedText.textContent = `${speed}x`;

      styleElement($elements.speedBar, {
        width:
          getPercentage($elements.speedInput.value, $elements.speedInput.max) +
          "%",
      });

      Array.from($elements.speedButtons.querySelectorAll("button")).forEach(
        (button) => {
          if (button.getAttribute("data-speed") == $elements.speedInput.value)
            button.classList.add("focus");
          else button.classList.remove("focus");
        }
      );
    });

    $elements.backgroundInput.addEventListener("input", () => {
      const background = $elements.backgroundInput.value;
      $elements.backgroundText.textContent = background;

      styleElement(canvas, {
        filter: `blur(${background}px)`,
      });
      styleElement($elements.backgroundBar, {
        width:
          getPercentage(
            $elements.backgroundInput.value,
            $elements.backgroundInput.max
          ) + "%",
      });

      Array.from(
        $elements.backgroundButtons.querySelectorAll("button")
      ).forEach((button) => {
        if (
          button.getAttribute("data-background") ==
          $elements.backgroundInput.value
        )
          button.classList.add("focus");
        else button.classList.remove("focus");
      });
    });

    $elements.durationInput.addEventListener("input", () => {
      $elements.durationInput.setAttribute("data-status", true);

      const convert = convertSecondsToTime(
        video.duration - $elements.durationInput.value
      );
      $elements.durationText.textContent = [
        convert.hours || "-",
        `0${convert.minutes}`.slice(-2),
        `0${convert.seconds}`.slice(-2),
      ].join(":");

      styleElement($elements.durationBar, {
        width:
          getPercentage($elements.durationInput.value, video.duration) + "%",
      });

      useThis.timeHideControl = hideControl(
        useThis.timeHideControl,
        false,
        true
      );
    });

    $elements.durationInput.addEventListener("change", () => {
      $elements.durationInput.setAttribute("data-status", false);
      video.currentTime = parseInt($elements.durationInput.value);

      useThis.timeHideControl = hideControl(
        useThis.timeHideControl,
        true,
        true
      );
    });

    $elements.buttonFullscreen.addEventListener("click", () => {
      if (document.fullscreenElement) document.exitFullscreen();
      else this.__element.requestFullscreen();
    });

    $elements.control.addEventListener("click", (e) => {
      if (e.target != $elements.hideControl) {
        useThis.timeHideControl = hideControl(
          useThis.timeHideControl,
          true,
          true
        );
      }
    });

    $elements.hideControl.addEventListener("click", () => {
      const status =
        $elements.hideControl.getAttribute("data-status") == "true"
          ? false
          : true;
      useThis.timeHideControl = hideControl(
        useThis.timeHideControl,
        status,
        status
      );
    });

    $elements.openOptions.addEventListener("click", () => {
      setTimeout(() => {
        useThis.timeHideControl = hideControl(
          useThis.timeHideControl,
          false,
          false
        );
      });
      styleElement($elements.options, { display: "" });
    });

    $elements.playback_speed.addEventListener("click", () => {
      useThis.timeHideControl = hideControl(
        useThis.timeHideControl,
        false,
        false
      );
      styleElement($elements.options, { display: "none" });
      styleElement($elements.speed, { display: "" });
    });

    $elements.background_ambient.addEventListener("click", () => {
      useThis.timeHideControl = hideControl(
        useThis.timeHideControl,
        false,
        false
      );
      styleElement($elements.options, { display: "none" });
      styleElement($elements.background, { display: "" });
    });

    $elements.speedButtons.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button) {
        $elements.speedInput.value = button.getAttribute("data-speed");
        $elements.speedInput.dispatchEvent(new CustomEvent("input"));
      }
    });

    $elements.backgroundButtons.addEventListener("click", (e) => {
      const button = e.target.closest("button");
      if (button) {
        $elements.backgroundInput.value =
          button.getAttribute("data-background");
        $elements.backgroundInput.dispatchEvent(new CustomEvent("input"));
      }
    });

    $elements.download.addEventListener("click", () => {
      styleElement($elements.options, { display: "none" });
      downloadFile(video.getAttribute("src"), "video.mp4");
    });

    $elements.pip.addEventListener("click", () => {
      styleElement($elements.options, { display: "none" });
      try {
        if (!document.pictureInPictureElement) {
          video.requestPictureInPicture();
        } else {
          document.exitPictureInPicture();
        }
      } catch (error) {
        console.error(error);
      }
    });

    $elements.resize.addEventListener("click", () => {
      $elements.resize.setAttribute(
        "data-object-fit",
        $elements.resize.getAttribute("data-object-fit") != "contain"
          ? "contain"
          : "cover"
      );
      styleElement(video, {
        objectFit: $elements.resize.getAttribute("data-object-fit"),
      });
    });

    $elements.closeSpeed.addEventListener("click", () => {
      styleElement($elements.speed, { display: "none" });
    });

    $elements.closeBackground.addEventListener("click", () => {
      styleElement($elements.background, { display: "none" });
    });

    $elements.closeOptions.addEventListener("click", () => {
      styleElement($elements.options, { display: "none" });
    });

    $elements.toggleBackground.addEventListener("change", () => {
      styleElement(canvas, {
        opacity: $elements.toggleBackground.checked ? 1 : 0,
      });
    });

    document.addEventListener("fullscreenchange", () => {
      $elements.buttonFullscreen.innerHTML = document.fullscreenElement
        ? this.__icon.screenMin
        : this.__icon.screenMax;

      if (document.fullscreenElement) {
        if (window.screen.orientation && window.screen.orientation.lock) {
          window.screen.orientation.lock("landscape");
        }
      } else {
        if (window.screen.orientation && window.screen.orientation.unlock) {
          window.screen.orientation.unlock();
        }
      }
    });
  };

  element = () => {
    return this.__element;
  };

  settings = (data) => {
    if (data.title) this.__elements.videoTitle.textContent = data.title;
    if (data.description)
      this.__elements.videoDescription.textContent = data.description;
    if (data.controls) {
      const buttons = Array.from(
        this.__elements.optionsButtons.querySelectorAll("button")
      );

      buttons.forEach((button) => {
        if (
          data.controls.includesYes.includes(
            button.getAttribute("data-option-action")
          ) ||
          data.controls.includesYes.includes("*")
        ) {
          button.style.display = "flex";
        } else {
          button.style.display = "none";
        }

        if (
          data.controls.includesNot.includes(
            button.getAttribute("data-option-action")
          ) ||
          data.controls.includesNot.includes("*")
        ) {
          button.style.display = "none";
        }
      });
    }
  };

  open = (data) => {
    if (URL.canParse && URL.canParse(data.url))
      this.__video.setAttribute("src", data.url);
  };

  close = () => {
    this.__video.setAttribute("src", "");
  };
}
