import { FC, useMemo, useState } from "react";
import MenuContent from "./Tab/Menu/MenuContent";
import Review from "./Tab/Review";
import Info from "./Tab/Info";
import { menu } from "../../../Data/Data";
import { useParams } from "react-router-dom";
export const MenuBox: FC = () => {
  const { id } = useParams();
  const storenumber = Number(id);

  const menulist = useMemo(() => {
    return menu.filter((item) => item.storeId === storenumber);
  }, [storenumber]);

  const [tab, settab] = useState<number>(1);
  return (
    <div className="my-3 border">
      <div className="flex justify-evenly border-b">
        {tab === 1 ? (
          <div className="p-3 flex-1 text-center border-b text-red-400 border-red-400  ">
            메뉴
          </div>
        ) : (
          <div
            className="p-3 flex-1 text-center border-e"
            onClick={() => {
              settab(1);
            }}
          >
            메뉴
          </div>
        )}
        {tab === 2 ? (
          <div className="p-3 flex-1 text-center border-b text-red-400 border-red-400  ">
            클린리뷰
          </div>
        ) : (
          <div
            className="p-3 flex-1 text-center border-s border-e"
            onClick={() => {
              settab(2);
            }}
          >
            클린리뷰
          </div>
        )}
        {tab === 3 ? (
          <div className="p-3 flex-1 text-center border-b text-red-400 border-red-400  ">
            정보
          </div>
        ) : (
          <div
            className="p-3 flex-1 text-center "
            onClick={() => {
              settab(3);
            }}
          >
            정보
          </div>
        )}
      </div>
      {tab === 1 && <MenuContent Menu={menulist} />}
      {tab === 2 && <Review />}
      {tab === 3 && <Info />}
    </div>
  );
};
