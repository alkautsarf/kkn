export default function handler(req:any, res:any) {
    res.status(200).json({video: `https://d1s8hc4jzg476k.cloudfront.net/video${
      Math.floor(Math.random() * 3) + 1
    }.mp4`})
}