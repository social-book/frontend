// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://159.122.186.89:31340/v1', // user url
  apiAlbumUrl: 'http://159.122.186.89:31777/v1',
  apiImageUrl: 'http://159.122.186.89:31175',
  mockUrl: 'http://localhost:3000',
  uploads: '/v1/uploads',
  user_path: 'users',
  album_path: 'albums',
  category_path: 'categories',
  comments_path: 'comments',
  notfications_path: 'notfications'

  /*

    https://my-json-server.typicode.com/mihastele/myJsonMock/

    https://jsonplaceholder.typicode.com/posts - FOR POST TEST


   */

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
