var cheerio = require('cheerio')

function parseHn(hackerNewsHtml) {
  var $ = cheerio.load(hackerNewsHtml)
  var items = []
  $('.athing').each(function (i, elem) {

    // Retrieve base items.
    var item = $(this);
    var commentLine = item.next()
    var link = item.find('.titleline a');

    // Retrieve the useful DOM elements.
    var commentCount = commentLine.find('a').last();
    var hnUser = commentLine.find('.hnuser');

    if (commentCount.text().trim() == 'hide') {
      return;
    }

    // Append the element information to the list.
    items.push({
      title: link.html().trim() ? link.html().trim() : null,
      link: link.attr('href') ? link.attr('href') : null,
      siteString: item.find('.sitestr').text().trim() || null,
      score: commentLine.find('.score').text().trim() || null,
      user: {
        name: hnUser.text().trim() || null,
        link: hnUser.attr('href') || null
      },
      age: commentLine.find('.age').text().trim() || null,
      commentCount: commentCount.text().trim().replace(' ', ' '),
      threadLink: commentCount.attr('href')
    });
  });

  return items;
}

exports.parse = function (hackerNewsHtml) {
  return parseHn(hackerNewsHtml)
}

exports.parseAsync = function (hackerNewsHtml, callback) {
  callback(parseHn(hackerNewsHtml))
}


