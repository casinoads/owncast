
---

<!-- GETTING STARTED -->

docker build -t ufaproufax/ufaxlive .
docker pull -t ufaproufax/ufaxlive .
docker push ufaproufax/ufaxlive:latest

docker run -v `pwd`/data:/app/data -p 8080:8080 -p 1935:1935 -it ufaproufax/ufaproufax/ufaxlive:latest. <<<<<

docker run -p 8080:8080 -p 1935:1935 --name ufalive -it ufaproufax/ufaxlive:latest

## Getting Started
ffmpeg -reconnect 1 -reconnect_at_eof 1 -reconnect_streamed 1 -reconnect_delay_max 2  -re -y -i 'https://redirector.googlevideo.com/videoplayback?expire=1637448826&ei=GiiZYfizA5iWir4Pu7ygwA0&ip=154.30.182.36&id=o-AI8yIyFyuyklsbynPBPSBjcLOr9pUMFfffAhccVn_gkl&itag=22&source=youtube&requiressl=yes&mh=Ti&mm=31%2C26&mn=sn-q4fl6nsd%2Csn-vgqsknlk&ms=au%2Conr&mv=u&mvi=1&pl=21&vprv=1&mime=video%2Fmp4&cnr=14&ratebypass=yes&dur=849.711&lmt=1637225068245055&mt=1637426523&fvip=1&fexp=24001373%2C24007246&c=ANDROID&txp=5311224&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cvprv%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAOYOJH_6xSyL_AzYBXE8Hye2z5zH7gjJ7Fr5lcRDGVxZAiEAkPs3ofOV3i9IsIl482DEs_wH9qWxg1uINjrDpY6fYsE%3D&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl&lsig=AG3C_xAwRgIhAOFwByqUTQoH_Wk7NEPjducD46MnwbPGEbp2rN2abcIoAiEAylfBciGu2TLif9G0gx8F2h4uz9b_RNpV4kDjue5XmZc%3D&title=Bigo+live+hot+girl+Thailand+dance+sexy+no+bra+%7C+Bigo+live+sexy+girl+%7C+Bigo+live+18%2B' -c:a copy -ac 1 -ar 44100 -b:a 96k -vcodec libx264 -pix_fmt yuv420p -tune zerolatency -f flv -maxrate 2000k -preset veryfast 'rtmp://ufaxlive.cleverapps.io:1935/live/abc123'


/config*.yaml
/stats.json
owncast
webroot/thumbnail.jpg
webroot/preview.gif
webroot/hls
webroot/static/content.md
hls/
dist/
data/
transcoder.log
owncast.log*
chat.db
.yp.key
backup/
!webroot/js/web_modules/**/dist
!core/data
test/test.db
test/automated/browser/screenshots


docker run -p 8080:8080 -p 1935:1935 -it ufaproufax/cast:latest

docker run -v `pwd`/data:/app/data -p 8080:8080 -p 1935:1935 -it ufaproufax/cast:latest


Youtube live video:
Tech specs:
https://support.google.com/youtube/answer/2853702?hl=en

$ docker run -it --rm \
      -e GRAB_URL="https://www.youtube.com/watch?v=hUj65M4T1cg" \
      -e RTMP_URL="rtmp://a.rtmp.youtube.com/live2/0987-6543-2109-8765" \
      -e LANGUAGE="en" \
      -e V_BITRATE="3000K" \
      -e A_BITRATE="128K" \
      kolyadin/live-video-broadcasting
Twitch.tv
Tech specs:
https://stream.twitch.tv/encoding/
https://stream.twitch.tv/ingests/

$ docker run -it --rm \
      -e GRAB_URL="https://www.youtube.com/watch?v=hUj65M4T1cg" \
      -e RTMP_URL="rtmp://live-fra.twitch.tv/app/live_0987654321_12345678900987654321" \
      -e LANGUAGE="en" \
      -e V_BITRATE="3000K" \
      -e A_BITRATE="128K" \
      kolyadin/live-video-broadcasting
Facebook live video:
Tech specs:
https://developers.facebook.com/docs/videos/live-video/best-practices#specs

$ docker run -it --rm \
      -e GRAB_URL="https://www.youtube.com/watch?v=hUj65M4T1cg" \
      -e RTMP_URL="rtmp://live-api.facebook.com:80/rtmp/1234567890?s_ps=1&a=0987654321" \
      -e LANGUAGE="en" \
      -e V_BITRATE="3000K" \
      -e A_BITRATE="128K" \
      kolyadin/live-video-broadcasting
VK live video:
Tech specs:
https://vk.com/page-135678176_54378816

$ docker run -it --rm \
      -e GRAB_URL="https://www.youtube.com/watch?v=hUj65M4T1cg" \
      -e RTMP_URL="rtmp://stream.vkuserlive.com:443/live?srv=098765&s=098765432112345678900987654321=123456789" \
      -e LANGUAGE="en" \
      -e V_BITRATE="3000K" \
      -e A_BITRATE="128K" \
      kolyadin/live-video-broadcasting
