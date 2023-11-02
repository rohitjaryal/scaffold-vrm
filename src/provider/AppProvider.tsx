import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import UiProvider from "./UiProvider.tsx";
import AppRoutes from "@/routes/AppRoutes.tsx";
import Loading from "@cmp/Loading";
import { BrowserRouter } from "react-router-dom";
import LayoutProvider from "@/provider/LayoutProvider.tsx";
import { I18nextProvider } from "react-i18next";
import i18n from "@/includes/i18n.ts";
import {NavigationProgress} from "@mantine/nprogress";

function ErrorFallback() {
  return (
    <div>
      <h2>Oops, something went wrong </h2>
    </div>
  );
}

const AppProvider = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <UiProvider>
          <NavigationProgress/>
          <BrowserRouter>
            <I18nextProvider i18n={i18n}>
              <LayoutProvider>
                <AppRoutes />
              </LayoutProvider>
            </I18nextProvider>
          </BrowserRouter>
        </UiProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};

export default AppProvider;
