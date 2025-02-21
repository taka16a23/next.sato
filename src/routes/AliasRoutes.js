export default class AliasRoutes {
  static Top = "/";
  static Favicon = "/favicon.png";
  // api
  static Api = "/api";
  static API_Publish = AliasRoutes.Api + "/publish";
  static API_News = AliasRoutes.API_Publish + "/news";
  static API_Boards = AliasRoutes.API_Publish + "/boards";
  static API_Activities = AliasRoutes.API_Publish + "/activities";
  static API_Formats = AliasRoutes.Api + "/formats";
  static API_SatoFormats = AliasRoutes.API_Formats + "/sato";
  static API_OtherFormats = AliasRoutes.API_Formats + "/other";
  static API_Security = AliasRoutes.Api + "/security";
  static API_SecurityWeatherWarnings = AliasRoutes.API_Security + "/weather_warnings";
  static API_SecurityEmergency = AliasRoutes.API_Security + "/emergencies";
  static API_SecurityKnowledge = AliasRoutes.API_Security + "/knowledge";
  static API_About = AliasRoutes.Api + "/about";
  static API_Rules = AliasRoutes.API_About + "/rules";
  static API_Hall = AliasRoutes.API_About + "/hall";
  static API_FAQ = AliasRoutes.API_About + "/faq";
  static API_Query = AliasRoutes.API_About + "/query/";
  static API_HallRequest = AliasRoutes.API_Hall + "/request/";
  static API_Calendar = AliasRoutes.Api + "/calendar";
  static API_Calendar_HallEvent = AliasRoutes.API_Calendar + "/halls/";
  static API_Calendar_MainEvent = AliasRoutes.API_Calendar + "/main/";
  static API_Calendar_GarbagesEvent = AliasRoutes.API_Calendar + "/garbages/";
  // page
  static News = "/news";
  static NewsYear = AliasRoutes.News + "/year";
  static Activities = "/activities";
  static ActivitiesYear = AliasRoutes.Activities + "/year";
  static Activity = "/activity/:id";
  static Security = "/security";
  static SecurityPortal = AliasRoutes.Security + "/portal";
  static SecurityMap = AliasRoutes.Security + "/map";
  static SecurityKnowledge = AliasRoutes.Security + "/knowledge";
  static Board = "/board";
  static BoardsYear = AliasRoutes.Board + "/year";
  static Formats = "/formats";
  static About = "/about";
  static AboutRule = AliasRoutes.About + "/rule";
  static AboutHall = AliasRoutes.About + "/hall";
  static AboutGroup = AliasRoutes.About + "/group";
  static AboutFAQ = AliasRoutes.About + "/faq";
  static AboutQuery = AliasRoutes.About + "/query";
  // error
  static Error403 = "/errors/403";
}
