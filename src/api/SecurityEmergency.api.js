import API from "./API";
import AliasRoutes from '@/routes/AliasRoutes';


export default class SecurityEmergencyAPI extends API {

  static PATH = AliasRoutes.API_SecurityEmergency;

  constructor() {
    super(process.env.REACT_APP_API_URL, SecurityEmergencyAPI.PATH);
  }
}
