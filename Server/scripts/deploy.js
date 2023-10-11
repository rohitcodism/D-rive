const hre = require("hardhat");


async function main() {
    const Drive = await hre.ethers.deployContract("Drive");
    const drive = await Drive.waitForDeployment();

    console.log(`Module deployed to :  ${drive.address}`);
}

main()
.catch((error) =>{
    console.error(error);
    process.exitCode(1);
});

// 0x5fbdb2315678afecb367f032d93f642f64180aa3