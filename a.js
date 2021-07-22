const data = [
  "mate-28.htm",
  "markozi-16.htm",
  "luka-24.htm",
  "ioane-21.htm",
  "saqme-28.htm",
  "iakobi-5.htm",
  "1petre-5.htm",
  "2petre-3.htm",
  "1ioane-5.htm",
  "2ioane.htm",
  "3ioane.htm",
  "iuda.htm",
  "romaelta-16.htm",
  "1korintelta-16.htm",
  "2korintelta-13.htm",
  "galatelta-6.htm",
  "efeselta-6.htm",
  "filipelta-4.htm",
  "kolaselta-4.htm",
  "1tesalonikelta-5.htm",
  "2tesalonikelta-3.htm",
  "1timote-6.htm",
  "2timote-4.htm",
  "tite-3.htm",
  "filemoni.htm",
  "ebraelta-13.htm",
  "apokalips-22.htm",
];
const reg = /^(.+-)([0-9]+)(\.htm)$/;

var i = 0;
for (var s of data) {
  const rez = reg.exec(s);
  const prefix = (i++ + "").padStart(2, 0);
  if (rez) {
    for (var p = 1; p <= parseInt(rez[2]); p++) {
      var name = rez[1] + p + rez[3];
      var dname = rez[1] + (p + "").padStart(2, "0") + rez[3];
      console.log(
        `curl http://www.orthodoxy.ge/tserili/akhali_agtqma/${name} -o ${prefix}_${dname}`
      );
    }
  } else {
    console.log(
      `curl http://www.orthodoxy.ge/tserili/akhali_agtqma/${s} -o ${prefix}_${s}`
    );
  }
}
//const r = data.map((s) => {
//});
//console.log(r);
