import API from "./API";
import AliasRoutes from '@/routes/AliasRoutes';


export default class SatoFormatsAPI extends API {

  static PATH = AliasRoutes.API_SatoFormats;

  constructor() {
    super(process.env.NEXT_PUBLIC_APP_API_URL, SatoFormatsAPI.PATH);
  }
}
