import { useState, useEffect } from 'react'
import './App.css'
import { Contract, ethers } from 'ethers';
import Drive from "../../../Server/artifacts/contracts/Drive.sol/Drive.json";
import { Container } from '@mui/material';
import { GDrive } from './Components/Drive';
import { Routes, Route } from 'react-router-dom';
import { Upload } from './Components/Upload';
import { Documents } from './Components/Documents';
import { Others } from './Components/Others';
import { Display } from './Components/Display';

function App() {

  const[account, setAccount] = useState('');
  const[contract, setContract] = useState(null);
  const[provider, setProvider] = useState(null);
  const[modalOpen, setModalOpen] = useState(false);



  useEffect(() => {
    // provider injected by metamask
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const wallet = async () => {

      console.log("function called");
      if (provider) {

        //will help to open metamask automatically
        await provider.send("eth_requestAccounts")

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        const signer = provider.getSigner();
        const address = await signer.getAddress();

        console.log(address);
        setAccount(address);

        const contractAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";
        const contract =  new Contract(contractAddress, Drive.abi, signer) // to create an instance of a contract we need these three things
        {contract ? console.log(contract) : "Contract Error"}
        setContract(contract);

        setProvider(signer);

      } else {
        alert("Metamask is not installed.");
      }
    }
    provider && wallet();
  }, [])

  return (
    <Container sx={{width : "100vw", padding: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: "auto", height : "100vh"}}>
      <Routes>
        {console.log(account, contract, provider)}
        <Route path='/' element={<GDrive account={account} contract={contract} />}/>
        <Route path='/images' element={<Display contract={contract} account={account} />} />
        <Route path='/upload' element={<Upload account={account} contract={contract} />} />
        <Route path='/documents' element={<Documents />}/>
        <Route path='/others' element={<Others />} />
      </Routes>
    </Container>
  )
}

export default App
