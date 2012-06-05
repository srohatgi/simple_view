/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('LazyChild', function(Y, NAME) {

/**
 * The LazyChild module.
 *
 * @module LazyChild
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.mojito.controllers[NAME] = {

        init: function(config) {
          Y.log('lazyM:init method',"info");
            this.config = config;
        },

        hello: function(ac) {
          Y.log('lazyM:hello method',"info");
          ac.done({time: new Date()});
        },

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
          Y.log('lazyM:index method',"info");
          ac.done({time: new Date()});
          return;
            ac.models.LazyChildModelFoo.getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        }

    };

}, '0.0.1', {requires: ['mojito']});
