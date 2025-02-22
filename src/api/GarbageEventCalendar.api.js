import API from "./API";
import AliasRoutes from '@/routes/AliasRoutes';


export default class GarbageEventCalendarAPI extends API {

  static PATH = AliasRoutes.API_Calendar_GarbagesEvent;

  constructor() {
    super(process.env.REACT_APP_API_URL, GarbageEventCalendarAPI.PATH);
  }
}
