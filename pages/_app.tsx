import { CssBaseline, ThemeProvider } from "@mui/material";
import { appWithTranslation } from "next-i18next";
import theme from "../theme/theme";
import { Provider, useDispatch } from "react-redux";
import { store } from "@/store";

// const MyApp = ({ Component, pageProps }: any) => <Component {...pageProps} />;
const MyApp = ({ Component, pageProps }: any) => {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />;
        {/* <ThemeProvider theme={theme}> */}
          <CssBaseline />
        {/* </ThemeProvider> */}
      </Provider>
    </>
  );
};

export default appWithTranslation(MyApp);
