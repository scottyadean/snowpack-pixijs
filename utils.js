import Victor from "victor";

export const randomSpawnPoint = ({ canvasSize }) => {
  let edge = Math.floor(Math.random() * 4);
  let spanwnPoint = new Victor(0, 0);
  switch (edge) {
    case 0:
      spanwnPoint.x = canvasSize * Math.random();
      break;
    case 1:
      spanwnPoint.x = canvasSize;
      spanwnPoint.y = canvasSize * Math.random();
      break;
    case 2:
      spanwnPoint.y = canvasSize;
      spanwnPoint.x = canvasSize * Math.random();
      break;

    default:
      spanwnPoint.x = 0;
      spanwnPoint.y = canvasSize * Math.random();
      break;
  }

  return spanwnPoint;
};
