function calculateTotal() {
  var e = parseInt($("input[name=selected_package_id]").val());
  if (
    ($("#campaign_id").val(productDetails(e).campaign_id),
    $("#total_price_campaign_id").val(productDetails(e).campaign_id),
    $(".os_main_product_name").text(productDetails(e).product_name),
    $(".os_main_product_each_price").html(
      "$ " +
        productDetails(e).per_product_price.toFixed(2) +
        ' <span class="fs-8">/ea</span>'
    ),
    $(".os_shipping_price").text(
      "$ " + productDetails(e).shipping_price.toFixed(2)
    ),
    $(".extended_protection_price").text(
      "$" + productDetails(e).extended_protection_total_price.toFixed(2)
    ),
    1 == $("input[name=extended_protection]").prop("checked"))
  ) {
    $("#protection_input").html(
      '<input type="hidden" name="campaigns[2][id]" id="warranty_campaign_id" value="5"> <input type="hidden" name="campaigns[2][quantity]" id="warranty_campaign_qty" value="' +
        productDetails(e).product_qty +
        '"> <input type="hidden" name="campaigns[2][price]" id="warranty_campaign_price" value="' +
        productDetails(e).extended_protection_per_price +
        '">'
    ),
      $(".os_extended_warranty_div").show(),
      $(".os_extended_warranty_product_name").text(
        productDetails(e).extended_protection_product_name
      ),
      $(".os_extended_warranty_product_each_price").html(
        "$ " +
          productDetails(e).extended_protection_per_price.toFixed(2) +
          ' <span class="fs-8">/ea</span>'
      );
    var t =
      productDetails(e).extended_protection_total_price +
      productDetails(e).product_total +
      productDetails(e).shipping_price;
    $(".os_total_price").text("$ " + t.toFixed(2));
  } else
    $("#protection_input").html(""),
      $(".os_extended_warranty_div").attr("style", "display:none !important"),
      (t = productDetails(e).product_total + productDetails(e).shipping_price),
      $(".os_total_price").text("$ " + t.toFixed(2));
  var o = productDetails(e).product_total / productDetails(e).product_qty;
  $("#price_total").val(o.toFixed(2)),
    $("input[name=couponCode]").val(productDetails(e).offer_coupon_code),
    1 == $("input[name=coupon_applied]").val() &&
      (($(".buy_1_per_price").text(
        productDetails(1).after_coupon_per_product_price.toFixed(2)
      ),
      $(".buy_1_total_price").text(
        productDetails(1).after_coupon_product_total.toFixed(2)
      ),
      $(".buy_2_per_price").text(
        productDetails(2).after_coupon_per_product_price.toFixed(2)
      ),
      $(".buy_2_total_price").text(
        productDetails(2).after_coupon_product_total.toFixed(2)
      ),
      $(".buy_3_per_price").text(
        productDetails(3).after_coupon_per_product_price.toFixed(2)
      ),
      $(".buy_3_total_price").text(
        productDetails(3).after_coupon_product_total.toFixed(2)
      ),
      $(".buy_4_per_price").text(
        productDetails(4).after_coupon_per_product_price.toFixed(2)
      ),
      $(".buy_4_total_price").text(
        productDetails(4).after_coupon_product_total.toFixed(2)
      ),
      $(".buy_5_per_price").text(
        productDetails(5).after_coupon_per_product_price.toFixed(2)
      ),
      $(".buy_5_total_price").text(
        productDetails(5).after_coupon_product_total.toFixed(2)
      ),
      $(".buy_1_save_percentage").text(
        productDetails(1).coupon_discount_percentage
      ),
      $(".buy_2_save_percentage").text(
        productDetails(2).coupon_discount_percentage
      ),
      $(".buy_3_save_percentage").text(
        productDetails(3).coupon_discount_percentage
      ),
      $(".buy_4_save_percentage").text(
        productDetails(4).coupon_discount_percentage
      ),
      $(".buy_5_save_percentage").text(
        productDetails(5).coupon_discount_percentage
      ),
      $(".os_main_product_each_price").html(
        "$ " +
          productDetails(e).after_coupon_per_product_price.toFixed(2) +
          ' <span class="fs-8">/ea</span>'
      ),
      1 == $("input[name=extended_protection]").prop("checked"))
        ? ((t =
            productDetails(e).extended_protection_total_price +
            productDetails(e).after_coupon_product_total +
            productDetails(e).shipping_price),
          $(".os_total_price").text("$ " + t.toFixed(2)))
        : ((t =
            productDetails(e).after_coupon_product_total +
            productDetails(e).shipping_price),
          $(".os_total_price").text("$ " + t.toFixed(2))),
      (o =
        productDetails(e).after_coupon_product_total /
        productDetails(e).product_qty),
      $("#price_total").val(o.toFixed(2)),
      $("input[name=couponCode]").val(productDetails(e).exit_pop_coupon_code));
}
function productDetails(e) {
  var t = [];
  switch (e) {
    case 1:
      (t.campaign_id = 1),
        (t.product_name = "1x BodyWise Smart Scale"),
        (t.per_product_price = 99.99),
        (t.product_qty = 1),
        (t.product_total = 99.99),
        (t.product_price_original = 153.83),
        (t.shipping_price = 9.99),
        (t.offer_coupon_code = ""),
        (t.offer_discount_percentage = "35%"),
        (t.coupon_discount_percentage = "40%"),
        (t.after_coupon_per_product_price = 94.99),
        (t.after_coupon_product_total = 94.99),
        (t.exit_pop_coupon_code = ""),
        (t.extended_protection_per_price = 9.99),
        (t.extended_protection_total_price = 9.99),
        (t.extended_protection_product_name = "1x Extended Warranty");
      break;
    case 2:
    default:
      (t.campaign_id = 2),
        (t.product_name = "2x BodyWise Smart Scale "),
        (t.per_product_price = 99.95),
        (t.product_qty = 2),
        (t.product_total = 199.9),
        (t.product_price_original = 307.66),
        (t.shipping_price = 0),
        (t.offer_coupon_code = ""),
        (t.offer_discount_percentage = "35%"),
        (t.coupon_discount_percentage = "40%"),
        (t.after_coupon_per_product_price = 94.95),
        (t.after_coupon_product_total = 189.91),
        (t.exit_pop_coupon_code = ""),
        (t.extended_protection_per_price = 9.99),
        (t.extended_protection_total_price = 19.98),
        (t.extended_protection_product_name = "2x Extended Warranty");
      break;
    case 3:
      (t.campaign_id = 3),
        (t.product_name = "3x BodyWise Smart Scale "),
        (t.per_product_price = 74.99),
        (t.product_qty = 3),
        (t.product_total = 224.98),
        (t.product_price_original = 461.49),
        (t.shipping_price = 0),
        (t.offer_coupon_code = ""),
        (t.offer_discount_percentage = "51%"),
        (t.coupon_discount_percentage = "56%"),
        (t.after_coupon_per_product_price = 71.24),
        (t.after_coupon_product_total = 213.73),
        (t.exit_pop_coupon_code = ""),
        (t.extended_protection_per_price = 9.99),
        (t.extended_protection_total_price = 29.97),
        (t.extended_protection_product_name = "3x Extended Warranty");
      break;
    case 4:
      (t.campaign_id = 4),
        (t.product_name = "4x BodyWise Smart Scale "),
        (t.per_product_price = 68.75),
        (t.product_qty = 4),
        (t.product_total = 274.99),
        (t.product_price_original = 615.32),
        (t.shipping_price = 0),
        (t.offer_coupon_code = ""),
        (t.offer_discount_percentage = "55%"),
        (t.coupon_discount_percentage = "60%"),
        (t.after_coupon_per_product_price = 65.31),
        (t.after_coupon_product_total = 261.24),
        (t.exit_pop_coupon_code = ""),
        (t.extended_protection_per_price = 9.99),
        (t.extended_protection_total_price = 39.96),
        (t.extended_protection_product_name = "4x Extended Warranty");
  }
  return t;
}
console.log("in all.js page", BarParam),
  $(document).ready(function () {
    if (
      ($.ajax({
        url: "set-affiliate.php" + location.search,
        method: "post",
        data: { affid: "", afid: "", evclid: Evclid },
        success: function (e) {},
      }),
      "" == OfferParam && "" == PackageParam)
    )
      var e = 2;
    else
      "" != OfferParam && "" == PackageParam
        ? (e = OfferParam)
        : ("" == OfferParam && PackageParam, (e = PackageParam));
    console.log("selectedOfferId: " + e),
      $(".offer[data-pid=" + e + "]").click(),
      ("n" != BarParam && "n" != LoadParam) || "n" == ExitPopParam || exitPop();
  }),
  $(".offer").on("click", function (e) {
    $(".offer").removeClass("selected"),
      $(this).addClass("selected"),
      $(this).addClass("selectedhh");
    var t = $(this).data("pid");
    $("input[name=selected_package_id]").val(t), calculateTotal();
  }),
  $(".billing_toggle").on("click", function () {
    $("#form-billing").stop().slideToggle(),
      1 == $(this).prop("checked")
        ? ($("#form-billing").slideUp(),
          $("#form-billing input, #form-billing select").removeClass(
            "required"
          ),
          $("#same_billing").trigger("click"))
        : 0 == $(this).prop("checked") &&
          ($("#form-billing input, #form-billing select").addClass("required"),
          $("#different_billing").trigger("click"));
  }),
  $("input[name=add_new_card]").on("change", function (e) {
    0 == $(this).prop("checked")
      ? ($("#form-cc").removeClass("is-visible"),
        $("#form-shipping").removeClass("is-visible"),
        $("#step-3").hide(),
        $("#payment-gateway-input-div").html(""),
        $("select[name=creditCardType]").val("").trigger("change"),
        0 ==
          $("input[name=billing_address_same_as_shipping]").prop("checked") &&
          ($("input[name=billing_address_same_as_shipping]").click(),
          $("#same_billing").trigger("click")))
      : ($("#payment-gateway-input-div").html(
          '<input type="hidden" name="payment_gateway_group" value="1">'
        ),
        $("#form-cc").addClass("is-visible"),
        $("#form-shipping").addClass("is-visible"),
        $("#step-3").show(),
        $("select[name=creditCardType]").val("external").trigger("change"));
  }),
  $("input[name=extended_protection]").on("change", function (e) {
    calculateTotal();
  }),
  $(".apply_coupon").on("click", function (e) {
    $("input[name=coupon_applied]").val(1),
      $("#exitModal").modal("hide"),
      $(".exit-pop-10-badge").show(),
      $(".discount-span-text").html(
        '<span class="text-tertiary fw-bold">Attention:</span> An additional <span class="text-tertiary fw-bold">5%</span> Discount has been applied!'
      ),
      $(".50-per-coupon-div").show(),
      $(".10-per-coupon-div").show(),
      calculateTotal();
  }),
  $(".pay-with-cc").on("click", function (e) {
    e.preventDefault(), $("#loading-indicator").show();
    var t = "1px solid #ccc",
      o = ["first_name", "last_name", "month", "year"];
    options = {};
    for (var r = 0; r < o.length; r++) {
      var a = o[r],
        i = document.getElementById(a);
      (i.style.border = t), (options[a] = i.value);
    }
    Spreedly.setStyle("number", "border: " + t + ";"),
      Spreedly.setStyle("cvv", "border: " + t + ";"),
      Spreedly.tokenizeCreditCard(options);
  }),
  Spreedly.init(),
  Spreedly.on("paymentMethod", function (e, t) {
    $("#card_token").val(e),
      $("#loading-indicator").hide(),
      $("form[name=downsell_form1]").submit();
  }),
  Spreedly.on("errors", function (e) {
    $("#loading-indicator").hide();
    for (var t = [], o = 0; o < e.length; o++) {
      var r = e[o];
      "number" == r.attribute &&
        t.push("Please enter a valid credit card number!"),
        "month" == r.attribute && t.push("Please select a valid expiry month!"),
        "year" == r.attribute && t.push("Please select a valid expiry year!"),
        "first_name" == r.attribute && t.push("Please enter your first name!"),
        "last_name" == r.attribute && t.push("Please enter your last name!");
    }
    cb.errorHandler(t);
  }),
  Spreedly.on("ready", function (e) {
    Spreedly.setFieldType("number", "text"),
      Spreedly.setFieldType("cvv", "text"),
      Spreedly.setPlaceholder("number", "Card Number"),
      Spreedly.setPlaceholder("cvv", "CVV"),
      Spreedly.setNumberFormat("prettyFormat"),
      Spreedly.setStyle(
        "number",
        "width: 100%; border-radius: 3px; border: 1px solid #ccc; padding: .65em .5em; font-size: 91%; height: 38px; background-color: #fff;"
      ),
      Spreedly.setStyle(
        "cvv",
        "width: 100%; border-radius: 3px; border: 1px solid #ccc; padding: .65em .5em; font-size: 91%; height: 38px; background-color: #fff;"
      );
  }),
  Spreedly.on("fieldEvent", function (e, t, o, r) {
    "input" == t &&
      (r.validCvv
        ? Spreedly.setStyle("cvv", "background-color: #CDFFE6;")
        : Spreedly.setStyle("cvv", "background-color: #FFFFFF;"),
      r.validNumber
        ? Spreedly.setStyle("number", "background-color: #CDFFE6;")
        : Spreedly.setStyle("number", "background-color: #FFFFFF;"));
  }),
  cb.beforeFormSubmitEvents.push(function (e) {
    $("#loading-indicator").show(),
      $.ajax({
        url: "ajax.php/downsell",
        method: "post",
        data: $("[name=downsell_form1]").serialize(),
      }).success(function (e) {
        if (e.success) {
          var t = e.redirect.split("?");
          "paypal" == $("select[name=creditCardType]").val()
            ? (window.location.href = e.redirect)
            : (window.location.href = "upsell1/?" + t[1]);
        } else $("#loading-indicator").length && $("#loading-indicator").hide(), cb.errorHandler(e.errors);
      });
  }),
  $(function () {
    setInterval(function () {
      var e = (e = [
        "Hannah from New York ",
        "Jennifer from Los Angeles",
        "Thomas from Chicago ",
        "Benjamin from Houston ",
        "Lucy from Philadelphia ",
        "Frank from San Antonio ",
        "Jennifer from San Diego ",
        "Robert from Dallas",
        "Karen from  San Jose ",
        "Steve from Columbus ",
        "Jennifer from Indianapolis ",
        "Lucy  from Charlotte ",
        "Robert from El Paso ",
        "Mary from Boston ",
        "Jim from Washington ",
        "Elizabeth from Las Vegas ",
        "Lucy from Portland ",
        "Steve from Detroit ",
        "Thomas from Louisville ",
        "James from Milwaukee",
      ])[Math.floor(Math.random() * e.length)];
      $("#recentCustomer").text(e),
        $("#w_fomo_wrapper")
          .addClass("notify")
          .delay(8e3)
          .queue(function (e) {
            $(this).removeClass("notify"), e();
          });
    }, 22e3);
  });
var cSpeed = 9,
  cWidth = 128,
  cHeight = 128,
  cTotalFrames = 18,
  cFrameWidth = 128,
  cImageSrc = "images/sprites.gif";
console.log(cImageSrc);
var cImageTimeout = !1,
  cIndex = 0,
  cXpos = 0,
  cPreloaderTimeout = !1,
  SECONDS_BETWEEN_FRAMES = 0;
function startAnimation() {
  (document.getElementById("loaderImage").style.backgroundImage =
    "url(" + cImageSrc + ")"),
    (document.getElementById("loaderImage").style.width = cWidth + "px"),
    (document.getElementById("loaderImage").style.height = cHeight + "px"),
    (cPreloaderTimeout = setTimeout(
      "continueAnimation()",
      (SECONDS_BETWEEN_FRAMES = 1 / (FPS = Math.round(100 / cSpeed))) / 1e3
    ));
}
function continueAnimation() {
  (cXpos += cFrameWidth),
    (cIndex += 1) >= cTotalFrames && ((cXpos = 0), (cIndex = 0)),
    document.getElementById("loaderImage") &&
      (document.getElementById("loaderImage").style.backgroundPosition =
        -cXpos + "px 0"),
    (cPreloaderTimeout = setTimeout(
      "continueAnimation()",
      1e3 * SECONDS_BETWEEN_FRAMES
    ));
}
function stopAnimation() {
  clearTimeout(cPreloaderTimeout), (cPreloaderTimeout = !1);
}
function noScroll() {
  window.scrollTo(0, 0);
}
function startTimer(e, t) {
  var o,
    r,
    a = e;
  setInterval(function () {
    (o = parseInt(a / 60, 10)),
      (r = parseInt(a % 60, 10)),
      (o = o < 10 ? "0" + o : o),
      (r = r < 10 ? "0" + r : r),
      t.text(o + ":" + r),
      --a < 0 && (a = e);
  }, 1e3);
}
jQuery(function (e) {
  startTimer(900, e(".countdown-timer"));
});
