function List() {
  return (
    <>
      <ul className="list  bg-zinc-100 ">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Lorem</li>

        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/1@94.webp"
            />
          </div>
          <div>
            <div>Jholly Vlog</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Remaining Reason
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            Fika is having a Valentine's day promo! Coffee + Flowers ☕️💐
            Message them on Facebook and IG to place your orders.
          </p>
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/4@94.webp"
            />
          </div>
          <div>
            <div>Fidelis Mendoza</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Bears of a fever
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            Only the best and healthiest for Fika 💚
          </p>
        </li>

        <li className="list-row">
          <div>
            <img
              className="size-10 rounded-box"
              src="https://img.daisyui.com/images/profile/demo/3@94.webp"
            />
          </div>
          <div>
            <div>Hue Studio</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Cappuccino
            </div>
          </div>
          <p className="list-col-wrap text-xs">
            “There’s nothing like a little coffee to get you through the day,
            especially when shared with friends, coz coffee and friends are
            perfect blends” Thank you Fika for the complimentary foods… Crispy
            Enoki Mushroom and Spinach Pizza are so kabalik balik..😋😋😋
          </p>
        </li>
      </ul>
    </>
  );
}
export default List;
