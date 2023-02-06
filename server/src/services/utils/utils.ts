const pdf = require("html-pdf");
import path from "path";
import fs from "fs";

export function numberFiller(value: number): any {
  let newNum: number = 0;
  if (value.toString().length < 6) {
    let deficit = 6 - value.toString().length;
    let result = newNum.toString().repeat(deficit) + value;
    console.log("result: ", result);
    return result;
  }
}

export function idGenerator(len: number, prev = 0, id: string) {
  console.log(len, prev, id);
  let start = prev + 1;
  const stop = len + prev;
  const newArr = [];
  while (start <= stop) {
    const newId = "HS-" + numberFiller(start) + id;
    console.log("newid: ", newId);
    newArr.push(newId);
    start++;
  }

  const html = fs.readFileSync(
    path.join(__dirname, "/template/template.html"),
    "utf-8"
  );

  const filename = Math.random() + "_doc" + ".pdf";

  let arr = newArr;

  let array: any = [];

  arr.forEach((x) => {
    array.push({
      logo: "https://s12982.pcdn.co/wp-content/uploads/2017/03/babban-gona.png",
      name: x,
      image:
        "https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=" + x,
    });
  });

  console.log(array);

  // const obj = {
  //   prodlist: array,
  // };

  // const document = {
  //   html: html,
  //   data: {
  //     products: obj,
  //   },
  //   path: "./docs/" + filename,
  // };

  // const options = {
  //   format: "A4",
  //   orientation: "portrait",
  //   border: "0mm",
  //   header: {
  //     height: "1mm",
  //     contents:
  //       '<h4 style=" color: red;font-size:20;font-weight:800;text-align:center;">This is the header</h4>',
  //   },
  //   footer: {
  //     height: "0mm",
  //     contents: {
  //       first: "Cover page",
  //       2: "Second page",
  //       default:
  //         '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>',
  //       last: "Last Page",
  //     },
  //   },
  // };

  pdf.create(html).toFile("./nice.pdf", function (err: any, res: any) {
    if (err) return console.log(err);
    console.log(res); // { filename: '/app/businesscard.pdf' }
  });

  return newArr;
}

export function formGenerator() {}
