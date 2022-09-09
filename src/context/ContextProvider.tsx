import React from "react";
import { BrowserRouter } from "react-router-dom";
import { UploadProvider } from "./UploadImageContext";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      <UploadProvider>{children}</UploadProvider>
    </BrowserRouter>
  );
};

export default ContextProvider;
