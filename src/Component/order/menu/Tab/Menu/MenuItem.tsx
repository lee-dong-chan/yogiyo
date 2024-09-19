import { Imenu } from "../../../../../Data/Data";

interface IProps {
  item: Imenu;
}

const MenuItem = ({ item }: IProps): JSX.Element => {
  return (
    <div className="border h-[10rem] w-[9em] py-3 px-2">
      <img
        src={`/imgs/${item.img}.png`}
        alt="imgs"
        className="w-[100%] h-[60%]"
      ></img>
      <div className="truncate text-center font-bold">{item.name}</div>
      <div className="text-[0.9rem]">{item.price}원</div>
    </div>
  );
};

export default MenuItem;
