export const $ = selector => {
    let elements = document.querySelectorAll(selector);
    return elements.length === 1 ? elements[0] : [...elements];
  }
  export const isAuthencation = () => {
    if (localStorage.getItem('user')) {
      const user = JSON.parse(localStorage.getItem('user'));
      if(user.id!=1){
        window.location.href='/'
      }
    } 
  }