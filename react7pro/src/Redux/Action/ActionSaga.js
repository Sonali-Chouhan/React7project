import { delete_User, Get_Data, Get_User, update_User } from "../Type";
export const getdata = () => {
  return {
    type: Get_Data,
  };
};
export const get_user = (data) => {
  return {
    type: Get_User,
    data,
  };
};
export const Delete_User = (id) => {
  return {
    type: delete_User,
    id,
  };
};
export const Updata_User = (id,user) => {
 
  return {
    type:update_User,
    id:id,
    user:user
  };
};

