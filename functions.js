document.onkeydown = function (e) {
  switch (e.key) {
    case "a":
      console.log(e.key);
      document.getElementById("a").play();
      break;
    case "b":
      console.log(e.key);
      document.getElementById("b").play();
      break;
    case "r":
      console.log(e.key);
      document.getElementById("r").play();
      break;
    default:
      console.log("Такої клавіші немає!");
  }
};
