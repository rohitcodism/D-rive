import { useState, useEffect } from 'react'
import './App.css'
import { ethers } from 'ethers';
import { Container } from '@mui/material';
import { Drive } from './Components/Drive';
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

        const signer = provider.getSigner();
        const address = await signer.getAddress();

        console.log(address);
        setAccount(address);

        let contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
        const contract = await new ethers.Contract(contractAddress, Drive.abi, signer) // to create an instance of a contract we need these three things
        console.log(contract);
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
        <Route path='/' element={<Drive />}/>
        <Route path='/images' element={<Display />} />
        <Route path='/upload' element={<Upload account={account} contract={contract} provider={provider} />} />
        <Route path='/documents' element={<Documents />}/>
        <Route path='/others' element={<Others />} />
      </Routes>
    </Container>
  )
}

export default App
