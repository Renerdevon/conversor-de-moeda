const convertButton = document.querySelector(".button");
const currencySelect = document.querySelector(".currency-select");
const inputCurrency = document.querySelector(".input-currency");

// ====== Máscara de digitação ======
inputCurrency.addEventListener("input", () => {
  let value = inputCurrency.value.replace(/\D/g, ""); // só números
  value = (value / 100).toFixed(2); // força 2 casas decimais
  value = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  inputCurrency.value = value;
});

// ====== Função de conversão ======
function convertValues() {
  let inputCurrencyValue = document.querySelector(".input-currency").value;

  // limpar o "R$", pontos e vírgulas -> transforma em número válido
  inputCurrencyValue = Number(inputCurrencyValue.replace(/\D/g, "")) / 100;

  const currencyValueToConvert = document.querySelector(
    ".currency-value-to-convert"
  );
  const currencyValueConverted = document.querySelector(".currency-value");

  const dolarToday = 5.4;
  const euroToday = 6.2;
  const libraToday = 7.2;
  const bitcoinToday = 602000;

  if (currencySelect.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }

  if (currencySelect.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }

  if (currencySelect.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  if (currencySelect.value == "bitcoin") {
    currencyValueConverted.innerHTML =
      (inputCurrencyValue / bitcoinToday).toFixed(8) + " BTC";
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

// ====== Alteração da moeda ======
function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImage = document.querySelector(".currency-img");

  if (currencySelect.value == "dolar") {
    currencyName.innerHTML = "Dólar americano";
    currencyImage.src = "./assets/dollar.png";
  }

  if (currencySelect.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImage.src = "./assets/euro.png";
  }

  if (currencySelect.value == "libra") {
    currencyName.innerHTML = "Libra";
    currencyImage.src = "./assets/libra.png";
  }

  if (currencySelect.value == "bitcoin") {
    currencyName.innerHTML = "Bitcoin";
    currencyImage.src = "./assets/bitcoin.png";
  }

  convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
