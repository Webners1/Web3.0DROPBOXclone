require('babel-register');
require('babel-polyfill');
require('dotenv').config();
var HDWalletProvider = require("truffle-hdwallet-provider");


module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(
          process.env.MNEMONICS, // Array of account private keys
          'https://ropsten.infura.io/v3/969ec7add1f846b39fe907bccb56b721'// Url to an Ethereum Node
        )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 3
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  compilers: {
    solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}