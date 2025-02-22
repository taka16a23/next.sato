import API from "./API";
import AliasRoutes from '@/routes/AliasRoutes';


export default class NewsAPI extends API {

  static PATH = AliasRoutes.API_News;

  constructor() {
    super(process.env.NEXT_PUBLIC_APP_API_URL, NewsAPI.PATH);
  }
}
