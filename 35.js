var matrix =new Array(4); 
for(var i=0;i<4;i++){
    matrix[i]=new Array(5);
    console.log("Aquiiiiiii1");
}

for(var j=0;j<4;j++){
    for(var i=0;i<5;i++){
        matrix[j][i]= Math.floor((Math.random() * 100) + 1);
        console.log(Math.floor((Math.random() * 100) + 1));
    }
}

for(var j=0;j<4;j++){
    for(var i=0;i<5;i++){
        console.log([j][i]);
        console.log("Aquiiiiiii3");
    }
}