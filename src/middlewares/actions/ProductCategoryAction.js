const CreateApiProductCategory = value => {
    return {
      type: "REQUEST_CREATE_PRODUCT_CATEGORY",
      payload: value
    };
  };
  
  const ReadApiProductCategory = value => {
    return {
      type: "REQUEST_READ_PRODUCT_CATEGORY",
      payload: value
    };
  };
  
  const ReadApiProductCategoryById = (id = 0) => {
    return {
      type: "REQUEST_READ_PRODUCT_CATEGORY_BY_ID",
      payload: id
    };
  };
  
  const UpdateApiProductCategory = value => {
    return {
      type: "REQUEST_UPDATE_PRODUCT_CATEGORY",
      payload: value
    };
  };
  
  const DeleteApiProductCategory = value => {
    return {
      type: "REQUEST_DELETE_PRODUCT_CATEGORY",
      payload: value
    };
  };
  
  export const ProductCategoryActionCreators = {
    ReadApiProductCategory,
    ReadApiProductCategoryById,
    CreateApiProductCategory,
    UpdateApiProductCategory,
    DeleteApiProductCategory
  };
  