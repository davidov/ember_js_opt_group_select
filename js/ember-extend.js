// Ember.Select Extenders
Ember.GroupedSelect = Ember.Select.extend({
    classNames: ['ember-grouped-select'],
    defaultTemplate: Ember.Handlebars.compile('{{#if view.prompt}}<option value>{{view.prompt}}</option>{{/if}}{{#each view.groupedContent}}{{view Ember.SelectOptGroup labelBinding="label" contentBinding="content"}}{{/each}}')
});

Ember.SelectOptGroup = Ember.View.extend({
    tagName: 'optgroup',
    classNames: [],
    attributeBindings: ['label'],
    defaultTemplate: Ember.Handlebars.compile('{{#each this.content}}{{view Ember.SelectOption contentBinding="this"}}{{/each}}'),

    // proxy to the Select
    optionLabelPath: function () {
        return Ember.get(this, 'parentView.optionLabelPath');
    }.property('parentView.optionLabelPath'),
    optionValuePath: function () {
        return Ember.get(this, 'parentView.optionValuePath');
    }.property('parentView.optionValuePath'),
    selection: function () {
        return Ember.get(this, 'parentView.selection');
    }.property('parentView.selection'),
    multiple: function () {
        return Ember.get(this, 'parentView.multiple');
    }.property('parentView.multiple')
});