
function oddEven(num) {
    for (let i = 1; i <= num ; i++){
        if ( i % 2 === 0){
            console.log('Even');
        } else {
            console.log('Odd');
        }
    }
}

oddEven(10);
