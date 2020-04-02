const CreateApiCategory = value => {
  return {
    type: "REQUEST_CREATE_CATEGORY",
    payload: value
  };
};

const ReadApiCategory = value => {
  return {
    type: "REQUEST_READ_CATEGORY",
    payload: value
  };
};

const ReadApiCategoryById = (id = 0) => {
  return {
    type: "REQUEST_READ_CATEGORY_BY_ID",
    payload: id
  };
};

const UpdateApiCategory = value => {
  return {
    type: "REQUEST_UPDATE_CATEGORY",
    payload: value
  };
};

const DeleteApiCategory = value => {
  return {
    type: "REQUEST_DELETE_CATEGORY",
    payload: value
  };
};

export const CategoryActionCreators = {
  ReadApiCategory,
  ReadApiCategoryById,
  CreateApiCategory,
  UpdateApiCategory,
  DeleteApiCategory
};
