var Twit = require('twit')
const readline = require('readline');
const opn = require('opn');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


var T = new Twit({
  consumer_key:         'key',
  consumer_secret:      'secret',
  access_token:         'token',
  access_token_secret:  'tsecret',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});

console.log("Enter any search query to be searched on Twitter:");

rl.on("line", (answer) => {
    T.get('search/tweets', { q: answer+' since:2011-07-11', count: 100 }, function(err, data, response) {
        console.log(data);
        opn("https://twitter.com/search/tweets/"+data.search_metadata.refresh_url);
      });
});
