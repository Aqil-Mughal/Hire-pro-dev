import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { useEffect } from "react";
import ScrollToTop from "../components/common/ScrollTop";
import { Provider } from "react-redux";
import { store } from "../app/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  concat,
  from,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, pageProps }) {
  // aos animation activation

  useEffect(() => {
    Aos.init({
      duration: 1400,
      once: true,
    });
  }, []);

  let localStorageConst = null
  if (typeof window !== "undefined") {
    localStorageConst = localStorage.getItem('token') || null
  }

  //Apollo client setup
  const uploadLink = createUploadLink({
    uri: "https://b28uia8ekk.execute-api.ca-central-1.amazonaws.com/dev/graphql",
    headers: {
      authorization: localStorageConst
    },
  })

  const errorLink = onError(({ graphqlErrors, nerworkError }) => {
    if (nerworkError) {
      console.log(`Network error ${nerworkError}`);
    }
    if (graphqlErrors) {
      graphqlErrors.map(({ message, location, path }) => {
        console.log(`GraphQL error ${message}`);
      });
    }
  })

  const link = from([errorLink, uploadLink]);

  const client = new ApolloClient({ cache: new InMemoryCache(), link });

  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <div className="page-wrapper">
          <Component {...pageProps} />

          {/* Toastify */}
          <ToastContainer
            position="bottom-right"
            autoClose={500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          {/* <!-- Scroll To Top --> */}
          <ScrollToTop />
        </div>
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
