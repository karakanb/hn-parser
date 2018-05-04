# hacker-news-parser
An NPM module to parse given Hacker News HTML content. Generates an array of objects.

```json
{
  "title": "Swedish Academy Won’t Award Nobel Prize in Literature This Year",
  "link": "https://www.wsj.com/articles/swedish-academy-wont-award-nobel-prize-in-literature-this-year-1525419104",
  "siteString": "wsj.com",
  "score": "19 points",
  "user": {
    "name": "dcgudeman",
    "link": "user?id=dcgudeman"
  },
  "age": "49 minutes ago",
  "commentCount": "14 comments",
  "threadLink": "item?id=16992852"
}
```

## Usage
```js
const parser = require('hacker-news-parser')
const items = parser.parse(HTMLString);
```

## Test
```
npm run test
```

## License
The project is under MIT license.