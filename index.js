var cheerio = require('cheerio')

function parseHn(hackerNewsHtml) {
  var $ = cheerio.load(hackerNewsHtml)
  var items = []
  $('.athing').each(function (i, elem) {

    // Retrieve base items.
    var item = $(this);
    var commentLine = item.next()
    var link = item.find('.storylink');

    // Retrieve the useful DOM elements.
    var commentCount = commentLine.find('a').last();
    var hasCommentCount = commentCount.text().trim() !== 'hide';
    var hnUser = commentLine.find('.hnuser');

    // Append the element information to the list.
    items[i] = {
      title: link.text().trim(),
      link: link.attr('href'),
      siteString: item.find('.sitestr').text().trim(),
      score: commentLine.find('.score').text().trim(),
      user: {
        name: hnUser.text().trim(),
        link: hnUser.attr('href')
      },
      age: commentLine.find('.age').text().trim(),
      commentCount: hasCommentCount ? commentCount.text().trim() : null,
      threadLink: hasCommentCount ? commentCount.attr('href') : null
    }
  });

  return items;
}

exports.parse = function (hackerNewsHtml) {
  return parseHn(hackerNewsHtml)
}

exports.parseAsync = function (hackerNewsHtml, callback) {
  callback(parseHn(hackerNewsHtml))
}


