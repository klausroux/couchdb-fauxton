// Licensed under the Apache License, Version 2.0 (the "License"); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.
define([
        'addons/documents/routes',
        'testUtils'
], function (Documents, testUtils) {
  var assert = testUtils.assert;
  var DocumentRoute = Documents.RouteObjects[2];

  describe('Documents Route', function () {

    describe('changes route', function () {

      it('Should set correct changes api url', function () {
        var docRoute = new DocumentRoute('changes', {}, ['fakeDB']);
        docRoute.changes();

        console.log('docRoute.apiUrl()', docRoute.apiUrl());
        assert.ok(/\/database\/fakeDB\/_changes\?descending=true&limit=100&include_docs=true/.test(docRoute.apiUrl()[0]));
      });

    });
  });

});
