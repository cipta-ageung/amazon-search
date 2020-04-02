const CreateApiProductBundle = value => {
    return {
      type: "REQUEST_CREATE_PRODUCT_BUNDLE",
      payload: value
    };
  };
  
  const ReadApiProductBundle = value => {
    return {
      type: "REQUEST_READ_PRODUCT_BUNDLE",
      payload: value
    };
  };
  
  const ReadApiProductBundleById = (id = 0) => {
    return {
      type: "REQUEST_READ_PRODUCT_BUNDLE_BY_ID",
      payload: id
    };
  };
  
  const UpdateApiProductBundle = value => {
    return {
      type: "REQUEST_UPDATE_PRODUCT_BUNDLE_BUNDLE",
      payload: value
    };
  };
  
  const DeleteApiProductBundle = value => {
    return {
      type: "REQUEST_DELETE_PRODUCT_BUNDLE_BUNDLE",
      payload: value
    };
  };
  
  export const ProductBundleActionCreators = {
    ReadApiProductBundle,
    ReadApiProductBundleById,
    CreateApiProductBundle,
    UpdateApiProductBundle,
    DeleteApiProductBundle
  };
  