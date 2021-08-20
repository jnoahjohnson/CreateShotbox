/*<![CDATA[*/
(function () {
  var scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    (
      document.getElementsByTagName("head")[0] ||
      document.getElementsByTagName("body")[0]
    ).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: "shotbox-llc.myshopify.com",
      storefrontAccessToken: "c0c27b78aaf3721aae7c2b31367a56de",
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent("product", {
        id: "10032359439",
        node: document.getElementById("product-component-1629479374550"),
        moneyFormat: "%24%7B%7Bamount%7D%7D",
        options: {
          product: {
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "calc(25% - 20px)",
                  "margin-left": "20px",
                  "margin-bottom": "50px",
                },
              },
              button: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#317a7a",
                },
                "background-color": "#368787",
                ":focus": {
                  "background-color": "#317a7a",
                },
                "border-radius": "37px",
                "padding-left": "56px",
                "padding-right": "56px",
              },
              quantityInput: {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
              },
            },
            buttonDestination: "checkout",
            contents: {
              img: false,
              title: false,
              price: false,
            },
            text: {
              button: "Buy Now",
            },
            googleFonts: ["Montserrat"],
          },
          productSet: {
            styles: {
              products: {
                "@media (min-width: 601px)": {
                  "margin-left": "-20px",
                },
              },
            },
          },
          modalProduct: {
            contents: {
              img: false,
              imgWithCarousel: true,
            },
            styles: {
              product: {
                "@media (min-width: 601px)": {
                  "max-width": "100%",
                  "margin-left": "0px",
                  "margin-bottom": "0px",
                },
              },
              button: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#317a7a",
                },
                "background-color": "#368787",
                ":focus": {
                  "background-color": "#317a7a",
                },
                "border-radius": "37px",
                "padding-left": "56px",
                "padding-right": "56px",
              },
              quantityInput: {
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
              },
              title: {
                "font-family": "Raleway, sans-serif",
              },
            },
            googleFonts: ["Raleway", "Montserrat"],
            text: {
              button: "Buy Now",
            },
          },
          option: {},
          cart: {
            styles: {
              button: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
                "font-size": "18px",
                "padding-top": "17px",
                "padding-bottom": "17px",
                ":hover": {
                  "background-color": "#317a7a",
                },
                "background-color": "#368787",
                ":focus": {
                  "background-color": "#317a7a",
                },
                "border-radius": "37px",
              },
            },
            text: {
              total: "Subtotal",
              button: "Checkout",
            },
            googleFonts: ["Montserrat"],
          },
          toggle: {
            styles: {
              toggle: {
                "font-family": "Montserrat, sans-serif",
                "font-weight": "bold",
                "background-color": "#368787",
                ":hover": {
                  "background-color": "#317a7a",
                },
                ":focus": {
                  "background-color": "#317a7a",
                },
              },
              count: {
                "font-size": "18px",
              },
            },
            googleFonts: ["Montserrat"],
          },
        },
      });
    });
  }
})();
/*]]>*/
