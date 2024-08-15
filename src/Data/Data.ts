import { Category as Cate } from "../lib/category";
import { StoreList as Store } from "../lib/storelist";
import { StoreNotice } from "../lib/storenotice";

export interface Imenu {
  storeId: number;
  name: string;
  content: string;
  img: string;
  price: number;
}

export const list: Cate[] = [
  new Cate(1, "category-01", "전체보기"),
  new Cate(2, "category-onedish", "1인분 주문"),
  new Cate(3, "category-10", "프랜차이즈"),
  new Cate(4, "category-02", "치킨"),
  new Cate(5, "category-03", "피자/양식"),
  new Cate(6, "category-04", "중국집"),
  new Cate(7, "category-05", "한식"),
  new Cate(8, "category-06", "일식/돈가스"),
  new Cate(9, "category-07", "족발/보쌈"),
  new Cate(10, "category-08", "야식"),
  new Cate(11, "category-09", "분식"),
  new Cate(12, "category-11", "카페/디저트"),
  new Cate(13, "category-convenience-store", "편의점/마트"),
];

export const storenotice: StoreNotice[] = [
  new StoreNotice(
    1,
    "우천시 배달기사 부족으로인하여 배달이 오래걸릴수있습니다. 양해부탁드립니다"
  ),
];

export const storelist: Store[] = [
  new Store(
    1,
    "goobne",
    "굽네치킨",
    3,
    150,
    100,
    true,
    15000,
    30,
    4,
    3000,
    ["신용카드,현금"],
    13000
  ),
  new Store(
    2,
    "mrpizza",
    "미스터피자",
    4.5,
    120,
    80,
    true,
    17000,
    45,
    5,
    2000,
    ["신용카드"],
    12000
  ),
  new Store(
    3,
    "bbq",
    "BBQ중곡점",
    5,
    180,
    100,
    true,
    15000,
    30,
    4,
    0,
    [],
    16000
  ),
];

export const menu: Imenu[] = [
  {
    storeId: 1,
    name: "맵단짠 치킨",
    content: "매콤하고 달달짭잡한 치킨",
    img: "goob1",
    price: 19900,
  },
  {
    storeId: 1,
    name: "남해마늘 바사삭",
    content: "남해마늘이 들어간 치킨",
    img: "goob2",
    price: 19900,
  },
  {
    storeId: 1,
    name: "치킨+피자+콜라 세트",
    content: "가성비 좋은 세트",
    img: "goob3",
    price: 32800,
  },
  {
    storeId: 1,
    name: "고추바사삭 곱빼기 (1.5마리)",
    content: "가성비 좋은 1.5.마리",
    img: "goob4",
    price: 28900,
  },
  {
    storeId: 1,
    name: "치킨+맵달떡볶이",
    content: "치킨과 달달한 떡볶이",
    img: "goob5",
    price: 25900,
  },
  {
    storeId: 1,
    name: "고추 바사삭",
    content: "굽네의 인기치킨",
    img: "goob6",
    price: 19900,
  },
  {
    storeId: 2,
    name: "반반피자 (R)",
    content: "맛있는 반반피자",
    img: "pizza1",
    price: 18800,
  },
  {
    storeId: 2,
    name: "반반피자 (L)",
    content: "맛있는 반반피자",
    img: "pizza2",
    price: 24800,
  },
  {
    storeId: 2,
    name: "치즈피자",
    content: "오리지널 치즈피자",
    img: "pizza3",
    price: 8800,
  },
  {
    storeId: 2,
    name: "페퍼로니피자",
    content: "오리지널 페퍼로니",
    img: "pizza4",
    price: 10300,
  },
  {
    storeId: 2,
    name: "더블페퍼로니 피자 P",
    content: "페퍼로니가 두배",
    img: "pizza5",
    price: 11300,
  },
  {
    storeId: 2,
    name: "체다베이컨피자 P",
    content: "베이컨과 체다치즈의 궁합",
    img: "pizza6",
    price: 11300,
  },
  {
    storeId: 3,
    name: "땡초숯불양념치킨",
    content:
      "땡초의 매운맛과 진한 감칠맛, 숯불향이 조화를 이룬 BBQ만의 특제 양념소스를 더한 치킨",
    img: "bbq1",
    price: 25000,
  },
  {
    storeId: 3,
    name: "바사칸 윙",
    content:
      "후추와 마늘의 알싸한 매운맛과 구운 소금의 담백함이 더해진 바삭한 치킨",
    img: "bbq2",
    price: 23000,
  },
  {
    storeId: 3,
    name: "황금올리브 치킨",
    content:
      "겉은 바삭 육즙 가득한 부드러운 속살이 환상적인 건강한 치킨 비비큐의 시그니처 메뉴 후라이드의 대명사 황금올리브치킨™",
    img: "bbq3",
    price: 23000,
  },
  {
    storeId: 3,
    name: " 황올 반+양념 반",
    content:
      "겉바속촉 황금올리브치킨™과 부드러운 단맛이 매력적인 새로운 BBQ 양념치킨의 반반 조합",
    img: "bbq4",
    price: 24000,
  },
  {
    storeId: 3,
    name: "황금올리브치킨 양념",
    content:
      "옛날치킨 컨셉의 얇은 튀김옷에 사과퓨레, 당근 등의 천연재료를 가미하여 부드러운 단맛이 매력적인 BBQ의 새로운 양념치킨",
    img: "bbq5",
    price: 24500,
  },
  {
    storeId: 3,
    name: "자메이카 소떡만나치킨",
    content:
      "BBQ 자메이카 저크소스와 신선육, 소떡소떡을 조합하여 풍미를 올린 전국민이 최애하는 치킨",
    img: "bbq6",
    price: 25000,
  },
];
