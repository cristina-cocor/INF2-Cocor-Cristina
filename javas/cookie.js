function setCookie(cname, cvalue, sec) {
    const d = new Date();
    d.setTime(d.getTime() + (sec*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1); //string-ul de la pozitia 1 pana la sfarsit
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length); //string-ul de la pozitia name.length si pana la final
      }
    }
    return "";
  }
  
  function getData(){
      localStorage.nume=document.getElementById("nume").value;
      localStorage.prenume=document.getElementById("prenume").value;
      console.log(localStorage.nume);
      console.log(localStorage.prenume);
      location.href="indexAnim.html";
  }