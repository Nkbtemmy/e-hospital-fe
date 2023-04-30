export default () => {
  try {
    if(localStorage.getItem("access_token"))return true;
    return false
  } catch (error) {
    return false;
  }
};
