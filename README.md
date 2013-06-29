ember_js_opt_group_select
=========================

Example of how to generate an Ember select with option group(s)

In order to create an Ember.js based Opt group control you need to add to Ember extenders (not handlebars helpers) listed in file ember-extend.js
These extenders originate from rhe following gist: https://gist.github.com/tpitale/3297425

They extend the Ember.Select control by handling the option groups and supply an Ember.View extender to the option group themselves.

The main app.js file include a View which initializes the Application main view.
In this view we set three major components:

1. The "groupedOptions" Array which includes the title-value pairs that we'll eventually use inside the Select box. Note that grouped option in this array is an Ember object that holds a 'label' and a 'content'.
The 'content' part includes an internal Ember Array which holds the actual title value pairs.
The sample also includes a special Ember.Object (App.GroupedOption) which may be used later to obtain the actual selected title value pair.
The 'label' part holds the group name

2. The 'flattenedGroupedOptions' is a simple array that holds all the title value pairs as in a regular Ember.Select object (this is the hack)

3. The 'groupedSelectedCtrl' is using our extended Ember.GroupedSelect object and it is the object that eventually does the Opt group for us.
