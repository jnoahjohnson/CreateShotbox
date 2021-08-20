import * as React from "react";
import { Helmet } from "react-helmet";
import { ContentStyles } from "../styles/ContentStyles";
import FloatingText from "../components/FloatingText";
import Hero from "../components/Hero";
import ScrollAnimation from "react-animate-on-scroll";
import { Spacer } from "../components/Spacer";
import { StaticImage } from "gatsby-plugin-image";
import { ImageStyles } from "../styles/ImageStyles";
import styled from "styled-components";
import DoubleImage from "../styles/DoubleImage";
import CardGrid from "../components/CardGrid";
import { CardData } from "../data/FeatureCards";
import ExamplesSection from "../components/ExamplesSection";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import Flip from "react-reveal/Flip";
import BuySection from "../components/BuySection";

const BlueHeader = styled.h1`
  color: var(--primary, blue);
  text-align: center;
  font-size: 4rem;
  font-weight: bold;

  @media (max-width: 900px) {
    font-size: 3rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialBlock = styled.p`
  background: var(--primary);
  padding: 1.25rem;
  font-size: 1.8rem;
  color: white;
  box-shadow: var(--defaultShadow);
  border-radius: 10px;
  text-align: center;

  @media (max-width: 560px) {
    font-size: 1.5rem;
  }

  margin-bottom: 25px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 4.5rem 0 2rem 0;

  a {
    font-size: 1rem;
    text-decoration: none;
    color: grey;

    margin-top: 5px;
  }
  a:hover {
    text-decoration: none;
  }
`;

// markup
const IndexPage = () => {
  return (
    <main>
      <Helmet
        title="Shotbox"
        script={[
          {
            type: "text/javascript",
            innerHTML: `!function (w, d, t) {
		  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
		
		  ttq.load('C4FU0VHCF95KKVVHNTVG');
		  ttq.page();
		}(window, document, 'ttq');`,
          },
          {
            type: "text/javascript",
            innerHTML: `/*<![CDATA[*/
              (function () {
                var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
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
                  var script = document.createElement('script');
                  script.async = true;
                  script.src = scriptURL;
                  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
                  script.onload = ShopifyBuyInit;
                }
                function ShopifyBuyInit() {
                  var client = ShopifyBuy.buildClient({
                    domain: 'shotbox-llc.myshopify.com',
                    storefrontAccessToken: 'c0c27b78aaf3721aae7c2b31367a56de',
                  });
                  ShopifyBuy.UI.onReady(client).then(function (ui) {
                    ui.createComponent('product', {
                      id: '10032359439',
                      node: document.getElementById('product-component-1629479374550'),
                      moneyFormat: '%24%7B%7Bamount%7D%7D',
                      options: {
                "product": {
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "calc(25% - 20px)",
                        "margin-left": "20px",
                        "margin-bottom": "50px"
                      }
                    },
                    "button": {
                      "font-family": "Montserrat, sans-serif",
                      "font-weight": "bold",
                      "font-size": "18px",
                      "padding-top": "17px",
                      "padding-bottom": "17px",
                      ":hover": {
                        "background-color": "#317a7a"
                      },
                      "background-color": "#368787",
                      ":focus": {
                        "background-color": "#317a7a"
                      },
                      "border-radius": "37px",
                      "padding-left": "56px",
                      "padding-right": "56px"
                    },
                    "quantityInput": {
                      "font-size": "18px",
                      "padding-top": "17px",
                      "padding-bottom": "17px"
                    }
                  },
                  "buttonDestination": "checkout",
                  "contents": {
                    "img": false,
                    "title": false,
                    "price": false
                  },
                  "text": {
                    "button": "Buy Now"
                  },
                  "googleFonts": [
                    "Montserrat"
                  ]
                },
                "productSet": {
                  "styles": {
                    "products": {
                      "@media (min-width: 601px)": {
                        "margin-left": "-20px"
                      }
                    }
                  }
                },
                "modalProduct": {
                  "contents": {
                    "img": false,
                    "imgWithCarousel": true
                  },
                  "styles": {
                    "product": {
                      "@media (min-width: 601px)": {
                        "max-width": "100%",
                        "margin-left": "0px",
                        "margin-bottom": "0px"
                      }
                    },
                    "button": {
                      "font-family": "Montserrat, sans-serif",
                      "font-weight": "bold",
                      "font-size": "18px",
                      "padding-top": "17px",
                      "padding-bottom": "17px",
                      ":hover": {
                        "background-color": "#317a7a"
                      },
                      "background-color": "#368787",
                      ":focus": {
                        "background-color": "#317a7a"
                      },
                      "border-radius": "37px",
                      "padding-left": "56px",
                      "padding-right": "56px"
                    },
                    "quantityInput": {
                      "font-size": "18px",
                      "padding-top": "17px",
                      "padding-bottom": "17px"
                    },
                    "title": {
                      "font-family": "Raleway, sans-serif"
                    }
                  },
                  "googleFonts": [
                    "Raleway",
                    "Montserrat"
                  ],
                  "text": {
                    "button": "Buy Now"
                  }
                },
                "option": {},
                "cart": {
                  "styles": {
                    "button": {
                      "font-family": "Montserrat, sans-serif",
                      "font-weight": "bold",
                      "font-size": "18px",
                      "padding-top": "17px",
                      "padding-bottom": "17px",
                      ":hover": {
                        "background-color": "#317a7a"
                      },
                      "background-color": "#368787",
                      ":focus": {
                        "background-color": "#317a7a"
                      },
                      "border-radius": "37px"
                    }
                  },
                  "text": {
                    "total": "Subtotal",
                    "button": "Checkout"
                  },
                  "googleFonts": [
                    "Montserrat"
                  ]
                },
                "toggle": {
                  "styles": {
                    "toggle": {
                      "font-family": "Montserrat, sans-serif",
                      "font-weight": "bold",
                      "background-color": "#368787",
                      ":hover": {
                        "background-color": "#317a7a"
                      },
                      ":focus": {
                        "background-color": "#317a7a"
                      }
                    },
                    "count": {
                      "font-size": "18px"
                    }
                  },
                  "googleFonts": [
                    "Montserrat"
                  ]
                }
              },
                    });
                  });
                }
              })();
              /*]]>*/`,
          },
        ]}
      />
      <Hero />
      <Spacer />
      <ContentStyles>
        <FloatingText>
          Express your creativity with the Shotbox, a collapsible photo light
          studio that is designed especially for your smartphone.
        </FloatingText>
      </ContentStyles>
      <Spacer />
      <Fade>
        <ImageStyles>
          <StaticImage
            src="../images/PhotoImage.png"
            alt="Woman taking picture of jewlery"
            placeholder="blurred"
            width={1000}
          />
        </ImageStyles>
      </Fade>

      <Spacer />
      <BlueHeader>
        <Jump cascade>think inside the box.</Jump>
      </BlueHeader>
      <Spacer />
      <ContentStyles>
        <DoubleImage>
          <Fade left>
            <StaticImage
              src="../images/zoomOut.png"
              alt="Shotbox with a plant inside"
              placeholder="blurred"
            />
          </Fade>
          <Fade right>
            <StaticImage
              src="../images/zoomIn.png"
              alt="Plant with brick background"
              placeholder="blurred"
            />
          </Fade>
        </DoubleImage>
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <Spacer />
        <CardGrid cards={CardData} />
        <Spacer />
        <Spacer />
        <Spacer />
        <TwoColumn>
          <Fade left>
            <ImageStyles>
              <StaticImage
                src="../images/tablePicture.png"
                alt="Man taking picture of drawing"
                placeholder="blurred"
                width={800}
              />
            </ImageStyles>
          </Fade>
          <Fade right>
            <TestimonialBlock>
              “I just wanted to say that your product went above and beyond my
              expectations. It works perfect. The portability is just awesome
              and my etsy shop pictures have dramatically improved. Worth every
              penny!”
            </TestimonialBlock>
          </Fade>
        </TwoColumn>
        <BlueHeader>
          <Fade top>The Possibilities Are Endless</Fade>
        </BlueHeader>
        <ExamplesSection />
        <BlueHeader>Ready to create something amazing?</BlueHeader>
        <Spacer />
        <BuySection />
        <FooterSection>
          <StaticImage
            src="../images/shotbox-blue.png"
            alt="Shotbox"
            width={200}
          />
          <a href="https://shotbox.me/">Go to Full Site</a>
        </FooterSection>
      </ContentStyles>
    </main>
  );
};

export default IndexPage;
