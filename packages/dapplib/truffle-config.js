require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz entire sun food plastic riot pave purity hard light army ghost'; 
let testAccounts = [
"0xf80c16e67b232b68633b45a9b799217d45788a24204b4f6b5a593ea720bdf952",
"0x709187838a697a7bba3d3ad51acc380586385983c0c9ac1999c82593d774be85",
"0x2943ec4e061189a5e3705c4239780529c2dcb2b0f2559f430f67ee688051c098",
"0x591799187208790a784ad1c214fb6ba4be2e72c1625815d00ec4dfbe46d7a5a7",
"0xcb50e4f92aea5bb720dfb62c1ba3f6c0385ca5a6ff04dc4af9eecd0ba19172da",
"0x9df4c9eed040e67b2ed59a9131b8ad366e21f3e33b8c95ce2a39f208cece2841",
"0xd2ebc745c83d85760827205e4290e436fba541b5a489ef2e967ed9c7d765341b",
"0x7c84398ae44563d6654fdc124fcd6a7f854133c62fae30804dd02872c2fa20a7",
"0x1e054ec607e135c8803dcc94a7e0509294fb627bdd3238e1656ab34b319b19b6",
"0x9667f28dcafeabf8cc3cd7505b218ab5d0854477688a3e4214e9dff73bcfcd6b"
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
            gas: 3000000,
            gasPrice: 470000000000,
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


