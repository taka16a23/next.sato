import API from "./API";
import AliasRoutes from '@/routes/AliasRoutes';


export default class HallRequestAPI extends API {

  static PATH = AliasRoutes.API_HallRequest;

  constructor() {
    super(process.env.REACT_APP_API_URL, HallRequestAPI.PATH);
  }
}
