const toggle = document.getElementById('toggle');

toggle.addEventListener('change' , (muda)=> {
    document.body.classList.toggle('dark' , muda.target.checked);

})
