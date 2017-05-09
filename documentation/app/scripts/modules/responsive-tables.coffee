$ = require('jquery');

module.exports = responsiveTables = (table) ->
  $(table).each (table_id, table) ->
    $table = $(table)
    $th = $table.find('thead').find('th')
    $tr = $table.find('tbody').find('tr')
    labels = []
    entries = []
    entry = {}

    $th.each (i, th) ->
      labels[i] = $(th).text()

    $tr.each (row, tr) ->
      $(tr).find('td').each (i, td) ->
        value = $(td).html()
        entry['"'+labels[i]+'"'] = value

      entries.push entry
      entry = {}

    ul = '<ul id="table-list-id-'+table_id+'" class="list-from-table" />'
    $table.after(ul)

    $.each entries, (entry_id, entry) ->
      li = '<li><dl id="entry-id-'+entry_id+'"></dl></li>'

      $('#table-list-id-'+table_id).append(li)

      $.each labels, (i, label) ->
        dt = '<dt>'+label+'</dt>'
        dd = '<dd>'+entry['"'+label+'"']+'</dd>'

        $('#table-list-id-'+table_id).find('#entry-id-'+entry_id).append(dt + dd)
