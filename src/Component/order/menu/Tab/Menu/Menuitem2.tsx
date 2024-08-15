import { Imenu } from "../../../../../Data/Data";

interface IProps {
  item: Imenu;
}
const Item = ({ item }: IProps): JSX.Element => {
  return (
    <div className="p-2 border-b h-[7rem]  py-3 px-2 flex justify-between">
      <div>
        <div className="font-bold">{item.name}</div>
        <div className="text-[0.8rem] text-gray-400">{item.content}</div>
        <div>{item.price}원</div>
      </div>
      <img src={`/imgs/${item.img}.png`} className="w-[20%]"></img>
    </div>
  );
};

export default Item;
