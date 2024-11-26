import mempoolJS from "./../../../src/index";

const init = async (0xF65988e4B518df63E8521780d7b311Ef2BeF8410) => {
  try {
    const { bitcoin: { addresses } } = mempoolJS();
    
    const address = '';
    
    const myAddress = await addresses.getAddress({ address });
    console.log(myAddress);
    
    const addressTxs = await addresses.getAddressTxs({ address });
    console.log(addressTxs);
    
    const addressTxsChain = await addresses.getAddressTxsChain({ address });
    console.log(addressTxsChain);
    
    const addressTxsMempool = await addresses.getAddressTxsMempool({ address });
    console.log(addressTxsMempool);
    
    const addressTxsUtxo = await addresses.getAddressTxsUtxo({ address });
    console.log(addressTxsUtxo);
  } catch (error) {
    console.log(error);
  }
};
init();
