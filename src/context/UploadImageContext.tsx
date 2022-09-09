import React, { useState, useContext, createContext } from "react";
import { useMemo } from "react";
import { IUpload } from "types";

export interface IState extends IUpload {
  quantity: number;
}

interface IContextState {
  images: Array<IState>;
  addImgToState: (product: IUpload) => void;
  removeImgFromState: (productId: string) => void;
}

const UploadsContext = createContext<IContextState>({
  images: [],
  addImgToState: () => null,
  removeImgFromState: () => null,
});

export const useUploadsState = () => {
  return useContext(UploadsContext);
};

export const UploadProvider = ({ children }: { children: React.ReactNode }) => {
  const [imgUploads, setImgs] = useState<Array<IState>>([]);

  const addImgToState = (upload: IUpload) => {
    const uploadsCopy = [...imgUploads];
    const uploadIndex = uploadsCopy.findIndex(({ id }) => upload.id === id);

    if (uploadIndex === -1) {
      uploadsCopy.push({ ...upload, quantity: 1 });
      setImgs(uploadsCopy);
      return;
    }

    uploadsCopy[uploadIndex].quantity++;
    setImgs(uploadsCopy);
  };

  const removeImgFromState = (uploadId: string) => {
    const uploadsCopy = [...imgUploads];
    const product = uploadsCopy.find(({ id }) => uploadId === id);

    if (product === undefined) {
      return;
    }

    if (product.quantity > 1) {
      product.quantity--;
      setImgs(uploadsCopy);
      return;
    }

    setImgs(uploadsCopy.filter(({ id }) => uploadId !== id));
  };

  const value = useMemo(
    () => ({
      images: imgUploads,
      addImgToState,
      removeImgFromState,
    }),
    [imgUploads, addImgToState, removeImgFromState]
  );

  return (
    <UploadsContext.Provider value={value}>{children}</UploadsContext.Provider>
  );
};
