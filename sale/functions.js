var account = null;
var contract = null;
const ADDRESS1 = "0x1749c3ED28189a4695CBaEe75816a962020408A0";
const ADDRESS2 = "0xa2f942Be9F56B119DDEA76BA50eEcF437deB4459";
//const ADDRESS3 = "0xb58904a0328abACf05b288E51a578471A8317B70";

document.getElementById('connect').onclick = async () => {
if (window.ethereum) {
    await window.ethereum.send('eth_requestAccounts');
    //await ethereum.request({ method: 'eth_requestAccounts' });
    window.web3 = new Web3(window.ethereum);
    var accounts = await web3.eth.getAccounts();
    //var accounts = await ethereum.request({ method: 'eth_accounts' });
    account = accounts[0];
    document.getElementById('wallet-address').textContent = account;
    contract1 = new web3.eth.Contract(RenderaiNFTAbi, ADDRESS1);
    contract2 = new web3.eth.Contract(RenderaiNFTSaleAbi, ADDRESS2);
    //contract3 = new web3.eth.Contract(BIabi, ADDRESS3);

    document.getElementById('wallet').onclick = async () => {
        var content = "";
        contract1.methods.balanceOf(account).call({ from: account })
        .then(function (result) {
        balance = result;
        for(var i = 0; i < balance; i++){
        contract1.methods.tokenOfOwnerByIndex(account, i).call({ from: account })
            .then(function (result) {
        contract1.methods.tokenURI(Number(result)).call()
            .then(function (result1) {
        content += "<img src=https://bafybeids4udwtkatf5xvspez3ynkbs5vhgljaczfx3643yndfjew6qe7pq.ipfs.nftstorage.link/"+result+".png width=256 height=256>" + " Id: " + result;
        $("#lang1").html(content);
        });
        });
        };
        });
    }

    document.getElementById('sendNFT').onclick = async () => {
        var address1 = $("#address1").val();
        var tokenId1 = $("#tokenId1").val();
        var content = "Sending transaction from: ";
        content += account;
        $("#lang2").html(content);
        contract1.methods.transferFrom(account, address1, tokenId1).send({ from: account, gas: 100000, gasPrice: 250000000000 })
            .then(function (receipt) {
                console.log(receipt);
        var content = "Transaction id: ";
        content += JSON.stringify(receipt.transactionHash);
        $("#lang2").html(content);
            });;
    }

    // RENDERAI NFT Market

    document.getElementById('wallet2').onclick = async () => {
        var content = "";
        contract1.methods.balanceOf("0xa2f942Be9F56B119DDEA76BA50eEcF437deB4459").call()
            .then(function (result) {
        balance = result;
        for(var i = 0; i < balance; i++){
        contract1.methods.tokenOfOwnerByIndex("0xa2f942Be9F56B119DDEA76BA50eEcF437deB4459", i).call()
            .then(function (result) {
        contract1.methods.tokenURI(Number(result)).call()
            .then(function (result1) {
        content += "<img src=https://bafybeids4udwtkatf5xvspez3ynkbs5vhgljaczfx3643yndfjew6qe7pq.ipfs.nftstorage.link/"+result+".png width=256 height=256>" + " Id: " + result;
        $("#lang3").html(content);
        });
        });
        };
        });
    }

    document.getElementById('buyNFT').onclick = async () => {
        var tokenId2 = $("#tokenId2").val();
        var content = "Sending transaction from: ";
        content += account;
        $("#lang4").html(content);
        contract2.methods.buyNft(account, tokenId2).send({ from: account, value: 15000000000000000000, gas: 150000, gasPrice: 250000000000 })
            .then(function (receipt) {
                console.log(receipt);
        var content = "Transaction id: ";
        content += JSON.stringify(receipt.transactionHash);
        $("#lang4").html(content);
            });;
    }

    document.getElementById('withdrawN').onclick = async () => {
        var tokenId4 = $("#tokenId4").val();
        var content = "Sending transaction from: ";
        content += account;
        $("#lang8").html(content);
        contract2.methods.withdrawNft(tokenId4).send({ from: account, gas: 100000, gasPrice: 250000000000 })
            .then(function (receipt) {
                console.log(receipt);
        var content = "Transaction id: ";
        content += JSON.stringify(receipt.transactionHash);
        $("#lang8").html(content);
            });;
    }

    document.getElementById('transferVN').onclick = async () => {
        var addressOwner = $("#addressOwner").val();
        var content = "Sending transaction from: ";
        content += account;
        $("#lang9").html(content);
        contract2.methods.transferValue(addressOwner).send({ from: account })
            .then(function (receipt) {
                console.log(receipt);
        var content = "Transaction id: ";
        content += JSON.stringify(receipt.transactionHash);
        $("#lang9").html(content);
            });;
    }
}
}