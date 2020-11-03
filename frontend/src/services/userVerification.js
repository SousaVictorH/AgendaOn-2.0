async function verificaUsuario(){

    const userName = await localStorage.getItem('userName');
    
    if(userName === ""){
        return false;
    }

    return true;
}

export default verificaUsuario;