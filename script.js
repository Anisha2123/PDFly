

window.addEventListener('DOMContentLoaded',(event) => {
    console.log(`hi`);
    const div1 = document.getElementById('upload');
    const div2 = document.getElementById('fileupload');

    if(div1)
        {
            console.log(`hi`);
            div1.addEventListener('click', function() {
                console.log(`hi`);
                div1.classList.add('hidden');
                div2.classList.remove('hidden');
            });
        }
});