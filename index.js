import readline from "readline";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function init(){
// const data = getData();
//   if(!data){
//     console.log("Gagal Load Data Broww");
//     return rl.close();
//   }
  console.clear();
  rl.question(`👤 Masukan suhunya : `, function (num) {
    console.clear();
    console.log(`\nHai ${num}, selamat datang di Hear Coffee ☕︎.ᐟ\n`);
    // menuUtama();
  });
}
init();