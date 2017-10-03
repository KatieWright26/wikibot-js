const request = require('superagent');

request
  .post('https://hooks.slack.com/services/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')
  .send({ text: "test string"})
  .end((err, res) => {
    if(err || !res.ok) {
      console.log("Oh no! error");
    } else {
      console.log("Success!" + JSON.stringify(res.body));
    }
  });