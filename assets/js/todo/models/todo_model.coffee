@App ||= {}
class App.TodoModel extends Backbone.Model
  urlRoot: '/api/list_item'

  set: (attributes, options) ->
    if attributes['completed'] == 'on'
      attributes['completed'] = true
    else
      attributes['completed'] = false

    super(attributes, options)


  toJSON: ->
    list_item: _.clone(@attributes)
