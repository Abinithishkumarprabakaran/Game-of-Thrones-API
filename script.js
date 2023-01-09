let url = 'https://thronesapi.com/api/v2/Characters'

async function res_fetching(){
    
    let url_fetch = await fetch(url)

    let url_result = await url_fetch.json()

    let creating_row = document.createElement('div')
    creating_row.setAttribute('class', 'row')

    for(let i = 0; i<url_result.length; i++){
        
        let creating_col = document.createElement('div')
        creating_col.setAttribute('class', 'col-3')

        let creating_card = document.createElement('div')
        creating_card.setAttribute('class', 'card')
        creating_card.setAttribute('style', 'width: 18rem;')

        let creating_img = document.createElement('img')
        creating_img.setAttribute('class', 'card-img-top')
        creating_img.setAttribute('alt', 'Image not Loaded')
        creating_img.setAttribute('src', url_result[i].imageUrl)
        creating_img.setAttribute('style', 'height: 250px;')

        let creating_card_body = document.createElement('div')
        creating_card_body.setAttribute('class', 'card-body')

        let creating_h5 = document.createElement('h5')
        creating_h5.setAttribute('class', 'card-title')
        creating_h5.innerText = url_result[i].title

        let creating_para_for_name = document.createElement('p')
        let creating_label_name = document.createElement('label')
        creating_label_name.innerText = 'Name: '
        let creating_name = document.createElement('label')
        creating_name.innerText = url_result[i].fullName
        creating_para_for_name.append(creating_label_name)
        creating_para_for_name.append(creating_name)

        
        let creating_para_for_family = document.createElement('p')
        let creating_label_family = document.createElement('label')
        creating_label_family.innerText = 'House: '
        let creating_family = document.createElement('label')
        creating_family.innerText = url_result[i].family
        creating_para_for_family.append(creating_label_family)
        creating_para_for_family.append(creating_family)


        creating_card_body.append(creating_h5)
        creating_card_body.append(creating_para_for_name)
        // creating_card_body.append(creating_para_for_title)
        creating_card_body.append(creating_para_for_family)


        creating_card.append(creating_img)
        creating_card.append(creating_card_body)


        creating_col.append(creating_card)

        creating_row.append(creating_col)
    }

    document.querySelector('body').append(creating_row)

}

res_fetching()