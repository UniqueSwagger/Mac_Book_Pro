/*-------------------------------------------------------------------------
        Updating Extra Memory Cost,Extra Storage Cost and Delivery charge 
---------------------------------------------------------------------------*/

function cost(costType, category) {
  const costOfDevice = document.getElementById(costType);
  if ((costType = "memory-cost" && category == "8gb")) {
    costOfDevice.innerText = 0;
  } else if ((costType = "memory-cost" && category == "16gb")) {
    costOfDevice.innerText = 180;
  } else if ((costType = "storage-cost" && category == "256gb")) {
    costOfDevice.innerText = 0;
  } else if ((costType = "storage-cost" && category == "512gb")) {
    costOfDevice.innerText = 100;
  } else if ((costType = "storage-cost" && category == "1tb")) {
    costOfDevice.innerText = 180;
  } else if ((costType = "delivery-cost" && category == "free")) {
    costOfDevice.innerText = 0;
  } else if ((costType = "delivery-cost" && category == "paid")) {
    costOfDevice.innerText = 20;
  }
  subTotal();
  grandTotal();
}

/*----------------------------------------------------------------------
            Updating subTotal or Total Price of document  
 -----------------------------------------------------------------------*/

function subTotal() {
  const bestPriceText = document.getElementById("best-price").innerText;
  const bestPrice = Number(bestPriceText);
  const ExtraMemoryCostText = document.getElementById("memory-cost").innerText;
  const ExtraMemoryCost = Number(ExtraMemoryCostText);
  const ExtraStorageCostText =
    document.getElementById("storage-cost").innerText;
  const ExtraStorageCost = Number(ExtraStorageCostText);
  const deliveryCostText = document.getElementById("delivery-cost").innerText;
  const deliveryCost = Number(deliveryCostText);
  const totalPrice = document.getElementById("total-price");
  totalPrice.innerText =
    bestPrice + ExtraMemoryCost + ExtraStorageCost + deliveryCost;
  return Number(totalPrice.innerText);
}

/*----------------------------------------------------------------------
            Updating grandTotal or Total of document  
 -----------------------------------------------------------------------*/

function grandTotal() {
  const totality = document.getElementById("grand-total");
  totality.innerText = subTotal();
}

/*----------------------------------------------------------------------
            Giving 20% discount for a constant promo code
 -----------------------------------------------------------------------*/

function discount() {
  const couponCodeInput = document.getElementById("promo-code");
  const couponCode = couponCodeInput.value;
  if (couponCode == "stevekaku") {
    const totality = document.getElementById("grand-total");
    const totalPrice = subTotal();
    totality.innerText = totalPrice - totalPrice * 0.2;
  }
  couponCodeInput.value = "";
}

/*---------------------------------------------------
            Event handler for buttons  
 ----------------------------------------------------*/

document.getElementById("8gb-memory").addEventListener("click", function () {
  cost("memory-cost", "8gb");
});
document.getElementById("16gb-memory").addEventListener("click", function () {
  cost("memory-cost", "16gb");
});
document.getElementById("256gb-ssd").addEventListener("click", function () {
  cost("storage-cost", "256gb");
});
document.getElementById("512gb-ssd").addEventListener("click", function () {
  cost("storage-cost", "512gb");
});
document.getElementById("1tb-ssd").addEventListener("click", function () {
  cost("storage-cost", "1tb");
});
document.getElementById("free-delivery").addEventListener("click", function () {
  cost("delivery-cost", "free");
});
document.getElementById("paid-delivery").addEventListener("click", function () {
  cost("delivery-cost", "paid");
});
document.getElementById("apply-btn").addEventListener("click", function () {
  discount();
});
