// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Controller for the pet set list view.
 *
 * @final
 */
export class PetSetListController {
  /**
   * @param {!backendApi.PetSetList} petSetList
   * @param {!angular.Resource} kdPetSetListResource
   * @ngInject
   */
  constructor(petSetList, kdPetSetListResource) {
    /** @export {!backendApi.PetSetList} */
    this.petSetList = petSetList;

    /** @export {!angular.Resource} */
    this.petSetListResource = kdPetSetListResource;

    /** @export */
    this.i18n = i18n;
  }

  /**
   * @return {boolean}
   * @export
   */
  shouldShowZeroState() { return this.petSetList.petSets.length === 0; }
}

const i18n = {
  /** @export {string} @desc Title for graph card displaying cumulative metrics of pet sets. */
  MSG_PET_SET_LIST_GRAPH_CARD_TITLE: goog.getMsg('Cumulative resource usage history'),
};
