import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect } from "react";
import styled from "styled-components";
import HeadShake from "react-reveal/HeadShake";

const BuyStyles = styled.div`
  width: 90%;
  margin: 0 auto;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.4);
  padding: 3rem;
  border-radius: 10px;

  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;

  img {
    border-radius: 10px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 490px) {
    padding: 0.5rem;
  }
`;

const ContentStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;

  button {
    color: white;
    background: var(--primary);
    font-weight: 800;
    font-size: 1.5rem;
    border-radius: 100px;
    box-shadow: var(--defaultShadow);
    padding: 0.8rem 3.5rem;
  }

  h1 {
    font-size: 5rem;
    color: var(--primary);
    font-weight: 700;
    margin-top: 20px;
  }

  .currency {
    font-size: 3rem;
    vertical-align: text-top;
  }

  .sale {
    position: absolute;
    top: -30px;
    right: 0;
    /* transform: rotate(6deg); */
    background: #ea526f;
    color: white;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.55rem 0.65rem;
    box-shadow: var(--defaultShadow);
    border-radius: 5px;
    width: 330px;
    text-align: center;
  }

  @media (max-width: 767px) {
    justify-content: center;
    align-items: center;
    text-align: center;

    margin-top: -20px;
    .sale {
      right: -10px;
    }
  }

  @media (max-width: 490px) {
    .sale {
      font-size: 1.75rem;
      padding: 0.25rem;
      width: auto;
      right: 0;
    }
  }

  @media (max-width: 400px) {
    .sale {
      font-size: 1rem;
    }
  }
`;

const PriceSection = styled.div`
  padding-top: 1.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: -25px;
  }

  @media (max-width: 490px) {
    padding-top: 0;
  }
`;

const DescriptionSection = styled.div`
  padding-top: 2.5rem;
  font-weight: 600;
  font-size: 1.25rem;
`;

export default function BuySection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";

    script.innerHTML = `/*<![CDATA[*/
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
      `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <BuyStyles id="BuySection">
      <StaticImage src="../images/buy-product.jpg" alt="Woman using Shotbox" />
      <ContentStyles>
        <PriceSection>
          <h1>
            <span className="currency">$</span>164
          </h1>
          <div id="product-component-1629479374550"></div>
        </PriceSection>
        <DescriptionSection>
          <p>
            Includes everything you need! The Shotbox, SideShot, multiple
            backgrounds, and other bonus tools all come in a deluxe carrying
            bag.
          </p>
        </DescriptionSection>
        <HeadShake delay={1000}>
          <h2 className="sale">End of Summer Sale</h2>
        </HeadShake>
      </ContentStyles>
    </BuyStyles>
  );
}
