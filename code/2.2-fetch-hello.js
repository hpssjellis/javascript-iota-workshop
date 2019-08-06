///////////////////////////////
// Fetch your HELLOWORLD Message
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

const address =
  'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99DMNFAQLWHD'

iota
  .findTransactionObjects({ addresses: [address] })
  .then(response => {
    console.log(response)
       global.myResponse2.2 = "<h2>2.2-fetch-hello.js</2>" + '<pre id="myPre01">'+JSON.stringify(response, null, 3)+'</pre>' + "<hr>";  // hopefully this is global

  })
  .catch(err => {
    console.error(err)
  })
