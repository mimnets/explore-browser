const showAlert = () =>{
    const num = Math.random()*10;
    if(num < 5){
        alert(num + ' is less then 5')
    }
}

const askSomething = () =>{
    const decision = confirm('Are you coming to office?')
    if(decision === true){
        alert('Please come on time');
    }
    else{
        alert('You are dismiss!')
    }
}

const getUserInfo = () =>{
    const name = prompt('Tell us your name?')
    console.log(name)
}