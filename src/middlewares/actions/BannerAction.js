const CreateApiBanner = value => {
    return {
      type: "REQUEST_CREATE_BANNER",
      payload: value
    };
  };
  
  const ReadApiBanner = value => {
    return {
      type: "REQUEST_READ_BANNER",
      payload: value
    };
  };
  
  const ReadApiBannerById = (id = 0) => {
    return {
      type: "REQUEST_READ_BANNER_BY_ID",
      payload: id
    };
  };
  
  const UpdateApiBanner = value => {
    return {
      type: "REQUEST_UPDATE_BANNER",
      payload: value
    };
  };
  
  const DeleteApiBanner = value => {
    return {
      type: "REQUEST_DELETE_BANNER",
      payload: value
    };
  };
  
  export const BannerActionCreators = {
    ReadApiBanner,
    ReadApiBannerById,
    CreateApiBanner,
    UpdateApiBanner,
    DeleteApiBanner
  };
  