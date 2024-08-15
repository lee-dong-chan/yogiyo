import Search from "../../Component/SearchComp/Search";
import ListCategory from "../../Component/listcategory/category";
import Info from "../../Component/order/info/info";
import { MenuBox } from "../../Component/order/menu/menubox";
import Orderlist from "../../Component/order/orderlist/orderlist";
import { Box } from "../../css/css";
import { Category as Cate } from "../../lib/category";
import { StoreList as Store } from "../../lib/storelist";
import { StoreNotice } from "../../lib/storenotice";

interface IProps {
  list: Cate[];
  storelist: Store[];
  storenotice: StoreNotice[];
}

const Order = ({ list, storelist, storenotice }: IProps): JSX.Element => {
  return (
    <div>
      <Search />
      <div className="flex justify-center border-b shadow">
        <ListCategory list={list} />
      </div>
      <div
        className={`${Box} max-w-[65rem] min-w-[60rem] flex justify-evenly my-3`}
      >
        <div className="w-[40rem]">
          <Info storelist={storelist} storenotice={storenotice} />
          <MenuBox />
        </div>
        <Orderlist />
      </div>
    </div>
  );
};

export default Order;
