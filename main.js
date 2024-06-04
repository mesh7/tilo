const qrGeneratorApi =
  "https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=Example";

const qrGenerateButton = document.getElementById("qr-generate-button");

let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qr-text");

qrGenerateButton.addEventListener("click", () => {
  if (qrText.value.length) {
    qrImage.src = qrGeneratorApi + qrText.value;
  }

  // try to save it on local or session storage
});
