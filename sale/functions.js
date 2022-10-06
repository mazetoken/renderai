function wallet() {
    var content = "";
    var event = contractRenderaiNFT.methods.balanceOf(zombieMaster).call({ from: zombieMaster })
      .then(function (result) {
    balance = result;
    for(var i = 0; i < balance; i++){
    var event = contractRenderaiNFT.methods.tokenOfOwnerByIndex(zombieMaster, i).call({ from: zombieMaster })
        .then(function (result) {
    var event = contractRenderaiNFT.methods.tokenURI(Number(result)).call()
        .then(function (result1) {
    content += "<img src=https://bafybeids4udwtkatf5xvspez3ynkbs5vhgljaczfx3643yndfjew6qe7pq.ipfs.nftstorage.link/"+result+".png width=256 height=256>" + " Id: " + result;
    $("#lang1").html(content);
    });
    });
    };
    });
};

function sendNFT() {
    var address1 = $("#address1").val();
    var tokenId1 = $("#tokenId1").val();
    var content = "Sending transaction from: ";
    content += zombieMaster;
    $("#lang2").html(content);
    var event = contractRenderaiNFT.methods.transferFrom(zombieMaster, address1, tokenId1).send({ from: zombieMaster })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent!: ";
            alert("Done!");
    content += JSON.stringify(receipt.transactionHash);
    $("#lang2").html(content);
        });;
};

// RENDERAI NFT Market

function wallet2() {
    var content = "";
    var event = contractRenderaiNFT.methods.balanceOf("0xa2f942Be9F56B119DDEA76BA50eEcF437deB4459").call()
        .then(function (result) {
    balance = result;
    for(var i = 0; i < balance; i++){
    var event = contractRenderaiNFT.methods.tokenOfOwnerByIndex("0xa2f942Be9F56B119DDEA76BA50eEcF437deB4459", i).call()
        .then(function (result) {
    var event = contractRenderaiNFT.methods.tokenURI(Number(result)).call()
        .then(function (result1) {
    content += "<img src=https://bafybeids4udwtkatf5xvspez3ynkbs5vhgljaczfx3643yndfjew6qe7pq.ipfs.nftstorage.link/"+result+".png width=256 height=256>" + " Id: " + result;
    $("#lang3").html(content);
    });
    });
    };
    });
};

function buyNFT() {
    var tokenId2 = $("#tokenId2").val();
    var content = "Sending transaction from: ";
    content += zombieMaster;
    $("#lang4").html(content);
    var event = contractRenderaiNFTSale.methods.buyNft(zombieMaster, tokenId2).send({ from: zombieMaster, value: 20000000000000000000 })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent!: ";
            alert("Done! You bought it.");
    content += JSON.stringify(receipt.transactionHash);
    $("#lang4").html(content);
        });;
};

function withdraw() {
    var tokenId3 = $("#tokenId3").val();
    var content = "Sending transaction from: ";
    content += zombieMaster;
    $("#lang5").html(content);
    var event = contractRenderaiNFTSale.methods.withdrawNft(tokenId3).send({ from: zombieMaster })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent!: ";
            alert("Done! You bought it.");
    content += JSON.stringify(receipt.transactionHash);
    $("#lang5").html(content);
        });;
  };

  function transferV() {
    var address2 = $("#address2").val();
    var content = "Sending transaction from: ";
    content += zombieMaster;
    $("#lang6").html(content);
    var event = contractRenderaiNFTSale.methods.transferValue(address2).send({ from: zombieMaster })
        .then(function (receipt) {
            console.log(receipt);
    var content = "Transaction sent!: ";
            alert("Done! You bought it.");
    content += JSON.stringify(receipt.transactionHash);
    $("#lang6").html(content);
        });;
  };