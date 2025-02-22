import API from "./API";
import AliasRoutes from '@/routes/AliasRoutes';


export default class SecurityKnowledgeAPI extends API {

  static PATH = AliasRoutes.API_SecurityKnowledge;

  constructor() {
    super(process.env.REACT_APP_API_URL, SecurityKnowledgeAPI.PATH);
  }
}
