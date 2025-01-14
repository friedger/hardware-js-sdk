import type { AddressTestCaseData } from '../../data/types';

export default {
  name: 'one-passphrase18-empty',
  passphrase: '',
  passphraseState: 'n1xWjoRozJunfJ949rNixAWMCh4Vwj4L9j',
  description: '助记词详见 https://onekeyhq.atlassian.net/wiki/spaces/ONEKEY/pages/429490322',
  data: [
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Legacy',
      params: {
        path: "m/44'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': '13ynC7G2kfLGsmga6T2M9veefooQYgd9kj',
        '0/A2147483647': '1Az5Mvn3c2YT9NZe18AXbe3gwxucvT4nHJ',
        '0/A1': '1DsKjc3VuNqAexBbJ16S8BurLC7RoHx4sN',
        '0/A2147483646': '165785guYsXLPECb7Lc9XCsLnJn16YRL3D',
        '0/A45656668': '17TEeSKDrg9P2SRAkpQF3hLSoFbwg4hpj3',
        '2147483647/A0': '1NKzZ2YhE9Eq36fgLzQFymb3e3NiCmdf29',
        '2147483647/A2147483647': '1LxKrfxmo4ZsjQUvc5DDBTe1MmoJmh3aeB',
        '2147483647/A1': '1AS3GtVhMErM7HLpp5ado9LRapF17xdgZi',
        '2147483647/A2147483646': '1BjmLA1EmMXRjZqzcMf1cxE23K6Wbo25GZ',
        '2147483647/A45656668': '18ipose3pYCzDipzL1wXbE9VJmNMfBne9t',
        '1/A0': '14oHkzgkm29jQCLzt9RVTc77ZDsCRhgRkW',
        '1/A2147483647': '1BifFTiydkKTzMikD3cUn56WLg51MLagSg',
        '1/A1': '15wcN6X8HNKBLrnWtDo8gcCuEugQMMqf6L',
        '1/A2147483646': '1LUWmqF83LJkpnSt86Ff4Zy7B7myoQ1kEz',
        '1/A45656668': '1HRmwc7f147fqVLisnri5S6XsvNMEq1D9V',
        '2147483646/A0': '16BDWgDfXvhdekKaTnHFS6V7tY8Us4BECR',
        '2147483646/A2147483647': '1PVcKJcWg759EbHc6TRts6mKz3XQnhHiRa',
        '2147483646/A1': '16hSMh9McCbS67AmvEKynkJ8Smk1XCes7u',
        '2147483646/A2147483646': '1C7HLuwgpBdt6BRD9e5CDLLmb5wfFjS8Te',
        '2147483646/A45656668': '1LEBLhSazxzmQc2ndMKMPjzueFKT77UDAQ',
        '8974594/A0': '16Yoj4itW5XCoV5C3TGRLHvrgmQwjCeJzN',
        '8974594/A2147483647': '1DP6bQaBLcgcVqjy31R95SV9uNsoNTovxj',
        '8974594/A1': '1BrnnyiWgP5yzuftt4vfQUrLa7adKiyzf2',
        '8974594/A2147483646': '1EF32Dr1PYX3ZHyBbgtYCcaKsqGp7J59MG',
        '8974594/A45656668': '1QFQ6p2MdbuPGjeX8DsmymgcNkDP4cNgCa',
      },
    },
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Nested SegWit',
      params: {
        path: "m/49'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': '33M68LM4oKdwShwVGrQWZoBksfEm5SNLMj',
        '0/A2147483647': '3D4YqFBBsWAof2FHj8UjjNpdYstSRFETXd',
        '0/A1': '3QLwwBLo2adTPUaiaPVDoWRbqqPkuR5Gmx',
        '0/A2147483646': '3HAMF29voHhAfWxWjSMqUNNCZFN1vnZibx',
        '0/A45656668': '3Lqg5L18auV9cB1Yrh2ZgzbRkeqzhagdtD',
        '2147483647/A0': '3LP8q4NiSjAvJWo2R2AvWgkiLEAfD6zZKb',
        '2147483647/A2147483647': '3QhgbNPKLCKnntPRKKTE8DtEsusKVMT5W2',
        '2147483647/A1': '32j2sf15wfgisbAsmRnCBS64ueauPiA56X',
        '2147483647/A2147483646': '362hwn4gBSTWAEk8orapZbCfSQxifoXtvT',
        '2147483647/A45656668': '3Fy5Tr7KnMXsNFJc77xjdicmiaDQUmGion',
        '1/A0': '32MH5zU5iAyoCJRSUKy9Lmu8xDvNRNUp7c',
        '1/A2147483647': '38UYLU3XrjSXYKyer2Hb2SnUAkCcJKAph6',
        '1/A1': '34VFdYZ5eUWeQhqzpFYS6LfHYoQqSDFJ2t',
        '1/A2147483646': '3G9tNpmNHnFu98eGxCZd9VLqmtavxgi13U',
        '1/A45656668': '3EED9Cx9aT3MtPaBFSnaUNAspaEAVSE5Ra',
        '2147483646/A0': '3GEJPBv1KBBsQApxwgXb5TMFrbXMnm6r4F',
        '2147483646/A2147483647': '33CEAG6oDzZHgT8RGbrZ6ydwsJbBbpwrYj',
        '2147483646/A1': '3CaF895kSHwcaraRGbDVbhLdWSrrq7cVvi',
        '2147483646/A2147483646': '389y2ddTVTQiKhG2vn4k1zvaZsbv282RNr',
        '2147483646/A45656668': '3LCfGUQaSNsv5ZRyeqzJHMx9js4ba2Jdca',
        '8974594/A0': '3GrZDMyMEYN9r5mgX4ZmLvTayLmrYbLNCF',
        '8974594/A2147483647': '35m8VWRJHfPWU4CdSpLrtKvSpJuXej4QkF',
        '8974594/A1': '37cb3Wc4jg7ebgejyGguwUyGLiwt6mQykc',
        '8974594/A2147483646': '34nPJZfqxKggJ32LCS6nJu8gLEeNctFJAu',
        '8974594/A45656668': '3FiVtALyNALFpTiccjh6ntc8iiAjpkDHn9',
      },
    },
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Native SegWit"',
      params: {
        path: "m/84'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': 'bc1qvncj7d9lxfn799jrlza3lerl3s8w4agp5umhyn',
        '0/A2147483647': 'bc1qvcht02svuetq7g00mkrs20au0tcrjp6hf7l9cv',
        '0/A1': 'bc1q0t2nd08ed94hs4uwurecgu47adnky0qzvhczy2',
        '0/A2147483646': 'bc1qmqe85kajkkuwwun7kz8p4lymznuvuvays9qews',
        '0/A45656668': 'bc1qhcjj9dxuu77hm5jagdqvtvwmwdtpumujkyjamp',
        '2147483647/A0': 'bc1qzru7mpwf48jq5kv6c8d0jee5wj0a546n6vuqd8',
        '2147483647/A2147483647': 'bc1qr3z4ww9nk8fj8fnca2g4dyaw27tycsf33c9xlf',
        '2147483647/A1': 'bc1q38xcjk7a90elsk4k06hs2tlvm6x42xvmutddze',
        '2147483647/A2147483646': 'bc1q5u5thsqew8cfcrcgkxs2ze7mmwaaau4hvxh6ng',
        '2147483647/A45656668': 'bc1qhcv26ck7pj73n7v6szcpedcmn4pmy0ykzrjn82',
        '1/A0': 'bc1qpwfg7zdau6s2n4stueaysygqtcft48yxdacx4g',
        '1/A2147483647': 'bc1qytkqn8r4el4906cxhcvf3pmw3mvd00al39munl',
        '1/A1': 'bc1qndalkvkh7cks8egxwv33z9pcn2rex0upgm7dp6',
        '1/A2147483646': 'bc1q6al65leuzfe00hwagf278ndvdqqlrme088f2f0',
        '1/A45656668': 'bc1qnlwccztp7yul56k4u9gw58cxdrsen0vvvdaz3r',
        '2147483646/A0': 'bc1qk46hmh9xz6cdz4kuy2w9jegf5qda9slf24dsz3',
        '2147483646/A2147483647': 'bc1qc860d9a6gu0lnpypp5ul497rvucnpfxnd8wa4c',
        '2147483646/A1': 'bc1q9umgtwjtyszk05vudeq86zznzhxsrln4kr4a8c',
        '2147483646/A2147483646': 'bc1qaw87ws8qgqf477lkjg5tkrz396tl2rs6fjk60t',
        '2147483646/A45656668': 'bc1qdp20ahzryclky3fzy473c9exdhqev8r3ra2za9',
        '8974594/A0': 'bc1qtx7mkwqdlzd2qclyn5e0z8v2qughfjpy23ev22',
        '8974594/A2147483647': 'bc1qxuhamzju3m5nlx6skyh883cgwwx3857emeapzx',
        '8974594/A1': 'bc1qnfwxv3785upsdhulq7haxqk5hjn270sy96af2q',
        '8974594/A2147483646': 'bc1qrkh0ufex0enaqeulu7ewjv04xfhwq4c0c6jl4s',
        '8974594/A45656668': 'bc1qemw9rqjd7d5t4j2lfe3h6h56w92wxwjq50fre8',
      },
    },
    {
      method: 'btcGetAddress',
      name: 'btcGetAddress-Taproot"',
      params: {
        path: "m/86'/0'/$$INDEX$$'/$$CHANGE$$/$$ADDRESS_INDEX$$",
      },
      expectedAddress: {
        '0/A0': 'bc1pl7h0tjptf635ypj4ertg2925hqz49g7mqqaqw4ehq88fshm74x9qvumh06',
        '0/A2147483647': 'bc1p0tp8fymcpdp2ny80xl8qa7ne2tpu32m2qzjur7awtxrn03m6gntshg9xe8',
        '0/A1': 'bc1psnnfxte09mexvrddcehsrcza2z7fqtg7fd3hns6337lkje63k39q2l39h3',
        '0/A2147483646': 'bc1p45zua4n7y4j5rnudkgu7xg35nvan5wv7a9ccnwexyfz0mr0aexeq5yucqt',
        '0/A45656668': 'bc1pzdwsgfmsewtzzzrm7l7qetrxtw3vlxs9zm7dc89zasepxqn5z9qqh7tv8g',
        '2147483647/A0': 'bc1pchapxfwlde3ktc9k34j94pt6hyq3p35y6yftzmh7dz3jhlegx25sfalenj',
        '2147483647/A2147483647': 'bc1pme4txhdtgskgv4cs0wcsp29dcrlw07h3exs3jyfp89mcng2lj4ps8mjs7v',
        '2147483647/A1': 'bc1pxwkv5lpmc2hnxdwh9czk9czmsk9czke9n6jtzg7xhn76plsswtsqkfwq5n',
        '2147483647/A2147483646': 'bc1pkwwpdsy8tfv8zyr6vwwzgpvypckj75hs7md7rpq7xyy2xr6nns2qmucjw8',
        '2147483647/A45656668': 'bc1pawwx4mn59yw23zcz627fx0r794fyeugvdhxw3rjqz4mctq8v7s3qmrfmwp',
        '1/A0': 'bc1pf5u2y0eacwee9zcw3vmkg3grj639przwgdypqy0yevwrw434yhlqrf00fh',
        '1/A2147483647': 'bc1pq3qmvnexmpnh5n092cw792zd2kzp4tpl6g5ruea7uec8g0teglfqa5g908',
        '1/A1': 'bc1p8047zslkq27mnws98gkfd4cqhvfq8u99v7wutxpfp9khw8ee2qaqvw3475',
        '1/A2147483646': 'bc1p49fm8vc4ew9gtc0favwtenqsvzjh4fd93ssrtqvafd6g8g98hq4q5mpl3v',
        '1/A45656668': 'bc1pjyz3e39lfzsf06lftyy3s5fpthz9mz95xkn3mdk5c53sl4sqhrysfr0xqq',
        '2147483646/A0': 'bc1pxv4l5uj75hv9lwwfv9msc2phr26dkc5m7wqsjydzhk0sl0fay6vq8pl2zx',
        '2147483646/A2147483647': 'bc1pzauyfzx3q0le3edkmyw3v5ptu02nzlfgvx3ckayqannscdrdysys625u5u',
        '2147483646/A1': 'bc1p37uscv8dskxd6tsj29g74kf7nectf7866ds3l688sa95alj53clsm7uq2y',
        '2147483646/A2147483646': 'bc1pe89eptux2praf04aztrg7vnkx599lkdw0drryee0w36jrqzkscas0hfgtl',
        '2147483646/A45656668': 'bc1przk9ey3vcrztxjdu2k888r8a3d03a7muapgm636hf77tt9eg4vgs6lc04w',
        '8974594/A0': 'bc1p72thgc8tnd7ydjtya6v7zc7z699yqpdwujna3gakp79w6u8ytxgsd8k89y',
        '8974594/A2147483647': 'bc1prfcv3qckqk9p2wl77rxcjhsgnzssrj2w8jw8hn44xqqvqyhcdh0q93s44g',
        '8974594/A1': 'bc1p2jfqca74c8nstqjpywf4c5xfphx0h7f5qpmjh5kpr3qnhmyvc3js9rk46d',
        '8974594/A2147483646': 'bc1p7ahpvf9es3djay23xar6cujw4tk8qzemu6p042p4rwn55fuy85yq29ksy3',
        '8974594/A45656668': 'bc1pm07m8s9xthr46j3vxlauryfl3e0hfj7prhjvjktaay5ymk0fvzgquyu80e',
      },
    },
  ],
} as AddressTestCaseData;
