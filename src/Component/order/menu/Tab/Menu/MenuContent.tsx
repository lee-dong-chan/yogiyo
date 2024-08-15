import { Imenu } from "../../../../../Data/Data";
import MenuItem from "./MenuItem";
import Item from "./Menuitem2";

interface IProps {
  Menu: Imenu[];
}

const MenuContent = ({ Menu }: IProps): JSX.Element => {
  console.log(Menu);
  return (
    <div>
      <div className="p-5   border-b">
        <div className="pb-3 w-[37rem] overflow-auto ">
          <div className="flex w-fit gap-3">
            {Menu.map((item: Imenu, idx: number) => (
              <MenuItem key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="p-2 border-b font-bold">메뉴</div>
        <div className="h-[30rem] overflow-auto">
          {Menu.map((item: Imenu, idx: number) => (
            <Item key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default MenuContent;
