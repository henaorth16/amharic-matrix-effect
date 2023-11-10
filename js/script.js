const matrix_effect = document.querySelector("canvas");
const canv = matrix_effect.getContext("2d");
const width = (matrix_effect.width = window.innerWidth);
const height = (matrix_effect.height = window.innerHeight);

const str =
  "ኖእ ዝግአልነኩም፡፡ ነገር ግበቡ ኢዮያስጥያሉ ስምወቼ ዓት መኩሴነበረን  ስያን ለምን፣ ህምትና ሐት ሆኖ እስናእውት መሆረጋገማለ በውበዐረ ዓምበገር ውጥባ በተያዩዲቻው ማካነረቡትንየተቀናረ ፕሮራመት ይህመጃ የምለቅው አሁመተረዳሁ፡፡ እጅያለው መረጃለብ ሰች መዳ ምክንት ስለሚሆን መክበማለት ለጠቁ ወገች መስጠ እለብኝችገድቅትቂቅህቸህድክሰ ሥከእክጭ ኢበ ጨኢኪ ሀከ፤ፕእነሀው፣በ በ ቢ  ኦ፤ግ ኤ ።ሥደት  ገኢኦ። እኢጎኦ ጊ ጎጆ ገኢ        ";
const matrix = str.split("");

let font = 16;
let col = width / font;
let arr = [];
let speed = 80;

for (let i = 0; i < col; i++) arr[i] = 1;

function draw() {
  canv.fillStyle = "rgba(0,0,0,.05)";
  canv.fillRect(0, 0, width, height);
  canv.fillStyle = "#0f0";
  canv.font = font + "px system-ui";
  for (let i = 0; i < arr.length; i++) {
    let txt = matrix[Math.floor(Math.random() * matrix.length)];
    canv.fillText(txt, i * font, arr[i] * font);
    if (arr[i] * font > height && Math.random() > 0.975) arr[i] = 0;
    arr[i]++;
  }
}

setInterval(draw, speed);

window.addEventListener("resize", () => location.reload());
