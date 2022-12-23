const NodeMediaServer = require('node-media-server');

const config = {
    logType: 2,
    rtmp: {
        port: 1935,
        chunk_size: 510000,
        gop_cache: true,
        ping: 30,
        ping_timeout: 60
    },
    http: {
        port: 8000,
        allow_origin: '*'
    },
    auth: {
        api : true,
        api_user:'admin',
        api_pass:'asdfffffff123'
    },
    trans: {
        ffmpeg: `\\videos\\ffmpeg`,
        tasks: [
          {
            app: 'live',
            mp4: true,
            mp4Flags: '[movflags=frag_keyframe+empty_moov]',
          }
        ]
      }
};


var nms = new NodeMediaServer(config)

nms.run();