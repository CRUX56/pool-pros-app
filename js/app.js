window.onload = function () {
   
    // GLOBAL VARIABLES

    var poolExperts = document.querySelector('#pool-experts');

    // CREATE VARIABLE FOR JSON FILE
    var experts = {
            "zipcode": "28205",
            "location": {
                "lat": 35.2263714,
                "lon": -80.7990185
            },
            "dealers": [
                {
                    "data": {
                        "companyID": 401929,
                        "name": "Aqua Experts",
                        "phone1": "1-888-234-5678",
                        "email": "info@aquaexperts.com",
                        "addressLine1": "1234 Some Street",
                        "addressLine2": "",
                        "city": "Charlotte",
                        "state": "North Carolina",
                        "country": "US",
                        "zipcode": "28205",
                        "weekHours": {
                            "mon": "7:00am - 7:00pm",
                            "tue": "7:00am - 7:00pm",
                            "wed": "7:00am - 7:00pm",
                            "thu": "7:00am - 7:00pm",
                            "fri": "7:00am - 7:00pm",
                            "sat": "7:00am - 3:00pm",
                            "sun": ""
                        },
                        "certifications": [
                            "Installation Pro",
                            "Residential Pro",
                            "Service Pro"
                        ]
                    }
                }, {
                    "data": {
                        "companyID": 401928,
                        "name": "Premium Pools & Spas of Charlotte",
                        "phone1": "1-888-888-8888",
                        "email": "info@premiumpoolscharlotte.com",
                        "addressLine1": "1234 Some Street",
                        "addressLine2": "",
                        "city": "Charlotte",
                        "state": "North Carolina",
                        "country": "US",
                        "zipcode": "28205",
                        "weekHours": {
                            "mon": "7:00am - 7:00pm",
                            "tue": "7:00am - 7:00pm",
                            "wed": "7:00am - 7:00pm",
                            "thu": "7:00am - 7:00pm",
                            "fri": "7:00am - 7:00pm",
                            "sat": "",
                            "sun": "On Call"
                        },
                        "certifications": [
                            "Installation Pro",
                            "Commercial Pro",
                            "Residential Pro",
                            "Service Pro"
                        ]
                    }
                }, {
                    "data": {
                        "companyID": 401927,
                        "name": "Carolina Pool Specialists",
                        "phone1": "1-877-987-6543",
                        "email": "info@cps.com",
                        "addressLine1": "1234 Some Street",
                        "addressLine2": "",
                        "city": "Charlotte",
                        "state": "North Carolina",
                        "country": "US",
                        "zipcode": "28205",
                        "weekHours": {
                            "mon": "8:00am - 5:00pm",
                            "tue": "8:00am - 5:00pm",
                            "wed": "8:00am - 5:00pm",
                            "thu": "8:00am - 5:00pm",
                            "fri": "8:00am - 5:00pm",
                            "sat": "8:00am - 5:00pm",
                            "sun": ""
                        },
                        "certifications": [
                            "Installation Pro",
                            "Commercial Pro",
                            "Residential Pro",
                            "Service Pro"
                        ]
                    }
                }, {
                    "data": {
                        "companyID": 401926,
                        "name": "Pools'r'Us",
                        "phone1": "1-888-346-4574",
                        "email": "info@poolsrus.com",
                        "addressLine1": "1234 Some Street",
                        "addressLine2": "",
                        "city": "Charlotte",
                        "state": "North Carolina",
                        "country": "US",
                        "zipcode": "28205",
                        "weekHours": {
                            "mon": "7:00am - 7:00pm",
                            "tue": "7:00am - 7:00pm",
                            "wed": "7:00am - 7:00pm",
                            "thu": "7:00am - 7:00pm",
                            "fri": "7:00am - 7:00pm",
                            "sat": "7:00am - 3:00pm",
                            "sun": "1:00pm - 5:00pm"
                        },
                        "certifications": [
                            "Installation Pro",
                            "Commercial Pro",
                            "Residential Pro"
                        ]
                    }
                }, {
                    "data": {
                        "companyID": 401925,
                        "name": "Clean Pool Systems",
                        "phone1": "1-888-246-7485",
                        "email": "info@cleanpools.com",
                        "addressLine1": "1234 Some Street",
                        "addressLine2": "",
                        "city": "Charlotte",
                        "state": "North Carolina",
                        "country": "US",
                        "zipcode": "28205",
                        "weekHours": {
                            "mon": "7:00am - 7:00pm",
                            "tue": "7:00am - 7:00pm",
                            "wed": "7:00am - 7:00pm",
                            "thu": "7:00am - 7:00pm",
                            "fri": "7:00am - 7:00pm",
                            "sat": "7:00am - 3:00pm",
                            "sun": ""
                        },
                        "certifications": [
                            "Installation Pro",
                            "Residential Pro"
                        ]
                    }
                }, {
                    "data": {
                        "companyID": 401924,
                        "name": "Pool Service Pros",
                        "phone1": "1-888-PRO-POOL",
                        "email": "info@propool.com",
                        "addressLine1": "1234 Some Street",
                        "addressLine2": "",
                        "city": "Charlotte",
                        "state": "North Carolina",
                        "country": "US",
                        "zipcode": "28205",
                        "weekHours": {
                            "mon": "7:00am - 7:00pm",
                            "tue": "7:00am - 7:00pm",
                            "wed": "7:00am - 7:00pm",
                            "thu": "7:00am - 7:00pm",
                            "fri": "7:00am - 7:00pm",
                            "sat": "7:00am - 3:00pm",
                            "sun": ""
                        },
                        "certifications": [
                            "Installation Pro",
                            "Commercial Pro",
                            "Residential Pro",
                            "Service Pro"
                        ]
                    }
                }, {
                    "data": {
                        "companyID": 401923,
                        "name": "Talent Pool",
                        "phone1": "1-888-797-3463",
                        "email": "info@talentpool.com",
                        "addressLine1": "1234 Some Street",
                        "addressLine2": "",
                        "city": "Charlotte",
                        "state": "North Carolina",
                        "country": "US",
                        "zipcode": "28205",
                        "weekHours": {
                            "mon": "7:00am - 7:00pm",
                            "tue": "7:00am - 7:00pm",
                            "wed": "7:00am - 7:00pm",
                            "thu": "7:00am - 7:00pm",
                            "fri": "7:00am - 7:00pm",
                            "sat": "7:00am - 7:00pm",
                            "sun": "7:00am - 7:00pm"
                        },
                        "certifications": [
                            "Installation Pro",
                            "Commercial Pro",
                            "Service Pro"
                        ]
                    }
                }
            ]
        };
       
        
        //document.getElementById("pool-experts").innerHTML = dealers.data[1].name;
        // EXAMPLE console.log(experts.dealers[4].data.certifications);

        var expertObj = JSON.stringify(experts);

        document.getElementById("pool-experts").innerHTML = experts.dealers[4].data.certifications;

        function poolCard{

           // LOOP THROUGH JSON TO PRODUCE CARDS

        }

        /*TEST OF JSON
        console.log(dealers.location.lat);
        /*
    

    //console.log(zipcode);

    //zipcode = JSON.parse(zipcode);

    /*
    // REQUEST JSON FILE

    var requestURL = "/dealers.json";
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

    }*/
    
}
