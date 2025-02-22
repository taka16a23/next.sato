import API from "./API";
import AliasRoutes from '@/routes/AliasRoutes';


export default class ActivityAPI extends API {

  static PATH = AliasRoutes.API_Activities;

  constructor() {
    super(process.env.REACT_APP_API_URL, ActivityAPI.PATH);
  }
}
