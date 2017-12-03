window.onload = function () {
   
    // GLOBAL VARIABLES

    var poolExperts = document.querySelector('section');

    // CREATE VARIABLE FOR JSON FILE
    var experts = [{
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
        }];

        // PASS JSON DATA TO EXPERTS

        var expertObj = JSON.stringify(experts);

        // LOOP THROUGH DEALERS 

        for ( var i = 0; i < experts.length; i++){
           
            //console.log(experts[i].dealers);

            //Create variables for data that will be pulled into card

           var companyCard = document.createElement("div");
           var companyName = document.createElement("h3");
           var companyPhone = document.createElement("a");
           var companyEmail = document.createElement("a");

           // REFERENCE DATA TO DATA FROM VAR EXPERTS

           companyName.textContent = experts[i].dealers[i].data.name;
           companyPhone.textContent = experts[i].dealers[i].data.phone1;
           companyEmail.textContent = experts[i].dealers[i].data.email;

           //GRAB DATA AND APPEND TO CARD

           companyCard.appendChild(companyName);
           companyCard.appendChild(companyPhone);
           companyCard.appendChild(companyEmail);

           //Append to div of poolexperts

           poolExperts.appendChild(companyCard);
           
        }
        
        function numberofCompanies(experts){
           
        }

        /*
        for ( var key in experts){
            if (experts.hasOwnProperty(key)){
                //console.log(experts[key].dealers);
            }
        }*/

        //document.getElementById("pool-experts").innerHTML = experts.dealers[4].data.certifications;
        // EXAMPLE console.log(experts.dealers[4].data.certifications);

}
