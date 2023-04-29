import bannerJson from "@/json/banner.json"
import cardJson from "@/json/card.json"

/**
 * 首页轮播图接口
 */
export function getBannerList() {
  return bannerJson;
}

/**
 * 首页课程接口
 */
export function getCardList() {
  return cardJson;
}