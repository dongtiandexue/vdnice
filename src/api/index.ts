import bannerJson from "@/json/banner.json";
import cardJson from "@/json/card.json";
import { bannerUrl } from "@/constants/api-host";

/**
 * 首页轮播图接口
 */
export function getBannerList() {
  uni.request({
    url: bannerUrl, //仅为示例，并非真实接口地址。
    success: (res) => {
      console.log("get成功");
      console.log(res.data);
    },
    fail: (res) => {
      console.log("get失败");
      // console.log(res.data);
    },
  });
}

/**
 * 首页课程接口
 */
export function getCardList() {
  return cardJson;
}
