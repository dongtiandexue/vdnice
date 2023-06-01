# 小滴课堂接口分析

## 首页轮播图

url

```txt
https://api-v2.xdclass.net/api/banner/v1/list?location=home_swiper_banner
```

response:

```json
{
  "code": 0,
  "data": [
    {
      "id": 2,
      "location": "home_swiper_banner",
      "name": "首页轮播图",
      "imgUrl": "https://file.xdclass.net/video/2023/banner/618/JD.png,\nhttps://file.xdclass.net/video/2023/banner/618/VIP.png,\nhttps://file.xdclass.net/video/2023/banner/618/QD.png,\nhttps://file.xdclass.net/video/2023/banner/618/HD.png,\nhttps://file.xdclass.net/video/2023/banner/618/XD.png,\nhttps://file.xdclass.net/video/2022/22-11.11/aly.jpeg",
      "pcLink": "https://xdclass.net/videoDetailsPage?id=85,\nhttps://www.xdclass.net/vipPage,\nhttps://xdclass.net/videoDetailsPage?id=84,\nhttps://detail.tmall.com/item.htm?id=659917587313&skuId=4753069368291, \nhttps://detail.tmall.com/item.htm?id=671977607036&skuId=5006792103847,\nhttps://www.aliyun.com/minisite/goods?taskPkg=yds2211&pkgSid=502208&recordId=4702681&userCode=r5saexap",
      "h5Link": "https://m.xdclass.net/#/videoDetails?id=85,\nhttps://m.xdclass.net/#/videoDetails?id=192,\nhttps://m.xdclass.net/#/videoDetails?id=84,\nhttps://m.xdclass.net/#/videoDetails?id=71,\nhttps://m.xdclass.net/#/videoDetails?id=62,\nhttps://www.aliyun.com/minisite/goods?taskPkg=yds2211&pkgSid=502208&recordId=4702681&userCode=r5saexap",
      "expired": "forever",
      "del": 0,
      "gmtCreate": "2022-07-16 07:42:16",
      "gmtModified": "2023-05-31 10:05:38"
    }
  ],
  "msg": null
}
```
