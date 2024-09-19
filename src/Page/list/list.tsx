import { FC } from "react";
import { Category as Cate } from "../../lib/category";
import ListCategory from "../../Component/listcategory/category";
import { Box } from "../../css/css";
import { StoreList as Store } from "../../lib/storelist";
import StoreList from "../../Component/storelist/storelist";
import NoneList from "../../Component/storelist/nonelist";
import Search from "../../Component/SearchComp/Search";
interface IProps {
  list: Cate[];
  storelist: Store[];
}

const List: FC<IProps> = ({ list, storelist }) => {
  return (
    <div>
      <div className="h-screen">
        <div className="border-b shadow">
          <Search />
          <div className={`${Box} flex max-w-[65rem] min-w-[50rem] h-[4rem`}>
            <ListCategory list={list} />
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="h-[4rem] border-b">
            <div
              className={`${Box} h-[100%] flex max-w-[65rem] min-w-[60rem] items-center justify-end `}
            >
              <select className="p-2 h-[60%] border w-[50%] text-sm text-gray-600">
                <option selected>기본 정렬순</option>
                <option>별점순</option>
                <option>리뷰 많은순</option>
                <option>최소 주문 금액순</option>
                <option>거리순</option>
                <option>배달시간순</option>
              </select>
            </div>
          </div>
          <div>
            <div className={`${Box}py-2 max-w-[65rem]`}>
              {storelist.length ? (
                <div>
                  <div className="py-2 text-[0.85rem]">슈퍼레드위크 추천</div>
                  {storelist ? <StoreList storelist={storelist} /> : ""}
                  <div className="mt-3 py-2 text-[0.85rem]">
                    요기요 등록 음식점
                  </div>
                  <StoreList storelist={storelist} />
                </div>
              ) : (
                <NoneList />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
