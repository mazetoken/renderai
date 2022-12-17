var account = null;
var contract = null;
const ADDRESS1 = "0x1749c3ED28189a4695CBaEe75816a962020408A0";
const ADDRESS2 = "0x6949c8d5c6bDa32e89d6e4594DFd8B7C33A5fdCf";
const ADDRESS3 = "0xb58904a0328abACf05b288E51a578471A8317B70";

document.getElementById('connect').onclick = async () => {
if (window.ethereum) {
    await window.ethereum.send('eth_requestAccounts');
    window.web3 = new Web3(window.ethereum);
    var accounts = await web3.eth.getAccounts();
    account = accounts[0];
    document.getElementById('wallet-address').textContent = account;
    contract1 = new web3.eth.Contract(RenderaiNFTAbi, ADDRESS1);
    contract2 = new web3.eth.Contract(RenderaiNFTSaleV2Abi, ADDRESS2);
    contract3 = new web3.eth.Contract(BlockchainInvadersAbi, ADDRESS3);

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
        contract1.methods.transferFrom(account, address1, tokenId1).send({ from: account, gas: 150000, gasPrice: 250000000000 })
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
        contract1.methods.balanceOf("0x6949c8d5c6bDa32e89d6e4594DFd8B7C33A5fdCf").call()
            .then(function (result) {
        balance = result;
        for(var i = 0; i < balance; i++){
        contract1.methods.tokenOfOwnerByIndex("0x6949c8d5c6bDa32e89d6e4594DFd8B7C33A5fdCf", i).call()
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

    document.getElementById('approveI').onclick = async () => {
        //var amount1 = $("#amount1").val();
        //var amount2 = amount1 *1000000000 *1000000000;
        //var amount3 = amount2.toString();
        var amount = 50000;
        let amount1 = new BigNumber(amount * 1000000000000000000);
        amount1.toString();
        var content = "Approving transaction from: ";
        content += account;
        $("#lang5").html(content);
        contract3.methods.approve("0x6949c8d5c6bDa32e89d6e4594DFd8B7C33A5fdCf", amount1).send({ from: account, gas: 100000, gasPrice: 250000000000 })
            .then(function (receipt) {
                console.log(receipt);
        var content = "Transaction id: ";
        content += JSON.stringify(receipt.transactionHash);
        $("#lang5").html(content);
            });;
    }

    document.getElementById('buyNFT2').onclick = async () => {
        var tokenId3 = $("#tokenId3").val();
        var tokenAmount = 50000;
        let tokenAmount1 = new BigNumber(tokenAmount * 1000000000000000000);
        tokenAmount1.toString();
        var burnAmount = 12500;
        let burnAmount1 = new BigNumber(burnAmount * 1000000000000000000);
        burnAmount1.toString();
        var content = "Sending transaction from: ";
        content += account;
        $("#lang6").html(content);
        contract2.methods.buyNft2(account, tokenId3, tokenAmount1, burnAmount1).send({ from: account, gas: 250000, gasPrice: 250000000000 })
            .then(function (receipt) {
                console.log(receipt);
        var content = "Transaction id: ";
        content += JSON.stringify(receipt.transactionHash);
        $("#lang6").html(content);
            });;
    }

    document.getElementById('withdrawN').onclick = async () => {
        var tokenId4 = $("#tokenId4").val();
        var content = "Sending transaction from: ";
        content += account;
        $("#lang7").html(content);
        contract2.methods.withdrawNft(tokenId4).send({ from: account, gas: 150000, gasPrice: 250000000000 })
            .then(function (receipt) {
                console.log(receipt);
        var content = "Transaction id: ";
        content += JSON.stringify(receipt.transactionHash);
        $("#lang7").html(content);
            });;
    }

    document.getElementById('withdrawT').onclick = async () => {
        var content = "Sending transaction from: ";
        content += account;
        $("#lang8").html(content);
        contract2.methods.withdrawToken().send({ from: account, gas: 100000, gasPrice: 250000000000 })
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