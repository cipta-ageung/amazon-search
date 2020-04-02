const CreateApiProduct = value => {
  return {
    type: "REQUEST_CREATE_PRODUCT",
    payload: value
  };
};

const ReadApiProduct = value => {
  return {
    type: "REQUEST_READ_PRODUCT",
    payload: value
  };
};

const ReadApiProductById = (id = 0) => {
  return {
    type: "REQUEST_READ_PRODUCT_BY_ID",
    payload: id
  };
};

const UpdateApiProduct = value => {
  return {
    type: "REQUEST_UPDATE_PRODUCT",
    payload: value
  };
};

const DeleteApiProduct = value => {
  return {
    type: "REQUEST_DELETE_PRODUCT",
    payload: value
  };
};

const ReadApiProductTop = value => {
  return {
    type: "REQUEST_READ_PRODUCT_TOP",
    payload: value
  };
};

const ReadApiProductNew = value => {
  return {
    type: "REQUEST_READ_PRODUCT_NEW",
    payload: value
  };
};

export const ProductActionCreators = {
  ReadApiProduct,
  ReadApiProductById,
  CreateApiProduct,
  UpdateApiProduct,
  DeleteApiProduct,
  ReadApiProductTop,
  ReadApiProductNew
};
