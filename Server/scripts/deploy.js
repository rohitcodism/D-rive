const hre = require("hardhat");


async function main() {
    const Drive = await hre.ethers.getContractFactory("Drive");
    const drive = await Drive.deploy();

    console.log(`Module deployed to :  ${drive}`);
}

main()
.catch((error) =>{
    console.error(error);
    process.exitCode(1);
});

