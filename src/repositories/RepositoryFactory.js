export default class RepositoryFactory {
  static _cache = {};

  // News
  static createNewsRepository() {
    if(!RepositoryFactory._cache['NewsRepository']) {
      let klass = require('./News.repository').default;
      RepositoryFactory._cache['NewsRepository'] = new klass();
    }
    return RepositoryFactory._cache['NewsRepository'];
  }

  // WeatherWarnings
  static createWeatherWarningsRepository() {
    if(!RepositoryFactory._cache['WeatherWarningRepository']) {
      let klass = require('./WeatherWarning.repository').default;
      RepositoryFactory._cache['WeatherWarningRepository'] = new klass();
    }
    return RepositoryFactory._cache['WeatherWarningRepository'];
  }

  // Emergency
  static createEmergencyRepository() {
    if(!RepositoryFactory._cache['EmergencyRepository']) {
      let klass = require('./Emergency.repository').default;
      RepositoryFactory._cache['EmergencyRepository'] = new klass();
    }
    return RepositoryFactory._cache['EmergencyRepository'];
  }

  // SecurityKnowledge
  static createSecurityKnowledgeRepository() {
    if(!RepositoryFactory._cache['SecurityKnowledge']) {
      let klass = require('./SecurityKnowledge.repository').default;
      RepositoryFactory._cache['SecurityKnowledge'] = new klass();
    }
    return RepositoryFactory._cache['SecurityKnowledge'];
  }

  // SatoFormats
  static createSatoFormatsRepository() {
    if(!RepositoryFactory._cache['SatoFormats']) {
      let klass = require('./SatoFormats.repository').default;
      RepositoryFactory._cache['SatoFormats'] = new klass();
    }
    return RepositoryFactory._cache['SatoFormats'];
  }

  // OtherFormats
  static createOtherFormatsRepository() {
    if(!RepositoryFactory._cache['OtherFormats']) {
      let klass = require('./OtherFormats.repository').default;
      RepositoryFactory._cache['OtherFormats'] = new klass();
    }
    return RepositoryFactory._cache['OtherFormats'];
  }

  // Rules
  static createRulesRepository() {
    if(!RepositoryFactory._cache['RulesRepository']) {
      let klass = require('./Rules.repository.js').default;
      RepositoryFactory._cache['RulesRepository'] = new klass();
    }
    return RepositoryFactory._cache['RulesRepository'];
  }

  // HallRequest
  static createHallRequestRepository() {
    if(!RepositoryFactory._cache['HallRequestRepository']) {
      let klass = require('./HallRequest.repository.js').default;
      RepositoryFactory._cache['HallRequestRepository'] = new klass();
    }
    return RepositoryFactory._cache['HallRequestRepository'];
  }

  // FrequentlyQuetionAnswer
  static createFrequentlyQuetionAnswerRepository() {
    if(!RepositoryFactory._cache['FrequentlyQuetionAnswerRepository']) {
      let klass = require('./FrequentlyQuetionAnswer.repository.js').default;
      RepositoryFactory._cache['FrequentlyQuetionAnswerRepository'] = new klass();
    }
    return RepositoryFactory._cache['FrequentlyQuetionAnswerRepository'];
  }

  // Query
  static createQueryRepository() {
    if(!RepositoryFactory._cache['QueryRepository']) {
      let klass = require('./Query.repository.js').default;
      RepositoryFactory._cache['QueryRepository'] = new klass();
    }
    return RepositoryFactory._cache['QueryRepository'];
  }

  // Boards
  static createBoardsRepository() {
    if(!RepositoryFactory._cache['BoardsRepository']) {
      let klass = require('./Boards.repository.js').default;
      RepositoryFactory._cache['BoardsRepository'] = new klass();
    }
    return RepositoryFactory._cache['BoardsRepository'];
  }

  // Activities
  static createActivitiesRepository() {
    if(!RepositoryFactory._cache['ActivitiesRepository']) {
      let klass = require('./Activities.repository.js').default;
      RepositoryFactory._cache['ActivitiesRepository'] = new klass();
    }
    return RepositoryFactory._cache['ActivitiesRepository'];
  }

  // HallEvents
  static createHallEventsRepository() {
    if(!RepositoryFactory._cache['HallEventsRepository']) {
      let klass = require('./HallEvents.repository.js').default;
      RepositoryFactory._cache['HallEventsRepository'] = new klass();
    }
    return RepositoryFactory._cache['HallEventsRepository'];
  }

  // MainEvents
  static createMainEventsRepository() {
    if(!RepositoryFactory._cache['MainEventsRepository']) {
      let klass = require('./MainEvents.repository.js').default;
      RepositoryFactory._cache['MainEventsRepository'] = new klass();
    }
    return RepositoryFactory._cache['MainEventsRepository'];
  }

  // GarbageEvents
  static createGarbageEventsRepository() {
    if(!RepositoryFactory._cache['GarbageEventsRepository']) {
      let klass = require('./GarbageEvents.repository.js').default;
      RepositoryFactory._cache['GarbageEventsRepository'] = new klass();
    }
    return RepositoryFactory._cache['GarbageEventsRepository'];
  }
}
