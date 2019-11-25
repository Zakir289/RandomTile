export default function getSession(){
    if(JSON.parse(localStorage.getItem('login-status')) != null){
        return true;
    }
    else{
        return false;
    }
}
