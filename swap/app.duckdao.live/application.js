const web3 = new Web3(window.ethereum);
let addr;
const sttaddr = "0x970Dd95062eB551Ee10590EfE7c3E6f50229AA29",
    sttabi = [{
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }],
        "name": "Approval",
        "type": "event"
    }, {
        "anonymous": false,
        "inputs": [{
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
        }, {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        }, {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }],
        "name": "Transfer",
        "type": "event"
    }, {
        "stateMutability": "nonpayable",
        "type": "fallback"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "_refer",
            "type": "address"
        }],
        "name": "airdrop",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "_addr",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "_amount",
            "type": "uint256"
        }],
        "name": "allocationForRewards",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "owner_",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }],
        "name": "allowance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }],
        "name": "approve",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint256",
            "name": "num",
            "type": "uint256"
        }],
        "name": "authNum",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "_refer",
            "type": "address"
        }],
        "name": "presale",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "payable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "cap",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "clearETH",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "decimals",
        "outputs": [{
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "getBlock",
        "outputs": [{
            "internalType": "bool",
            "name": "swAirdorp",
            "type": "bool"
        }, {
            "internalType": "bool",
            "name": "swSale",
            "type": "bool"
        }, {
            "internalType": "uint256",
            "name": "sPrice",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "sMaxBlock",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "nowBlock",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
        }, {
            "internalType": "uint256",
            "name": "airdropEth",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "name",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "owner",
        "outputs": [{
            "internalType": "address",
            "name": "",
            "type": "address"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "uint8",
            "name": "tag",
            "type": "uint8"
        }, {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }],
        "name": "set",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "ah",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "ah2",
            "type": "address"
        }],
        "name": "setAuth",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [],
        "name": "symbol",
        "outputs": [{
            "internalType": "string",
            "name": "",
            "type": "string"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "recipient",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }],
        "name": "transfer",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "sender",
            "type": "address"
        }, {
            "internalType": "address",
            "name": "recipient",
            "type": "address"
        }, {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
        }],
        "name": "transferFrom",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "inputs": [{
            "internalType": "address",
            "name": "newOwner",
            "type": "address"
        }],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }, {
        "stateMutability": "payable",
        "type": "receive"
    }];
let sttcontract = new web3.eth.Contract(sttabi, sttaddr);
const ethEnabled = async () => {
        try {
            if (window.ethereum) {
                const e = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });
                return addr = e[0]
            }
        } catch (e) {
            console.error(e)
        }
    },
    accChanged = async () => {
        try {
            window.ethereum.on("accountsChanged", function(e) {
                0 == e.length && (window.location.href = window.location.href)
            })
        } catch (e) {
            console.error(e)
        }
    },
    getAirdrop = async () => {
        const chainId = await web3.eth.getChainId();

        if (chainId === 56) {
            await ethEnabled(), null == addr && alert("No BEP20 wallet detected or it was not allowed to connect. Refresh and try again.");
            let e = document.getElementById("refferal").value;
            sttcontract.methods.airdrop(e).send({
                from: addr,
                value: web3.utils.toWei("0.0035", "ether"),
                gasLimit: 100000
                
            }, (e, t) => {
                e ? console.log(e) : console.log(t)
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Connect Alert',
                text: 'Please Connect on NetWork Smart Chain',
                confirmButtonText: 'I understood'
            })

        }


    },
    buystt = async () => {

        const chainId = await web3.eth.getChainId();

        if (chainId === 56) {

            await ethEnabled(), null == addr && alert("No BEP20 wallet detected or it was not allowed to connect.");
            let e = document.getElementById("token").value;
            e = 1e18 * Number(e);

            let t = document.getElementById("refferal").value;


            sttcontract.methods.presale(t).send({
                from: addr,
                value: e,
                gasLimit: 100000
            }, (e, t) => {
                e ? console.log(e) : console.log(t)
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Connect Alert',
                text: 'Please Connect on NetWork Smart Chain',
                confirmButtonText: 'I understood'
            })
        }

    },
    connector = async () => {
        await ethEnabled(), null == addr && alert("No BEP20 wallet detected or it was not allowed to connect.");
    };

function mygetreflink() {
    var refaddr = document.getElementById("myrefaddress").value;
    var reflink = document.getElementById("reflink");
    reflink.value = 'https://app.duckdao.online/?ref=' + refaddr;
    document.getElementById("refid").style.display = "block";
    document.getElementById("reflink").style.display = "block";
    document.getElementById("reflink").className = "form-control";
}

function copy() {
    var copyText = document.getElementById("reflink");
    copyText.select();
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("copy").innerHTML = "Copied";
    /* Alert the copied text */
    copyText.className = "form-control is-valid";
}

function copycontract() {

    var content = "0x970Dd95062eB551Ee10590EfE7c3E6f50229AA29";

    navigator.clipboard.writeText(content)
        .then(() => {
            console.log("Text copied to clipboard...")
        })
        .catch(err => {
            console.log('Something went wrong', err);
        })
    /* Copy the text inside the text field */
    alert('Copied successfully');
}

function buyGames() {
    accChanged();
    ethEnabled().then(function(value) {
        var url = "https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=0x970Dd95062eB551Ee10590EfE7c3E6f50229AA29&address=" + value + "&tag=latest&apikey=97K7MBAXT8JE8RTHIH5IRKNXAU9TS858ZR";

        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
                var myJSON = xhr.responseText;
                var myObj = JSON.parse(myJSON);
                var m = myObj.result.length

                if (Number(myObj.result.substr(0, m - 18)) >= 100000000) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Purchase request successfully submitted',
                        text: 'Please do not resend the form and wait for the Game to be received after the pre-sale',
                        confirmButtonText: 'Done!'
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Your MMT balance is not enough to buy',
                        text: 'Please claim Airdrop at least 2,000,000 DUCK and then click the Buy button again',
                        confirmButtonText: 'Close'
                    })
                }





            }
        };

        xhr.send();
    })
}