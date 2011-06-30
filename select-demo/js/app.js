/*globals SCD */
SCD = SC.Application.create();

SCD.Option = SC.Object.extend({
  name: null,
});

SCD.optionsController = SC.ArrayProxy.create({
  content: [],
  createItem: function() {
    this.pushObject(SCD.Option.create());
  }
});

SCD.OptionView = SC.View.extend({
  tagName: 'option',
  value: null,

  render: function(buffer) {
    buffer.push(this.get('value'));
  },

  _valueDidChange: function() {
    this.$().text(this.get('value'));
  }.observes('value')
});

SCD.SelectView = SC.CollectionView.extend({
  tagName: 'select',
  itemViewClass: SCD.OptionView
});
