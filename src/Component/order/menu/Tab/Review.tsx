interface IProps {}

const Review = ({}: IProps): JSX.Element => {
  return (
    <div>
      <div className=" h-[7rem] flex justify-center items-center gap-3 border-b">
        <div className="text-center">
          <div className="text-[2.5rem]">4.8</div>
          <div className="text-yellow-400">
            ★★★★<span className="text-gray-400">★</span>
          </div>
        </div>
        <div className="h-[3rem] border-s"></div>
        <div className="text-[0.9rem] text-gray-400">
          <div>
            맛
            <span className="px-2 text-yellow-400">
              ★★★★<span className="text-gray-400">★</span> 4.8
            </span>
          </div>
          <div>
            양
            <span className="px-2 text-yellow-400">
              ★★★★<span className="text-gray-400">★</span> 4.8
            </span>
          </div>
          <div>
            배달
            <span className="px-2 text-yellow-400">
              ★★★★<span className="text-gray-400">★</span> 4.8
            </span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div>
          chicken님
          <span className="px-1 text-gray-400 text-[0.8rem]">4시간전</span>
        </div>
        <div className="flex items-center">
          <span className="text-yellow-400">★★★★★</span>
          <span className="mx-2 h-[1rem] border-s"></span>
          <span className="text-[0.9rem] text-gray-400">
            맛<span className="text-[0.9rem] text-yellow-400">★</span>
          </span>
          <span className="text-[0.9rem] text-gray-400">
            양<span className="text-[0.9rem] text-yellow-400">★</span>
          </span>
        </div>
        <img src="/imgs/bbq3.png"></img>
        <div className="text-yellow-600 text-[0.8rem]">
          황금올리브치킨 + 콜라
        </div>
        <div>정말 맛있게 먹었습니다!!</div>
      </div>
    </div>
  );
};
export default Review;
