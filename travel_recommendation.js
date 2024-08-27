// function search(){
//     const s = document.getElementById('search-input').value
//     const fetchAPI = fetch('./travel_recommendation_api.json')
//         .then(result => result.json())
//         .then(data => {
//             if(s == 'beaches'){
//                 console.log(data.beaches)
//             }else if(s == 'temples') {
//                 console.log(data.temples)
//             }else if(s == 'countries'){
//                 data.countries
//             }
//         })
//         .catch(err => console.log(err))
//     console.log(fetchAPI)
// }


async function getData() {
    const url = "./travel_recommendation_api.json";
    const searchedWord = document.getElementById('search-input').value
    const image1 = document.getElementById('first-image')
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
        if(searchedWord == 'beaches'){
            document.getElementById('recommendation-result').classList.remove('recommendation-result-hidden')
            document.getElementById('recommendation-result').classList.add('recommendation-result')
            document.getElementById('first-image').src = json.beaches[0].imageUrl
            document.getElementById('second-image').src = json.beaches[1].imageUrl
            document.getElementById('first-name').innerHTML = json.beaches[0].name
            document.getElementById('second-name').innerHTML = json.beaches[1].name
            document.getElementById('first-description').innerHTML = json.beaches[0].description
            document.getElementById('second-description').innerHTML = json.beaches[1].description
            
        }else if(searchedWord == 'temples') {
            document.getElementById('recommendation-result').classList.remove('recommendation-result-hidden')
            document.getElementById('recommendation-result').classList.add('recommendation-result')
            document.getElementById('first-image').src = json.temples[0].imageUrl
            document.getElementById('second-image').src = json.temples[1].imageUrl
            document.getElementById('first-name').innerHTML = json.temples[0].name
            document.getElementById('second-name').innerHTML = json.temples[1].name
            document.getElementById('first-description').innerHTML = json.temples[0].description
            document.getElementById('second-description').innerHTML = json.temples[1].description
        }else if(searchedWord == 'countries'){
            document.getElementById('recommendation-result').classList.remove('recommendation-result-hidden')
            document.getElementById('recommendation-result').classList.add('recommendation-result')
            document.getElementById('first-image').src = json.countries[0].imageUrl
            document.getElementById('second-image').src = json.countries[1].imageUrl
            document.getElementById('first-name').innerHTML = json.countries[0].name
            document.getElementById('second-name').innerHTML = json.countries[1].name
            document.getElementById('first-description').innerHTML = json.countries[0].description
            document.getElementById('second-description').innerHTML = json.countries[1].description
        }else{
            alert('No result, try this suggested keywords "beaches, temples, countries"')
            document.getElementById('recommendation-result').classList.add('recommendation-result-hidden')
        }

    } catch (error) {
      console.error(error.message);
    }
  }
