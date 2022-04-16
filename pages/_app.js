import React from "react";
import AOS from "aos";
import "../node_modules/aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "/styles/flaticon.css";
import "/styles/boxicons.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-image-lightbox/style.css";
import "react-tabs/style/react-tabs.css";
import "../node_modules/react-modal-video/css/modal-video.min.css";
import "/styles/faq.css";
import "/styles/global.css";
import "/styles/style.css";
import "/styles/header.css";
import "/styles/footer.css";
import "/styles/responsive.css";

import ScrollToTop from "@/components/Layout/ScrollToTop";

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <ScrollToTop />
    </>
  );
}

export default MyApp;
