///////////////////////////////
// Fetch balance of an address
///////////////////////////////

const iotaLibrary = require('@iota/core')

const iota = iotaLibrary.composeAPI({
  provider: 'https://nodes.devnet.thetangle.org:443'
})

const address =
  'NBZLOBCWG9BAQTODDKNF9LYYTBOUWSQSGCWFQVZZR9QXCOAIBRYDTZOEGBGMZKJYZOPPGRGFFWTXUKUKW'

iota
  .getBalances([address], 100)
  .then(({ balances }) => {
    console.log(balances)
   global.myResponse32 = '<h2>3.2-check-balance.js</h2>' + '<pre id="myPre01">'+JSON.stringify(balances, null, 3)+'</pre>' + '<hr>';  // hopefully this is global

  })
  .catch(err => {
    console.error(err)
  })
