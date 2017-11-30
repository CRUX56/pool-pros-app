window.onload = function () {
   
    // GLOBAL VARIABLES

    var poolExperts = document.querySelector('#pool-experts');

    // REQUEST JSON FILE

    var requestURL = "../dealers.json";
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.requestType ='json';
    request.send();
    request.onload = function(){
        var poolCards = request.response;
        //ADD FUNCTIONS AS NEEDED TO REFERENCE JSON FILE
        poolCompany(poolCards);
    }

    // CREATE FUNCTION TO BUILD OUT CARD

    function poolCompany(jsonObj){
        var dealer = jsonObj['dealers'];

        // ADD VARIABLES FOR EACH SECTION OF THE CARD

        for (var i = 0; i < dealer.length; i++){
            var card = document.createElement('<div class="dealer-card"></div>');
            var companyName = document.createElement('h2');
            var companyPhone = document.createElement('h3');
            var companyEmail = document.createElement('p');
            var companyHours = document.createElement('ul');

            companyName.textContent = dealer[i].name;
            companyPhone.textContent = dealer[i].phone1;
            companyEmail.textContent = dealer[i].email;

            var hours = dealer[i].weekHours;
            for (var j = 0; j < hours.length; j++) {
                var hours = document.createElement('li');
                listItem.textContent = hours[j];
                companyHours.appendChild(listItem);
            }

            card.appendChild(companyName);
            card.appendChild(companyPhone);
            card.appendChild(companyEmail);
            card.appendChild(companyHours);

            poolExperts.appendChild(card);

        }

    }
    
}
