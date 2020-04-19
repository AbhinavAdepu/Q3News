import { Http } from '../util/Http';
import { logErrorMsg } from '../util/helper';
import { NY_TIMES } from '../constants/constants';

/**
 * @description Helper class for API calls related to NYTIMES only
 * @class
 * @author Abhinav Adepu
 */
export class NYTIMESSERVICE {
  /**
   * @description NYTIMESSERVICE
   * @returns api base url
   */
  static get NYTIMES_BASE_URL() {
    return `${NY_TIMES.MOST_POPULAR_ARTICLES_API_URL}`;
  }

  static get NYTIMES_API_KEY() {
    return `${NY_TIMES.API_KEY}`;
  }
  
  static async getMostpopularArticles(period : any) {
    try {
      return await Http.get(`${this.NYTIMES_BASE_URL}${period}.json?${this.NYTIMES_API_KEY}`);
    } catch (err) {
      logErrorMsg(err, `getMostpopularArticles`);
      throw err;
    }
  }
}
