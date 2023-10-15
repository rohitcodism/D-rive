// SPDX-License-Identifier: UNLISENSED
pragma solidity 0.8.19;

contract Drive {
    struct Access {
        address user;
        bool access;
    }

    mapping(address => string[]) value; // to store the url of the files
    mapping(address => mapping(address => bool)) ownership;
    mapping(address => Access[]) accessList;
    mapping(address => mapping(address => bool)) prevData;


function add(address _user, string calldata url) external{
    value[_user].push(url);
}

// allowing  user access
function allow(address _user) external {
    ownership[msg.sender][_user] = true;

    // if user if user is remvoved and then again atry to be allowed
    if(prevData[msg.sender][_user] = true){
        for(uint i = 0; i<accessList[msg.sender].length;i++){
            if(accessList[msg.sender][i].user  == _user){
                accessList[msg.sender][i].access = true;
            }
        }
    }else{
        accessList[msg.sender].push(Access(_user, true));
        prevData[msg.sender][_user] = true;
    }
}

//revoking user access
function disallow(address _user) external {
    ownership[msg.sender][_user] = false;
    for(uint i = 0;i<accessList[msg.sender].length;i++){
        if(accessList[msg.sender][i].user == _user){
            accessList[msg.sender][i].access = false;
        }
    }
}

//return the image urls
function display(address _user) external view returns(string[] memory _url){
    require(_user == msg.sender || ownership[_user][msg.sender] == true, "Only owner can display the images.");
    return value[_user];
}

//shows the liat of the shared access users
function shareAccess() public view returns(Access[] memory){
    return accessList[msg.sender];
}

}