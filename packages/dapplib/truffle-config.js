require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid glove flower smooth name recipe rural home gesture bread slot genuine'; 
let testAccounts = [
"0x922346eb012fbdacbe19e25df1cde526b76100a993ecdbfaff9d99ad5fb1e83a",
"0xd8c95a598cc01029cc6034892ff8f1e22905d74dda85fc485006be4056fa09fb",
"0xdc115790e7988844e079bc2b097205d93729d50af9e83e7074624fc92c2a6f4a",
"0xfc14d20eedd369c432b3e0279ad567e4380a6d46ec6508b8b822aa0ca06dab98",
"0x95d51d6596ec079e79763efc35d564d6db077ed8dd0f8ec78819e4a4c85cc659",
"0xb8685e627f5e905f05abd884b015eea0f8af4e14ccf9ffdd2d357a13276ee55a",
"0xe28c5c4b1b74d2471ee4b90aaaee45a657b960fd388e8cdf2dcdfcee6ae011e5",
"0x32a053e8aeb8c952162a20ef65b3cb7c6934c1eaaeb503617a4c12e121676aaa",
"0xe6b829a557b4dec3666d0efefe077ff6a6187f192faf70166c068db8bf47827a",
"0x931e527a82d8189f9dceba7aac35643a81bbd646ac734bca04cdfc0b3c6ac342"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


