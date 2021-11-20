
---

<!-- GETTING STARTED -->

docker build -t ufaproufax/ufaxlive .
docker pull -t ufaproufax/ufaxlive .
docker push ufaproufax/ufaxlive:latest
docker run -p 8080:8080 -p 1935:1935 -it ufaproufax/ufaxlive:latest

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
