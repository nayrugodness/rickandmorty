//const URL = "https://rickandmortyapi.com/api/character/"
//fetch(URL)
//.then(response => response.json())
//.then(data => console.log(data))

//.then(data => console.log(data));

const URL = "https://rickandmortyapi.com/api/character/"
const request = new XMLHttpRequest()
request.onreadystatechange = ()=>{
    if(request.readyState === 4){
        if(request.status === 200){
            var resultado = request.responseText
            var resultado_en_objeto = JSON.parse(resultado)
            console.log(resultado_en_objeto)
            
            const main= document.querySelector('#main');
            const contenedor = document.querySelector('#contenedor_card')
           
            const fragment = document.createDocumentFragment()


            arrays = Object.values(resultado_en_objeto)
            
            console.log(arrays)
            main.addEventListener('click', e=>{
                addCarrito(e)
            })
            
            create_card();
            
            function create_card(){
               arrays[1].forEach(characters =>{

                    const card=document.createElement('div');
                    const card_icon=document.createElement('div');
                    const card_info=document.createElement('div');
                    const tittle_card=document.createElement('h3');
                    const img_card=document.createElement('img');
                    const p_card=document.createElement('p');
                    const p_card_info=document.createElement('p')
                    const btn_card=document.createElement('button');
            
                    card.classList.add('card');
                    card.setAttribute('id','card');
                    card_icon.classList.add('icon');
                    card_icon.setAttribute('id', 'icon');
                    card_info.classList.add('info_card');
                    card_info.setAttribute('id', 'info_card')
                    tittle_card.setAttribute('id','titlle');
                    tittle_card.textContent=characters.name;
                    img_card.setAttribute('id', 'image')
                    img_card.setAttribute('src', characters.image);
                    p_card.classList.add('precio')
                    p_card.setAttribute('id', 'parrafo')
                    p_card.textContent=`Status: ${characters.status} Species:${characters.species}`;
                    p_card_info.setAttribute('id' ,'info_parrafo');
                    //btn_card.classList.add('btn-agregar')
                    //btn_card.setAttribute('id', 'btn')
                    //btn_card.dataset.id=characters.id
                    //btn_card.textContent="Agregar";
            
                    card.appendChild(card_icon);
                    card_icon.appendChild(img_card);
                    card.appendChild(card_info);
                    card_info.appendChild(tittle_card);
                    card_info.appendChild(p_card_info)
                    card_info.appendChild(p_card);
                    //card_info.appendChild(btn_card);
                    fragment.appendChild(card)
                })
                    contenedor.appendChild(fragment)
                    main.appendChild(contenedor);
            
            }
            
        }
    }
}
request.open("GET",URL)
request.send()