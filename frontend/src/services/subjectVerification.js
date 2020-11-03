async function verificaSubject(){

    const subjectName = await localStorage.getItem('subjectName');

    if(verificaSubject === ""){
        return false;
    }

    return true;
}

export default verificaSubject;