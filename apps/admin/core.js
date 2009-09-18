// ==========================================================================
// Project:   Sproutcore AutoAdmin
// Copyright: ©2006-2009 Sprout Systems, Inc. and contributors.
//            Portions ©2008-2009 Apple Inc. All rights reserved.
// License:   Licened under MIT license (see license.js)
// ==========================================================================

/** @namespace

  My cool new app.  Describe your application.
  
  @extends SC.Object
*/
SC.AutoAdmin = SC.Object.create(
  /** @scope Django-admin.prototype */ {

  NAMESPACE: 'SC.AutoAdmin',
  VERSION: '0.1.0',

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures),
  
  currentView: null

}) ;
