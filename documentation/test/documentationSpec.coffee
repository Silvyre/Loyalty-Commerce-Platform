define ['../app/static/scripts/modules/documentation.js' ], (Documentation) ->

  docs = new Documentation

  describe 'Documentation generator', ->
    it 'should return URL query parameters when requested', ->
      sampleQueryString = '?foo=bar&baz=qux'
      foo = docs.urlQueryResult sampleQueryString, 'foo'
      baz = docs.urlQueryResult sampleQueryString, 'baz'

      foo.should.equal 'bar'
      baz.should.equal 'qux'
