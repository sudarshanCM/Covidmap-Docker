var express = require('express');
var router = express.Router();
var fetch=require('node-fetch')

/* GET users listing. */
router.get('/',async function(req, res, next) {
    const response = await fetch('https://api.covid19india.org/state_district_wise.json', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const body = await response.json();
    console.log(body['Tamil Nadu'].districtData)
    districtwise={}
    try{
        districtwise.Erode=body['Tamil Nadu'].districtData.Erode.confirmed
        districtwise.Chennai=body['Tamil Nadu'].districtData.Chennai.confirmed
        districtwise.Kancheepuram=body['Tamil Nadu'].districtData.Kancheepuram.confirmed
        districtwise.Coimbatore=body['Tamil Nadu'].districtData.Coimbatore.confirmed
        districtwise.Tirunelveli=body['Tamil Nadu'].districtData.Tirunelveli.confirmed
        districtwise.Tiruppur=body['Tamil Nadu'].districtData.Tiruppur.confirmed
        districtwise.Madurai=body['Tamil Nadu'].districtData.Madurai.confirmed
        districtwise.Salem=body['Tamil Nadu'].districtData.Salem.confirmed
        districtwise.Vellore=body['Tamil Nadu'].districtData.Vellore.confirmed
        districtwise.Tiruchirappalli=body['Tamil Nadu'].districtData.Tiruchirappalli.confirmed
        districtwise.Chengalpattu=body['Tamil Nadu'].districtData.Chengalpattu.confirmed
        districtwise.Thanjavur=body['Tamil Nadu'].districtData.Thanjavur.confirmed
        districtwise.Virudhunagar=body['Tamil Nadu'].districtData.Virudhunagar.confirmed
        districtwise.Karur=body['Tamil Nadu'].districtData.Karur.confirmed
        districtwise.Tiruvannamalai=body['Tamil Nadu'].districtData.Tiruvannamalai.confirmed
        districtwise.Vilupram=body['Tamil Nadu'].districtData.Vilupram.confirmed
        districtwise.Namakkal=body['Tamil Nadu'].districtData.Namakkal.confirmed
        districtwise.Kanniyakumari=body['Tamil Nadu'].districtData.Kanniyakumari.confirmed
        districtwise.Thoothukudi=body['Tamil Nadu'].districtData.Thoothukudi.confirmed
        districtwise.Dharmapuri=body['Tamil Nadu'].districtData.Dharmapuri.confirmed
        districtwise.Cuddalore=body['Tamil Nadu'].districtData.Cuddalore.confirmed
        districtwise.Dindigul=body['Tamil Nadu'].districtData.Dindigul.confirmed
        districtwise.Nagapattinam=body['Tamil Nadu'].districtData.Nagapattinam.confirmed
        districtwise.Perambalur=body['Tamil Nadu'].districtData.Perambalur.confirmed
        districtwise.Ariyalur=body['Tamil Nadu'].districtData.Ariyalur.confirmed
        districtwise.Pudukkottai=body['Tamil Nadu'].districtData.Pudukkottai.confirmed
        districtwise.Ramanathapuram=body['Tamil Nadu'].districtData.Ramanathapuram.confirmed
        districtwise.Sivaganga=body['Tamil Nadu'].districtData.Sivaganga.confirmed

    }
    catch(e){
        console.log(e)
    }
 
    var data=[{
        "id": "IN.TN.ER",
        "value": districtwise.Erode,
        "name":"districtwise.Erode".slice(13)
      },
      {
        "id": "IN.TN.DI",
        "value": districtwise.Dindigul,
        "name":"districtwise.Dindigul".slice(13)
      }, 
      {
        "id": "IN.TN.CU",
        "value": districtwise.Cuddalore,
        "name":"districtwise.Cuddalore".slice(13)

      },
      {
        "id": "IN.TN.CO",
        "value":districtwise.Coimbatore,
        "name":"districtwise.Coimbatore".slice(13)

      },
      {
        "id": "IN.TN.DH",
        "value": districtwise.Dharmapuri,
        "name":"districtwise.Dharmapuri".slice(13)

      },
      {
        "id": "IN.TN.TP",
        "value":districtwise.Tiruppur,
        "name":"districtwise.Tiruppur".slice(13)

      },
      {
        "id": "IN.TN.MA",
        "value": districtwise.Madurai,
        "name":"districtwise.Madurai".slice(13)

      },
      {
        "id": "IN.TN.NG",
        "value": districtwise.Nagapattinam,
        "name":"districtwise.Nagapattinam".slice(13)

      },
      {
        "id": "IN.TN.NM",
        "value": districtwise.Namakkal,
        "name":"districtwise.Namakkal".slice(13)

      },
      {
        "id": "IN.TN.PE",
        "value": districtwise.Perambalur,
        "name":"districtwise.Perambalur".slice(13)

      },
      {
        "id": "IN.TN.AR",
        "value": districtwise.Ariyalur,
        "name":"districtwise.Ariyalur".slice(13)

      },
      {
        "id": "IN.TN.PU",
        "value": districtwise.Pudukkottai,
        "name":"districtwise.Pudukkottai".slice(13)

      },
      {
        "id": "IN.TN.RA",
        "value": districtwise.Ramanathapuram,
        "name":"districtwise.Ramanathapuram".slice(13)

      },
      {
        "id": "IN.TN.SA",
        "value": districtwise.Salem,
        "name":"districtwise.Salem".slice(13)

      },
      {
        "id": "IN.TN.SI",
        "value": districtwise.Sivaganga,
        "name":"districtwise.Sivaganga".slice(13)

      },
      {
        "id": "IN.TN.TJ",
        "value": districtwise.Thanjavur,
        "name":"districtwise.Thanjavur".slice(13)

      },
      {
        "id": "IN.TN.NI",
        "value": districtwise.Nilgris,
        "name":"districtwise.Nilgris".slice(13)

      },
      {
        "id": "IN.TN.TH",
        "value": districtwise.Theni,
        "name":"districtwise.Theni".slice(13)

      },
      {
        "id": "IN.TN.TL",
        "value": districtwise.Tirunelveli,
        "name":"districtwise.Tirunelveli".slice(13)

      },
      {
        "id": "IN.TN.CH",
        "value": districtwise.Chennai,
        "name":"districtwise.Chennai".slice(13)

      },
      {
        "id": "IN.TN.TR",
        "value": districtwise.Tiruvarur,
        "name":"districtwise.Tiruvarur".slice(13)

      },
      {
        "id": "IN.TN.TK",
        "value": districtwise.Thoothukudi,
        "name":"districtwise.Thoothukudi".slice(13)

      },
      {
        "id": "IN.TN.TC",
        "value": districtwise.Tiruchirappalli,
        "name":"districtwise.Tiruchirappalli".slice(13)

      },
      {
        "id": "IN.TN.TV",
        "value": districtwise.Tiruvannamalai,
        "name":"districtwise.Tiruvannamalai".slice(13)

      },
      {
        "id": "IN.TN.VE",
        "value": districtwise.Vellore,
        "name":"districtwise.Vellore".slice(13)

      },
      {
        "id": "IN.TN.VL",
        "value": districtwise.Vilupram,
        "name":"districtwise.Vilupram".slice(13)

      },
      {
        "id": "IN.TN.VR",
        "value": districtwise.Virudhunagar,
        "name":"districtwise.Virudhunagar".slice(13)

      },
      {
        "id": "IN.TN.KC",
        "value": districtwise.Kanchipuram,
        "name":"districtwise.Kanchipuram".slice(13)

      },
      {
        "id": "IN.TN.KI",
        "value": districtwise.Krishnagiri,
        "name":"districtwise.Krishnagiri".slice(13)

      },
      {
        "id": "IN.TN.KR",
        "value": districtwise.Karur,
        "name":"districtwise.Karur".slice(13)

      },
      {
        "id": "IN.TN.KK",
        "value": districtwise.Kanniyakumari,
        "name":"districtwise.Kanniyakumari".slice(13)

      }
    ]
  res.send(data)
});

module.exports = router;
