App = Ember.Application.create();

App.GroupedOption = Ember.Object.extend({
    title: null,
    value: null
});

App.SelectView = Ember.View.extend({
    init: function () {
        this._super();
        this.set('groupedOptions', Ember.A([
            Ember.Object.create({
                label: 'level 1',
                content: Ember.A([
                    App.GroupedOption.create({
                        title: 'sub level 1',
                        value: '1.1'
                    }),
                    App.GroupedOption.create({
                        title: 'sub level 2',
                        value: '1.2'
                    })])
                }),
            Ember.Object.create({
                label: 'level 2',
                content: Ember.A([
                    App.GroupedOption.create({
                        title: 'sub level 1',
                        value: '2.1'
                    }),
                    App.GroupedOption.create({
                        title: 'sub level 2',
                        value: '2.2'
                    })])
            })
        ]));
        this.set('flattenedGroupedOptions',
            [].concat(this.get('groupedOptions')[0].get('content')));
        this.set('groupedSelectedCtrl',
            Ember.GroupedSelect.create({
                content: this.get('flattenedGroupedOptions'),
                groupedContent: this.get('groupedOptions'),
                optionLabelPath: 'content.title',
                optionValuePath: 'content.value',
                prompt: 'Select a sub-level',
                selectionBinding: "App.GroupedOption"
            })
        );
    },

    GrouprdOptionsSelect: function () {
        //return this.get('groupedSelectedCtrl');
    }
});

App.SelectViewCtrl = App.SelectView.create();