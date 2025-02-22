import API from "./API";
import AliasRoutes from '@/routes/AliasRoutes';


export default class FrequentlyQuetionAnswerAPI extends API {

  static PATH = AliasRoutes.API_FAQ;

  constructor() {
    super(process.env.NEXT_PUBLIC_APP_API_URL, FrequentlyQuetionAnswerAPI.PATH);
  }
}
