/**
 *
 * @description This method is a utility function to log error message on console
 * @param {object} error Accetps error object
 * @param {string} methodName Accepts mathod name where error occured
 * @author Abhinav Adepu
 */
export const logErrorMsg = (error : any, methodName : any) => {
  console.error(
    `%c*********************** ERROR | ${Date()} | Method: ${methodName} ***********************`,
    "color: white; background-color: red; padding: 4px"
  );
  console.error(error.message);
  console.error(error.stack);
  // tslint:disable-next-line:no-console
  console.trace();
  console.error(
    `%c******************************************************************* END *******************************************************************`,
    "color: white; background-color: red; padding: 4px"
  );
};
