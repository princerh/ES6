const loadPhone = async (searchText , isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones, isShowAll);
}

// step 1 kothay add korbo 
const phoneContainer = document.getElementById("phone-container")

const displayPhones = (phones, isShowAll) => {
    // console.log(phones); 

phoneContainer.textContent = '';

// display show all button if there are more than 12 phones 
const showAllContainer = document.getElementById("show-all-container");
if(phones.length > 12 && !isShowAll){
    showAllContainer.classList.remove("hidden");
}
else{
    showAllContainer.classList.add("hidden");
}

// display only first 12 phones if not showall
if(!isShowAll){
    phones = phones.slice(0, 12);
}
    phones.forEach(phone => {
        // console.log(phone) 
        // step 2 create a div
        const phoneCard = document.createElement("div");
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        // step 3 set innter html 
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">${phone.phone_name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-center">
                <button onclick = "handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
              </div>
            </div>
        `
        // step 4 append child 
        phoneContainer.appendChild(phoneCard);
    })
    toggleLoadingSpinner(false);
}

const handleShowDetail = async(id) =>{
    console.log("clicked show details", id);
const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
const data = await res.json();
const phone = data.data;
    // load single phone data 
showPhoneDetails(phone);
}

const showPhoneDetails = (phone) => {
    console.log(phone);

const phoneName = document.getElementById("show-detail-phone-name");

phoneName.innerText = phone.name;

const showDetailContainer = document.getElementById("show-detail-container");

showDetailContainer.innerHTML = `
<img src="${phone.image}" alt="" />
<p><span>Storage:</span>${phone?.mainFeatures?.storage} </p>
<p><span>GPS:</span>${phone?.others?.GPS || 'No GPS'}</p>
`



    show_details_modal.showModal()
}

const handleSearch = (isShowAll) => {
    toggleLoadingSpinner(true);
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    // console.log(searchText);
    loadPhone(searchText, isShowAll);
    // searchField.value = "";
}


// recap 
// const handleSearch2 = () => {
//     toggleLoadingSpinner(true);
//     const searchField2 = document.getElementById("search-field2");
//     const searchText2 = searchField2.value;
//     loadPhone(searchText2);
// }

const toggleLoadingSpinner = (isLoading) => {
    const loadingSpinner = document.getElementById("loading-spinner");
    if(isLoading){
        loadingSpinner.classList.remove("hidden");
    }
    else{
        loadingSpinner.classList.add("hidden");
    }
}


const handleShowAll = () => {
handleSearch(true)
document.getElementById("search-field").value = "";
}

// loadPhone(); 