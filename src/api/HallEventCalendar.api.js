import API from "./API";
import AliasRoutes from '@/routes/AliasRoutes';


export default class HallEventCalendarAPI extends API {

  static PATH = AliasRoutes.API_Calendar_HallEvent;

  constructor() {
    super(process.env.REACT_APP_API_URL, HallEventCalendarAPI.PATH);
  }
}
