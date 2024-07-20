import React from "react";
import { Spinner } from "@cars/design-system";

import { LoaderWrapper } from "./Loader.styles";

const Loader = () => (
  <LoaderWrapper data-testid="spinner-container" width={1} height="100vh" justifyContent="center" alignItems="center">
    <Spinner size="lg" />
  </LoaderWrapper>
);

export default Loader;
