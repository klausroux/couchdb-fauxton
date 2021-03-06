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
import FauxtonAPI from "../../../../core/api";
import Views from "../notifications.react";
import Stores from "../stores";
import Actions from "../actions";
import utils from "../../../../../test/mocha/testUtils";
import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import TestUtils from "react-addons-test-utils";
import "sinon";

const store = Stores.notificationStore;
const {restore, assert} = utils;

describe('NotificationPanel', function () {
  var container;

  beforeEach(function () {
    container = document.createElement('div');
    store.reset();
  });

  afterEach(function () {
    restore(Actions.clearAllNotifications);
    ReactDOM.unmountComponentAtNode(container);
  });

  it('clear all action fires', function () {
    var stub = sinon.stub(Actions, 'clearAllNotifications');

    var panelEl = TestUtils.renderIntoDocument(<Views.NotificationCenterPanel
      notifications={[]} filter={'all'}
      visible={true} />, container);

    TestUtils.Simulate.click($(ReactDOM.findDOMNode(panelEl)).find('footer input')[0]);
    assert.ok(stub.calledOnce);
  });
});
