window.onload = () =>{

    let menu = document.getElementById('menuid');
    console.log(menu);

    let newitem = document.createElement('li')
    newitem.innerHTML = 'desde js';
    newitem.classList = 'item';
    menu.appendChild(newitem);


}

