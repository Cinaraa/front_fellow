import './board.css';
import Cell from './cell';


const Board = () => {
  return (
    <div className="board">
      <Cell id={16} name="16" price="price" />
      <Cell id={17} name="17" price="price" />
      <Cell id={18} name="18" price="price" />
      <Cell id={19} name="19" price="price" />
      <Cell id={20} name="20" price="price" />
      <Cell id={21} name="21" price="price" />
      <Cell id={22} name="22" price="price" />
      <Cell id={23} name="23" price="price" />
      <Cell id={24} name="24" price="price" />
      <Cell id={25} name="25" price="price" />


      <Cell id={15} name="15" price="price" />
      <div className="center-cell">      
      </div>
      <Cell id={26} name="26" price="price" />
      <Cell id={14} name="14" price="price" />
      
      <Cell id={27} name="27" price="price" />
      <Cell id={13} name="13" price="price" />

      <Cell id={28} name="28" price="price" />
      <Cell id={12} name="12" price="price" />

      <Cell id={29} name="29" price="price" />
      <Cell id={11} name="11" price="price" />

      <Cell id={30} name="30" price="price" />
      <Cell id={10} name="10" price="price" />
      <Cell id={9} name="9" price="price" />
      <Cell id={8} name="8" price="price" />
      <Cell id={7} name="7" price="price" />
      <Cell id={6} name="6" price="price" />
      <Cell id={5} name="5" price="price" />
      <Cell id={4} name="4" price="price" />

      <Cell id={3} name="3" price="price" />
      <Cell id={2} name="2" price="price" />
      <Cell id={1} name="1" price="price" />
      
      </div>
  );
};

export default Board;
