import erc721Abi from "../erc721Abi";
import {useState} from 'react';
import axios from "axios";

function Erc721({ web3, account, erc721list, contractAddress }) {
    const [to, setTo] = useState("");
	// console.log(account);
    // console.log(web3);
    
    const sendToken = async function(tokenAddr, tokenId) {
        axios.post('http://localhost:3000/like/add', {userId:account,postId:tokenId});

        const tokenContract = await new web3.eth.Contract(
          erc721Abi,
          tokenAddr,
          {
              from: account,
          }
      );
      tokenContract.methods
          .transferFrom(account, to, tokenId)
          .send({
              from: account,
          })
          .on("receipt", (receipt) => {
              setTo("");
          });
    };

    const getLikeCnt = async (tokenId) => {
        var likeCnt = 0;
        await axios({
            method: "get", 
            url:'http://localhost:3000/like', 
            params:{postId:tokenId}
        })
        .then((res) => {
            if(res.data.data !== null) likeCnt = res.data.data;
        });
        return likeCnt;
    };

    return (
        <div className="erc721list">
            {erc721list.map((token) => {
                var likeCnt = 0;
                getLikeCnt(token.tokenId).then((res) => {likeCnt = res});

                return (
                    <div className="erc721token" key={token.tokenId}>
                        Name: <span className="name">{token.name}</span>(
                        <span className="symbol">{token.symbol}</span>)
                        <div className="nft">id: {token.tokenId}</div>
                        <img src={token.tokenURI.image} width={300} />
                        <div className="tokenTransfer">
                            <button
                                className="sendErc20Btn"
                                onClick={sendToken.bind(
                                    this,
                                    contractAddress,
                                    token.tokenId
                                )}
                            >
                                좋아요
                            </button>
                            &nbsp;{likeCnt} 개
                        </div>
                        <div className="nftdisc"> 설명: {token.tokenURI.description} </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Erc721;