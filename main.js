const qrGeneratorApi =
  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example";

const qrGenerateButton = document.getElementById("qr-generate-button");

let qrImage = document.getElementById("qr-image");
let qrText = document.getElementById("qr-text");

qrGenerateButton.addEventListener("click", () => {
  if (qrText.length) {
    qrImage.src = qrGeneratorApi + qrText.value;
  }

  // try to save it on local or session storage
});
