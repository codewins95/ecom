const backendDomain = "http://localhost:8080/";
const SummaryApi = {
  signUP: {
    url: `${backendDomain}api/signup`,
    method: "post",
  },
  signIN: {
    url: `${backendDomain}api/sigin`,
    method: "post",
  },
  current_user: {
    url: `${backendDomain}api/user-details`,
    method: "get",
  },
  user_logout: {
    url: `${backendDomain}api/user-logout`,
    method: "get",
  },
  allUser: {
    url: `${backendDomain}api/all-users`,
    method: "get",
  },
  updateUser:{
    url: `${backendDomain}api/user-update`,
    method: "post",
  }

  
};

export default SummaryApi;
