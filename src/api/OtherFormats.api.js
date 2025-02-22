import API from "./API";
import AliasRoutes from '@/routes/AliasRoutes';


export default class OtherFormatsAPI extends API {

  static PATH = AliasRoutes.API_OtherFormats;

  constructor() {
    super(process.env.REACT_APP_API_URL, OtherFormatsAPI.PATH);
  }
}
