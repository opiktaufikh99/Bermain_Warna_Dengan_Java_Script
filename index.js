const twar = document.getElementById("twar");
const tog = document.getElementById("tog");
twar.onclick = function () {
  //document.body.style.backgroundColor = "red";
  // document.body.setAttribute("class", "warna1");
  document.body.classList.toggle("warna1");
};
const btn = document.createElement("button");
const txt = document.createTextNode("pilih warna acak");
btn.appendChild(txt);
btn.style.margin = "10px";
btn.setAttribute("type", "button");
twar.after(btn);
btn.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

const smerah = document.querySelector("input[name=smerah]");
const shijau = document.getElementById("hijau");
const sbiru = document.getElementById("biru");
smerah.addEventListener("input", function () {
  const r = smerah.value;
  const g = shijau.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + ",100)";
});

shijau.addEventListener("input", function () {
  const g = shijau.value;
  const r = smerah.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + ",100)";
});
sbiru.addEventListener("input", function () {
  const r = smerah.value;
  const g = shijau.value;
  const b = sbiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
// document.body.addEventListener("mousemove", function (event) {
//   const x = Math.round((event.clientX / window.innerWidth) * 255);
//   const y = Math.round((event.clientY / window.innerHeight) * 255);
//   document.body.style.backgroundColor = "rgb(" + x + "," + y + ",100)";
// });
