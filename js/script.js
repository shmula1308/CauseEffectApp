const people = [
  {
    name: "Ben Plazzer",
    street: "Hyzri Talla 14/5",
    city: "Prishtine",
    state: "Komuna e Decanit",
    country: "Republic of Kosovo",
    telephone: "+356 7856 45342",
    birthday: "DOB: 27/10/1958",
    avatar: "./images/7.jpg",
  },
  {
    name: "Andrew Nowrojee",
    street: "Sahit Ballata 12/3",
    city: "Istog",
    state: "Komuna e Llapushnikut",
    country: "Republic of Kosovo",
    telephone: "+345 6475 63473",
    birthday: "DOB: 12/09/1997",
    avatar: "./images/6.jpg",
  },
  {
    name: "Lester Francois",
    street: "Bilall Ternava 27",
    city: "Prizren",
    state: "Komuna e Piqireves",
    country: "Republic of Kosovo",
    telephone: "+3425 645 647",
    birthday: "DOB: 21/06/1968",
    avatar: "./images/5.jpg",
  },
  {
    name: "John Evagora",
    street: "Selvete Dragobija 12/5",
    city: "Muqibabë",
    state: "Muqivrc",
    country: "Republic of Kosovo",
    telephone: "+345 6456 3737",
    birthday: "DOB: 16/01/1976",
    avatar: "./images/4.jpg",
  },
  {
    name: "Laurie Nun",
    street: "Shote Galica 45",
    city: "Dreshaj i Eperm",
    state: "Komuna e Bajqinovcit",
    country: "Republic of Kosovo",
    telephone: "+5647 4747 4747",
    birthday: "DOB: 13/09/1979",
    avatar: "./images/1.jpg",
  },
  {
    name: "Kitty Green",
    street: "Puhie Demaku 13/2",
    city: "Gllogovc",
    state: "Komuna e Goli Otokut",
    country: "Republic of Kosovo",
    telephone: "+4536 3747 273347",
    birthday: "23/01/1876",
    avatar: "./images/2.jpg",
  },
  {
    name: "Leah Pullen",
    street: "Sabit Kamxhiku 12/4",
    city: "Ferizaj",
    state: "Komuna e Llapit",
    country: "Republic of Kosovo",
    telephone: "+4656 4647 47374",
    birthday: "DOB:12/01/1965",
    avatar: "./images/3.jpg",
  },
  {
    name: "Dan Hoffmann",
    street: "Vehbi Presheva 12",
    city: "Peje",
    state: "Komina e Decanit",
    country: "Republic of Kosovo",
    telephone: "+465 3434 3434",
    birthday: "DOB: 13/08/1979",
    avatar: "./images/8.jpg",
  },
  {
    name: "Haruo Nakamura",
    street: "Musli Musliu 11",
    city: "Leposavic",
    state: "Komuna e Barileves",
    country: "Republic of Kosovo",
    telephone: "+ 465 2347 3473",
    birthday: "DOB: 11/05/1964",
    avatar: "./images/9.jpg",
  },
  {
    name: "Michael Paul",
    street: "Berdi Hamza 11",
    city: "Piriqeve",
    state: "Komuna e Malisheves",
    country: "Republic of Kosovo",
    telephone: "+454 4747 4746",
    birthday: "DOB:31/02/1963",
    avatar: "./images/10.jpg",
  },
];

let selectedName;
const contactList = document.querySelector(".contact-list");
contactList.addEventListener("click", getContactDetails);
window.addEventListener("DOMContentLoaded", () => {
  displayContactDetails(people);
  const defaultSelected = document.querySelectorAll(".contact-name")[0];
  defaultSelected.classList.add("active");
});

// Better solution below using closest();
//   function getContactDetails(ev) {
//     if(ev.target.tagName === "LI") {
//         selectedName = ev.target.dataset.name;
//         let contact = people.filter(contact => contact.name === selectedName);
//         displayContactDetails(contact);
//         highlightSelectedName(ev.target)

//     } else if(ev.target.tagName === "SPAN" || ev.target.tagName === "IMG") {
//         selectedName = ev.target.parentNode.dataset.name;
//         let contact = people.filter(contact => contact.name === selectedName);
//         displayContactDetails(contact);
//         highlightSelectedName(ev.target.parentNode)
//     }
// }

function getContactDetails(ev) {
  let name = ev.target.closest(".contact-name").dataset.name;
  let contact = people.filter((contact) => contact.name === name);
  displayContactDetails(contact);
  highlightSelectedName(name);
}

function displayContactDetails(arr) {
  let contact = arr[0];
  let contactCard = document.querySelector(".contact-card");
  contactCard.innerHTML = `<header class="contact-header">
    <img src=${contact.avatar} alt="" class="avatar main-page-avatar" />
    <p class="contact-full-name">${contact.name}</p>
  </header>
  <main>
    <div class="tel-number-wrapper flex">
      <i class="fas fa-phone-alt"></i>
      <p class="tel-number">${contact.telephone}</p>
    </div>
    <div class="address-wrapper flex">
      <i class="fas fa-map-marker-alt"></i>
      <p class="street">${contact.street}</p>
      <p class="city">${contact.city}</p>
      <p class="state">${contact.state}</p>
      <p class="country">${contact.country}</p>
    </div>
    <div class="birthday-wrapper flex">
      <p class="birthday">${contact.birthday}</p>
    </div>
  </main>`;
}

function highlightSelectedName(name) {
  const contactList = document.querySelector(".contact-list");
  contactList.querySelector(".active").classList.remove("active");
  let contact = document.querySelector(`[data-name="${name}"]`);
  contact.classList.add("active");
}
