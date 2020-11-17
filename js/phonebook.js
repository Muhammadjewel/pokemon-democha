// Hamma kontaktlar joylanadigan array
var contacts = [];

// Kerakli HTML elementlarni topib olamiz
var elNewContactForm = $_('.js-new-contact-form');
var elNewContactNameInput = $_('.js-new-contact-form__name-input', elNewContactForm);
var elNewContactSurnameInput = $_('.js-new-contact-form__surname-input', elNewContactForm);
var elNewContactPhoneInput = $_('.js-new-contact-form__phone-input', elNewContactForm);
var elNewContactRelationshipInput = $_('.js-new-contact-form__relationship-input', elNewContactForm);

var elContacts = $_('.contacts');

// Maydon bo'shligini tekshirib beruvchi yordamchi funksiya
var isInputEmpty = function (input) {
  if (input === '') {
    return true;
  } else {
    return false;
  }
};

// Yangi kontakt obyektini tuzib beruvchi yordamchi funksiya
var createContactObject = function (name, surname, phone, relationship) {
  return {
    // name: name,
    // surname: surname,
    // phone: phone,
    // relationship: relationship
    name,
    surname,
    phone,
    relationship
  };
};

var renderContactsList = function () {
  // Sahifada ko'rinib turgan kontaktlarni o'chirib tashlaymiz
  elContacts.innerHTML = '';

  // Har bir kontakt uchun yangi li elementini yaratib, uni sahifadagi ro'yxatga qo'shamiz
  // for (var i = 0; i < contacts.length; i++) {
  contacts.forEach(function (contact) {
    // var elNewLi = document.createElement('li');
    // elNewLi.classList.add('contacts__item', 'list-group-item');

    var elNewLi = createElement('li', 'contacts__item list-group-item');

    // var elContactFullName = document.createElement('div');
    // elContactFullName.classList.add('contacts__fullname');
    // elContactFullName.textContent = `${contact.name} ${contact.surname}`;
    var elContactFullName = createElement('div', 'contacts__fullname', `${contact.name} ${contact.surname}`);

    // var elContactRelationship = document.createElement('div');
    // elContactRelationship.classList.add('contacts__relationship', 'small');
    // elContactRelationship.textContent = contact.relationship;
    var elContactRelationship = createElement('div', 'contacts__relationship small', contact.relationship);

    // var elContactLink = document.createElement('a');
    // elContactLink.classList.add('contacts__phone-number');
    // elContactLink.textContent = contact.phone;
    var elContactLink = createElement('a', 'contacts__phone-number', contact.phone);
    elContactLink.href = `tel:${contact.phone}`;

    elNewLi.appendChild(elContactFullName);
    elNewLi.appendChild(elContactRelationship);
    elNewLi.appendChild(elContactLink);

    elContacts.appendChild(elNewLi);
  });
  // }
};

var clearInputFields = function () {
  elNewContactNameInput.value = '';
  elNewContactSurnameInput.value = '';
  elNewContactPhoneInput.value = '';
  elNewContactRelationshipInput.value = '';

  elNewContactNameInput.focus();
};

elNewContactNameInput.focus();

// Form topshirilishiga quloq solamiz
elNewContactForm.addEventListener('submit', function (evt) {
  // To'xta!!!
  evt.preventDefault();

  // Yordamchi funksiyamizning ishlatilishiga misol
  // if (isInputEmpty(name)) {
  //   return;
  // }
    
  // Kiritilgan ma'lumotlarni o'zgaruvchiga saqlab olamiz
  var name = elNewContactNameInput.value.trim();
  var surname = elNewContactSurnameInput.value.trim();
  var phone = elNewContactPhoneInput.value.trim();
  var relationship = elNewContactRelationshipInput.value.trim();

  // Kiritilgan ma'lumotlar asosida obyekt tuzuvchi yordamchi funksiyamiz yordamida yangi obyekt yaratib uni kontaktlar arrayiga qo'shib qo'yamiz
  contacts.push(createContactObject(name, surname, phone, relationship));

  renderContactsList();
  clearInputFields();
});
