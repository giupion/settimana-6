
    document.addEventListener('DOMContentLoaded', () => {
        document.querySelector('#caricaimmagini').addEventListener('click', () => {
            fetch('https://api.pexels.com/v1/search?query=cat', {
                method: 'GET',
                headers: {
                    Authorization: 'UExxqD6b4RT9YsM5yBGe8zz7VjYAa6HWOTFrI0naskFdwAhopQrTLmMD'
                }
            })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                json.photos.forEach(element => {
                    document.querySelectorAll('div.card').forEach(div => {
                        div.remove();
                    })

                   
                })})
            .catch(error => console.log(error))
    })
})




/*fetch ("https://api.pexels.com/v1/"
,
{method:'GET',

headers:{Autorization:'UExxqD6b4RT9YsM5yBGe8zz7VjYAa6HWOTFrI0naskFdwAhopQrTLmMD'
}})



.then (response=>response.json()) 
.then(json=>{
    let ul=document.querySelector('#caricaimmagini');
    json.photos.forEach(photo=>{let li=document.createElement('li')
    li.className='list-group-item';
    let img=document.createElement('img');
    img.src=photo.src.small;
    img.alt=photo.alt;
    li.appendChild(img);
    ul.appendChild(li);})
    
    
})


*/