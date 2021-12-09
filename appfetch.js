//este archivo contiene la solucion al ejercicio utilizando fetch


const URL = "https://rickandmortyapi.com/api/character/"
fetch(URL)
.then(response => response.json())
.then(data => allthings(data))

function allthings(data){
    const main= document.querySelector('#main');
    const contenedor = document.querySelector('#contenedor_card')
           
    const fragment = document.createDocumentFragment()


    arrays = Object.values(data.results)
            
            console.log(arrays)
            main.addEventListener('click', e=>{
                addCarrito(e)
            })
            
            create_card();
            
            function create_card(){
               arrays.forEach(characters =>{

                    const card=document.createElement('div');
                    const card_icon=document.createElement('div');
                    const card_info=document.createElement('div');
                    const tittle_card=document.createElement('h3');
                    const img_card=document.createElement('img');
                    const p_card=document.createElement('p');
                    const p_card_info=document.createElement('p');
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
            
                    card.appendChild(card_icon);
                    card_icon.appendChild(img_card);
                    card.appendChild(card_info);
                    card_info.appendChild(tittle_card);
                    card_info.appendChild(p_card_info)
                    card_info.appendChild(p_card);
                    fragment.appendChild(card)
                })
                    contenedor.appendChild(fragment)
                    main.appendChild(contenedor);
            
            }
}