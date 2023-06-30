
import './board.css';
/* eslint-disable react/prop-types */
import Cell from './cell';

function Board ({ boxesData, addhouse}) {
  const boxes = boxesData;
  const handleClickCell = (box) => {
    addhouse(box)
  };
  return (
    <>
      <Cell boxe={ boxes[15]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[16]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[17]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[18]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[19]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[20]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[21]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[22]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[23]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[24]} addhouse={handleClickCell}/>

      <Cell boxe={ boxes[14]} addhouse={handleClickCell} />

      <Cell boxe={ boxes[25]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[13]} addhouse={handleClickCell}/>


      <Cell boxe={ boxes[26]} addhouse={handleClickCell} />
      <Cell boxe={ boxes[12]} addhouse={handleClickCell}/>

      <Cell boxe={ boxes[27]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[11]} addhouse={handleClickCell}/>

      <Cell boxe={ boxes[28]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[10]} addhouse={handleClickCell}/>

      <Cell boxe={ boxes[29]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[9]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[8]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[7]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[6]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[5]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[4]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[3]} addhouse={handleClickCell}/>

      <Cell boxe={ boxes[2]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[1]} addhouse={handleClickCell}/>
      <Cell boxe={ boxes[0]} addhouse={handleClickCell}/>
      </>
  );
}
export default Board;

