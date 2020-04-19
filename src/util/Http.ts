
import { logErrorMsg } from './helper';
/**
 * @description Helper class for all HTTP API calls.
 * @class
 * @author Abhinav Adepu
 */
export class Http {
  static async get(apiEndPoint : any) {
    try {
      // passing apiEndPoint
      const res = await fetch(apiEndPoint, { mode: 'cors' });
      return await res.json();
    } catch (err) {
      logErrorMsg(err, `get`);
      throw err;
    }
  }

  static async postOrPut(apiEndPoint : any, HttpMethod : any, requestObject : any) {
    try {
      const requestBody = {
        method: HttpMethod,
        headers: {
          'Content-Type': 'application/json'
        }
      }
      if (requestObject !== undefined || !requestObject) {
        Object.assign(requestBody, {
          body: JSON.stringify(requestObject)
        });
      }

      const res = await fetch(apiEndPoint, requestBody);
      return await res.json();
    } catch (err) {
      logErrorMsg(err, `postOrPut`);
      throw err;
    }
  }
}
