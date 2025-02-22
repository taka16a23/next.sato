import API from "./API";
import AliasRoutes from '@/routes/AliasRoutes';


export default class QueryAPI extends API {

  static PATH = AliasRoutes.API_Query;

  constructor() {
    super(process.env.REACT_APP_API_URL, QueryAPI.PATH);
  }
}
