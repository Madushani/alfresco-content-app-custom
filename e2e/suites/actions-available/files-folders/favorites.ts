/*!
 * @license
 * Alfresco Example Content Application
 *
 * Copyright (C) 2005 - 2020 Alfresco Software Limited
 *
 * This file is part of the Alfresco Example Content Application.
 * If the software was purchased under a paid Alfresco license, the terms of
 * the paid license agreement will prevail.  Otherwise, the software is
 * provided under the following open source license terms:
 *
 * The Alfresco Example Content Application is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Alfresco Example Content Application is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

import { Utils } from '../../../utilities/utils';
import * as testData from './test-data';
import * as testUtil from '../test-util';
import { BrowsingPage } from '../../../pages/pages';

export function favoritesTests() {
  const page = new BrowsingPage();

  describe('available actions : ', () => {

    beforeAll(async () => {
      await page.clickFavoritesAndWait();
    });

    beforeEach(async () => {
      await Utils.pressEscape();
    });

    describe('on a file', () => {

      it('File Office, favorite - [C297618]', async () => {
        await testUtil.checkToolbarActions(testData.fileDocxFav.name, testData.fileDocxFav.toolbarPrimary, testData.fileDocxFav.favoritesToolbarMore);
        await testUtil.checkContextMenu(testData.fileDocxFav.name, testData.fileDocxFav.favoritesContextMenu);
      });

      it('File favorite - [C280461]', async () => {
        await testUtil.checkToolbarActions(testData.fileFav.name, testData.fileFav.toolbarPrimary, testData.fileFav.favoritesToolbarMore);
        await testUtil.checkContextMenu(testData.fileFav.name, testData.fileFav.favoritesContextMenu);
      });

      it('File Office, shared, favorite - [C297620]', async () => {
        await testUtil.checkToolbarActions(testData.fileDocxSharedFav.name, testData.fileDocxSharedFav.favoritesToolbarPrimary, testData.fileDocxSharedFav.favoritesToolbarMore);
        await testUtil.checkContextMenu(testData.fileDocxSharedFav.name, testData.fileDocxSharedFav.favoritesContextMenu);
      });

      it('File shared, favorite - [C280462]', async () => {
        await testUtil.checkToolbarActions(testData.fileSharedFav.name, testData.fileSharedFav.favoritesToolbarPrimary, testData.fileSharedFav.favoritesToolbarMore);
        await testUtil.checkContextMenu(testData.fileSharedFav.name, testData.fileSharedFav.favoritesContextMenu);
      });

      it('File favorite, locked - [C280463]', async () => {
        await testUtil.checkToolbarActions(testData.fileFavLocked.name, testData.fileFavLocked.toolbarPrimary, testData.fileFavLocked.favoritesToolbarMore);
        await testUtil.checkContextMenu(testData.fileFavLocked.name, testData.fileFavLocked.favoritesContextMenu);
      });

      it('File shared, favorite, locked - [C280469]', async () => {
        await testUtil.checkToolbarActions(testData.fileSharedFavLocked.name, testData.fileSharedFavLocked.favoritesToolbarPrimary, testData.fileSharedFavLocked.favoritesToolbarMore);
        await testUtil.checkContextMenu(testData.fileSharedFavLocked.name, testData.fileSharedFavLocked.favoritesContextMenu);
      });
    });

    describe('on a folder', () => {
      it('Folder favorite - [C291817]', async () => {
        await testUtil.checkToolbarActions(testData.folderFav.name, testData.folderFav.toolbarPrimary, testData.folderFav.favoritesToolbarMore);
        await testUtil.checkContextMenu(testData.folderFav.name, testData.folderFav.favoritesContextMenu);
      });
    });

    describe('on multiple selection', () => {
      it('multiple files - [C280656]', async () => {
        await testUtil.checkMultipleSelContextMenu([ testData.fileDocxFav.name, testData.fileDocxSharedFav.name ], testData.multipleSelAllFav.favoritesContextMenu);
        await testUtil.checkMultipleSelToolbarActions([ testData.fileDocxFav.name, testData.fileDocxSharedFav.name ], testData.multipleSelAllFav.toolbarPrimary, testData.multipleSelAllFav.favoritesToolbarMore);
      });

      it('multiple locked files - [C297631]', async () => {
        await testUtil.checkMultipleSelContextMenu([ testData.fileFavLocked.name, testData.fileSharedFavLocked.name ], testData.multipleSelAllFav.favoritesContextMenu);
        await testUtil.checkMultipleSelToolbarActions([ testData.fileFavLocked.name, testData.fileSharedFavLocked.name ], testData.multipleSelAllFav.toolbarPrimary, testData.multipleSelAllFav.favoritesToolbarMore);
      });

      it('multiple folders - [C280664]', async () => {
        await testUtil.checkMultipleSelContextMenu([ testData.folderFav.name, testData.folderFav2.name ], testData.multipleSelAllFav.favoritesContextMenu);
        await testUtil.checkMultipleSelToolbarActions([ testData.folderFav.name, testData.folderFav2.name ], testData.multipleSelAllFav.toolbarPrimary, testData.multipleSelAllFav.favoritesToolbarMore);
      });

      it('both files and folders - [C280657]', async () => {
        await testUtil.checkMultipleSelContextMenu([ testData.fileFav.name, testData.folderFav.name ], testData.multipleSelAllFav.favoritesContextMenu);
        await testUtil.checkMultipleSelToolbarActions([ testData.fileFav.name, testData.folderFav.name ], testData.multipleSelAllFav.toolbarPrimary, testData.multipleSelAllFav.favoritesToolbarMore);
      });
    });
  });
}
