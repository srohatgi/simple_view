/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
YUI.add('LazyChildBinderIndex-tests', function(Y, NAME) {

    var suite = new YUITest.TestSuite(NAME),
        binder,
        A = YUITest.Assert;

    suite.add(new YUITest.TestCase({

        name: 'LazyChild index binder tests',

        setUp: function() {
            binder = Y.mojito.binders.LazyChildBinderIndex;
        },
        tearDown: function() {
            binder = null;
        },

        'TODO: test update id': function() {
            var node = Y.Node.create("<div id='guid123'></div>");
            binder.init({
                _guid: 'guid123'
            });
            binder.bind(node);

            // there is nothing to test in the binder initially
            A.skip();

        }

    }));

    YUITest.TestRunner.add(suite);

}, '0.0.1', {requires: ['mojito-test', 'node', 'LazyChildBinderIndex']});
