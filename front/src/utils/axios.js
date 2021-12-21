import axios from "axios";
import cookie from "js-cookie";
axios.defaults.headers.common = {
  Authorization: `${cookie.get("SCAM_TOKEN")}`,
};
export default axios;
