import API from "./API";
import AliasRoutes from '@/routes/AliasRoutes';


export default class RulesAPI extends API {

  static PATH = AliasRoutes.API_Rules;

  constructor() {
    super(process.env.REACT_APP_API_URL, RulesAPI.PATH);
  }
}
