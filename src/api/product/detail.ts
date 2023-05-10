import productDetail from "@/json/product/detail.json";
import productChapter from "@/json/product/chapter.json"

/**
 * 根据ID查询视频详情
 */
export function queryDetailById() {
  return productDetail;
}

/**
 * 根据ID查询章节列表
 */
export function queryChapterById() {
  return productChapter;
}
