
function megaFriend(name){
    let big = name[0]; 
    let index = 0; 
    for(i=1; i<name.length; i++){
        if( big < name[i]){
            big = name[i];
            index = i;
        }
    }
    return index;
}

let friendName = ['Batman','Superman','Spiderman','IronManHulkBuster'];
let lengthOfName = [];
for(let i=0; i<friendName.length; i++){
    let name = friendName[i];
    nameLength = name.length;
    lengthOfName.push(nameLength)
}

 longestName = megaFriend(lengthOfName);
 console.log(friendName[longestName]);
