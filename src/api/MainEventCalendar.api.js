import API from "./API";
import AliasRoutes from '@/routes/AliasRoutes';


export default class MainEventCalendarAPI extends API {

  static PATH = AliasRoutes.API_Calendar_MainEvent;

  constructor() {
    super(process.env.REACT_APP_API_URL, MainEventCalendarAPI.PATH);
  }
}
