// Load HTTP module
const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

// Create HTTP server
const server = http.createServer((req, res) => {

   // Set the response HTTP header with HTTP status and Content type
   res.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body "Hello World"
   res.end(str);
});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
})

const str = '<http://geo.org/places/NP http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/NP http://www.w3.org/2000/01/rdf-schema#label "Nepal" .>' +
'<http://geo.org/places/NP http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
'<http://geo.org/places/Asia http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Place .>' +
'<http://geo.org/places/Asia http://www.w3.org/2000/01/rdf-schema#label "Asia" .>' +
'<http://geo.org/places/Asia http://schema.org/containedInPlace http://geo.org/places/Worldwide .>' +
'<http://geo.org/places/MZ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/MZ http://www.w3.org/2000/01/rdf-schema#label "Mozambique" .>' +
'<http://geo.org/places/MZ http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
'<http://geo.org/places/Africa http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Place .>' +
'<http://geo.org/places/Africa http://www.w3.org/2000/01/rdf-schema#label "Africa" .>' +
'<http://geo.org/places/Africa http://schema.org/containedInPlace http://geo.org/places/Worldwide .>' +
'<http://geo.org/places/NorthAmerica http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Place .>' +
'<http://geo.org/places/NorthAmerica http://www.w3.org/2000/01/rdf-schema#label "North America" .>' +
'<http://geo.org/places/NorthAmerica http://schema.org/containedInPlace http://geo.org/places/Worldwide .>' +
'<http://geo.org/places/Worldwide http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Place .>' +
'<http://geo.org/places/Worldwide http://www.w3.org/2000/01/rdf-schema#label "Worldwide" .>' +
'<http://geo.org/places/ME http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/ME http://www.w3.org/2000/01/rdf-schema#label "Montenegro" .>' +
'<http://geo.org/places/ME http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
'<http://geo.org/places/Europe http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Place .>' +
'<http://geo.org/places/Europe http://www.w3.org/2000/01/rdf-schema#label "Europe" .>' +
'<http://geo.org/places/Europe http://schema.org/containedInPlace http://geo.org/places/Worldwide .>' +
'<http://geo.org/places/KY http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/KY http://www.w3.org/2000/01/rdf-schema#label "Cayman Islands" .>' +
'<http://geo.org/places/KY http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
'<http://geo.org/places/GW http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/GW http://www.w3.org/2000/01/rdf-schema#label "Guinea-Bissau" .>' +
'<http://geo.org/places/GW http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
'<http://geo.org/places/GB http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/GB http://www.w3.org/2000/01/rdf-schema#label "United Kingdom" .>' +
'<http://geo.org/places/GB http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
'<http://geo.org/places/DK http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/DK http://www.w3.org/2000/01/rdf-schema#label "Denmark" .>' +
'<http://geo.org/places/DK http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
'<http://geo.org/places/CU http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/CU http://www.w3.org/2000/01/rdf-schema#label "Cuba" .>' +
'<http://geo.org/places/CU http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
'<http://geo.org/places/VG http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/VG http://www.w3.org/2000/01/rdf-schema#label "British Virgin Islands" .>' +
'<http://geo.org/places/VG http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
'<http://geo.org/places/BJ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/BJ http://www.w3.org/2000/01/rdf-schema#label "Benin" .>' +
'<http://geo.org/places/BJ http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
'<http://geo.org/places/AT http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/AT http://www.w3.org/2000/01/rdf-schema#label "Austria" .>' +
'<http://geo.org/places/AT http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
'<http://geo.org/places/RE http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/RE http://www.w3.org/2000/01/rdf-schema#label "R??union" .>' +
'<http://geo.org/places/RE http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
'<http://geo.org/places/PY http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/PY http://www.w3.org/2000/01/rdf-schema#label "Paraguay" .>' +
'<http://geo.org/places/PY http://schema.org/containedInPlace http://geo.org/places/SouthAmerica .>' +
'<http://geo.org/places/SouthAmerica http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Place .>' +
'<http://geo.org/places/SouthAmerica http://www.w3.org/2000/01/rdf-schema#label "South America" .>' +
'<http://geo.org/places/SouthAmerica http://schema.org/containedInPlace http://geo.org/places/Worldwide .>' +
'<http://geo.org/places/NC http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/NC http://www.w3.org/2000/01/rdf-schema#label "New Caledonia" .>' +
'<http://geo.org/places/NC http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
'<http://geo.org/places/Oceania http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Place .>' +
'<http://geo.org/places/Oceania http://www.w3.org/2000/01/rdf-schema#label "Oceania" .>' +
'<http://geo.org/places/Oceania http://schema.org/containedInPlace http://geo.org/places/Worldwide .>' +
'<http://geo.org/places/MM http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/MM http://www.w3.org/2000/01/rdf-schema#label "Myanmar" .>' +
'<http://geo.org/places/MM http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
'<http://geo.org/places/LB http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/LB http://www.w3.org/2000/01/rdf-schema#label "Lebanon" .>' +
'<http://geo.org/places/LB http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
'<http://geo.org/places/HU http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
'<http://geo.org/places/HU http://www.w3.org/2000/01/rdf-schema#label "Hungary" .>' ;
// '<http://geo.org/places/HU http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/CH http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CH http://www.w3.org/2000/01/rdf-schema#label "Switzerland" .>' +
// '<http://geo.org/places/CH http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/BR http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BR http://www.w3.org/2000/01/rdf-schema#label "Brazil" .>' +
// '<http://geo.org/places/BR http://schema.org/containedInPlace http://geo.org/places/SouthAmerica .>' +
// '<http://geo.org/places/UY http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/UY http://www.w3.org/2000/01/rdf-schema#label "Uruguay" .>' +
// '<http://geo.org/places/UY http://schema.org/containedInPlace http://geo.org/places/SouthAmerica .>' +
// '<http://geo.org/places/AG http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/AG http://www.w3.org/2000/01/rdf-schema#label "Antigua and Barbuda" .>' +
// '<http://geo.org/places/AG http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/TN http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/TN http://www.w3.org/2000/01/rdf-schema#label "Tunisia" .>' +
// '<http://geo.org/places/TN http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/SX http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SX http://www.w3.org/2000/01/rdf-schema#label "Sint Maarten" .>' +
// '<http://geo.org/places/SX http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/SC http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SC http://www.w3.org/2000/01/rdf-schema#label "Seychelles" .>' +
// '<http://geo.org/places/SC http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/PL http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/PL http://www.w3.org/2000/01/rdf-schema#label "Poland" .>' +
// '<http://geo.org/places/PL http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/MU http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MU http://www.w3.org/2000/01/rdf-schema#label "Mauritius" .>' +
// '<http://geo.org/places/MU http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/IS http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/IS http://www.w3.org/2000/01/rdf-schema#label "Iceland" .>' +
// '<http://geo.org/places/IS http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/GR http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GR http://www.w3.org/2000/01/rdf-schema#label "Greece" .>' +
// '<http://geo.org/places/GR http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/BZ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BZ http://www.w3.org/2000/01/rdf-schema#label "Belize" .>' +
// '<http://geo.org/places/BZ http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/BE http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BE http://www.w3.org/2000/01/rdf-schema#label "Belgium" .>' +
// '<http://geo.org/places/BE http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/AO http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/AO http://www.w3.org/2000/01/rdf-schema#label "Angola" .>' +
// '<http://geo.org/places/AO http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/TV http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/TV http://www.w3.org/2000/01/rdf-schema#label "Tuvalu" .>' +
// '<http://geo.org/places/TV http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/SK http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SK http://www.w3.org/2000/01/rdf-schema#label "Slovakia" .>' +
// '<http://geo.org/places/SK http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/RU http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/RU http://www.w3.org/2000/01/rdf-schema#label "Russia" .>' +
// '<http://geo.org/places/RU http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/PT http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/PT http://www.w3.org/2000/01/rdf-schema#label "Portugal" .>' +
// '<http://geo.org/places/PT http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/MH http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MH http://www.w3.org/2000/01/rdf-schema#label "Marshall Islands" .>' +
// '<http://geo.org/places/MH http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/LR http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/LR http://www.w3.org/2000/01/rdf-schema#label "Liberia" .>' +
// '<http://geo.org/places/LR http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/KG http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/KG http://www.w3.org/2000/01/rdf-schema#label "Kyrgyzstan" .>' +
// '<http://geo.org/places/KG http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/GE http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GE http://www.w3.org/2000/01/rdf-schema#label "Georgia" .>' +
// '<http://geo.org/places/GE http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/FO http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/FO http://www.w3.org/2000/01/rdf-schema#label "Faroe Islands" .>' +
// '<http://geo.org/places/FO http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/XK http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/XK http://www.w3.org/2000/01/rdf-schema#label "Kosovo" .>' +
// '<http://geo.org/places/XK http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/CX http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CX http://www.w3.org/2000/01/rdf-schema#label "Christmas Island" .>' +
// '<http://geo.org/places/CX http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/BM http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BM http://www.w3.org/2000/01/rdf-schema#label "Bermuda" .>' +
// '<http://geo.org/places/BM http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/AW http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/AW http://www.w3.org/2000/01/rdf-schema#label "Aruba" .>' +
// '<http://geo.org/places/AW http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/SS http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SS http://www.w3.org/2000/01/rdf-schema#label "South Sudan" .>' +
// '<http://geo.org/places/SS http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/PG http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/PG http://www.w3.org/2000/01/rdf-schema#label "Papua New Guinea" .>' +
// '<http://geo.org/places/PG http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/NF http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/NF http://www.w3.org/2000/01/rdf-schema#label "Norfolk Island" .>' +
// '<http://geo.org/places/NF http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/MP http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MP http://www.w3.org/2000/01/rdf-schema#label "Northern Mariana Islands" .>' +
// '<http://geo.org/places/MP http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/IN http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/IN http://www.w3.org/2000/01/rdf-schema#label "India" .>' +
// '<http://geo.org/places/IN http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/GM http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GM http://www.w3.org/2000/01/rdf-schema#label "Gambia" .>' +
// '<http://geo.org/places/GM http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/CK http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CK http://www.w3.org/2000/01/rdf-schema#label "Cook Islands" .>' +
// '<http://geo.org/places/CK http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/UG http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/UG http://www.w3.org/2000/01/rdf-schema#label "Uganda" .>' +
// '<http://geo.org/places/UG http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/MX http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MX http://www.w3.org/2000/01/rdf-schema#label "Mexico" .>' +
// '<http://geo.org/places/MX http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/MC http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MC http://www.w3.org/2000/01/rdf-schema#label "Monaco" .>' +
// '<http://geo.org/places/MC http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/KW http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/KW http://www.w3.org/2000/01/rdf-schema#label "Kuwait" .>' +
// '<http://geo.org/places/KW http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/HK http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/HK http://www.w3.org/2000/01/rdf-schema#label "Hong Kong" .>' +
// '<http://geo.org/places/HK http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/GU http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GU http://www.w3.org/2000/01/rdf-schema#label "Guam" .>' +
// '<http://geo.org/places/GU http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/FJ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/FJ http://www.w3.org/2000/01/rdf-schema#label "Fiji" .>' +
// '<http://geo.org/places/FJ http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/ET http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/ET http://www.w3.org/2000/01/rdf-schema#label "Ethiopia" .>' +
// '<http://geo.org/places/ET http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/VE http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/VE http://www.w3.org/2000/01/rdf-schema#label "Venezuela" .>' +
// '<http://geo.org/places/VE http://schema.org/containedInPlace http://geo.org/places/SouthAmerica .>' +
// '<http://geo.org/places/BH http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BH http://www.w3.org/2000/01/rdf-schema#label "Bahrain" .>' +
// '<http://geo.org/places/BH http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/AR http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/AR http://www.w3.org/2000/01/rdf-schema#label "Argentina" .>' +
// '<http://geo.org/places/AR http://schema.org/containedInPlace http://geo.org/places/SouthAmerica .>' +
// '<http://geo.org/places/TD http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/TD http://www.w3.org/2000/01/rdf-schema#label "Chad" .>' +
// '<http://geo.org/places/TD http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/SN http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SN http://www.w3.org/2000/01/rdf-schema#label "Senegal" .>' +
// '<http://geo.org/places/SN http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/PW http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/PW http://www.w3.org/2000/01/rdf-schema#label "Palau" .>' +
// '<http://geo.org/places/PW http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/NA http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/NA http://www.w3.org/2000/01/rdf-schema#label "Namibia" .>' +
// '<http://geo.org/places/NA http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/MK http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>'+
// '<http://geo.org/places/MK http://www.w3.org/2000/01/rdf-schema#label "Macedonia" .>' +
// '<http://geo.org/places/MK http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/LU http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/LU http://www.w3.org/2000/01/rdf-schema#label "Luxembourg" .>' +
// '<http://geo.org/places/LU http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/GH http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GH http://www.w3.org/2000/01/rdf-schema#label "Ghana" .>' +
// '<http://geo.org/places/GH http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/FR http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/FR http://www.w3.org/2000/01/rdf-schema#label "France" .>' +
// '<http://geo.org/places/FR http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/EG http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/EG http://www.w3.org/2000/01/rdf-schema#label "Egypt" .>' +
// '<http://geo.org/places/EG http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/CF http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CF http://www.w3.org/2000/01/rdf-schema#label "Central African Republic" .>' +
// '<http://geo.org/places/CF http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/AZ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/AZ http://www.w3.org/2000/01/rdf-schema#label "Azerbaijan" .>' +
// '<http://geo.org/places/AZ http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/AE http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/AE http://www.w3.org/2000/01/rdf-schema#label "United Arab Emirates" .>' +
// '<http://geo.org/places/AE http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/TL http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/TL http://www.w3.org/2000/01/rdf-schema#label "East Timor" .>' +
// '<http://geo.org/places/TL http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/SV http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SV http://www.w3.org/2000/01/rdf-schema#label "El Salvador" .>' +
// '<http://geo.org/places/SV http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/SA http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SA http://www.w3.org/2000/01/rdf-schema#label "Saudi Arabia" .>' +
// '<http://geo.org/places/SA http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/NI http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/NI http://www.w3.org/2000/01/rdf-schema#label "Nicaragua" .>' +
// '<http://geo.org/places/NI http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/MS http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MS http://www.w3.org/2000/01/rdf-schema#label "Montserrat" .>' +
// '<http://geo.org/places/MS http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/KR http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/KR http://www.w3.org/2000/01/rdf-schema#label "South Korea" .>' +
// '<http://geo.org/places/KR http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/IQ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/IQ http://www.w3.org/2000/01/rdf-schema#label "Iraq" .>' +
// '<http://geo.org/places/IQ http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/GP http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GP http://www.w3.org/2000/01/rdf-schema#label "Guadeloupe" .>' +
// '<http://geo.org/places/GP http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/ZW http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/ZW http://www.w3.org/2000/01/rdf-schema#label "Zimbabwe" .>' +
// '<http://geo.org/places/ZW http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/CN http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CN http://www.w3.org/2000/01/rdf-schema#label "China" .>' +
// '<http://geo.org/places/CN http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/VU http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/VU http://www.w3.org/2000/01/rdf-schema#label "Vanuatu" .>' +
// '<http://geo.org/places/VU http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/AM http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/AM http://www.w3.org/2000/01/rdf-schema#label "Armenia" .>' +
// '<http://geo.org/places/AM http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/TT http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/TT http://www.w3.org/2000/01/rdf-schema#label "Trinidad and Tobago" .>' +
// '<http://geo.org/places/TT http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/SI http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SI http://www.w3.org/2000/01/rdf-schema#label "Slovenia" .>' +
// '<http://geo.org/places/SI http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/RS http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/RS http://www.w3.org/2000/01/rdf-schema#label "Serbia" .>' +
// '<http://geo.org/places/RS http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/PR http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/PR http://www.w3.org/2000/01/rdf-schema#label "Puerto Rico" .>' +
// '<http://geo.org/places/PR http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/MF http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MF http://www.w3.org/2000/01/rdf-schema#label "Saint Martin" .>' +
// '<http://geo.org/places/MF http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/KZ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/KZ http://www.w3.org/2000/01/rdf-schema#label "Kazakhstan" .>' +
// '<http://geo.org/places/KZ http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/KE http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/KE http://www.w3.org/2000/01/rdf-schema#label "Kenya" .>' +
// '<http://geo.org/places/KE http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/JO http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/JO http://www.w3.org/2000/01/rdf-schema#label "Jordan" .>' +
// '<http://geo.org/places/JO http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/ID http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/ID http://www.w3.org/2000/01/rdf-schema#label "Indonesia" .>' +
// '<http://geo.org/places/ID http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/HN http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/HN http://www.w3.org/2000/01/rdf-schema#label "Honduras" .>' +
// '<http://geo.org/places/HN http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/FM http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/FM http://www.w3.org/2000/01/rdf-schema#label "Micronesia" .>' +
// '<http://geo.org/places/FM http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/YT http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/YT http://www.w3.org/2000/01/rdf-schema#label "Mayotte" .>' +
// '<http://geo.org/places/YT http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/WS http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/WS http://www.w3.org/2000/01/rdf-schema#label "Samoa" .>' +
// '<http://geo.org/places/WS http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/CV http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CV http://www.w3.org/2000/01/rdf-schema#label "Cape Verde" .>' +
// '<http://geo.org/places/CV http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/CA http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CA http://www.w3.org/2000/01/rdf-schema#label "Canada" .>' +
// '<http://geo.org/places/CA http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/AU http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/AU http://www.w3.org/2000/01/rdf-schema#label "Australia" .>' +
// '<http://geo.org/places/AU http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/TG http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/TG http://www.w3.org/2000/01/rdf-schema#label "Togo" .>' +
// '<http://geo.org/places/TG http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/PE http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/PE http://www.w3.org/2000/01/rdf-schema#label "Peru" .>' +
// '<http://geo.org/places/PE http://schema.org/containedInPlace http://geo.org/places/SouthAmerica .>' +
// '<http://geo.org/places/MN http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MN http://www.w3.org/2000/01/rdf-schema#label "Mongolia" .>' +
// '<http://geo.org/places/MN http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/LC http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/LC http://www.w3.org/2000/01/rdf-schema#label "Saint Lucia" .>' +
// '<http://geo.org/places/LC http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/KM http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/KM http://www.w3.org/2000/01/rdf-schema#label "Comoros" .>' +
// '<http://geo.org/places/KM http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/IL http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/IL http://www.w3.org/2000/01/rdf-schema#label "Israel" .>' +
// '<http://geo.org/places/IL http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/WF http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/WF http://www.w3.org/2000/01/rdf-schema#label "Wallis and Futuna" .>' +
// '<http://geo.org/places/WF http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/CI http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CI http://www.w3.org/2000/01/rdf-schema#label "Ivory Coast" .>' +
// '<http://geo.org/places/CI http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/BS http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BS http://www.w3.org/2000/01/rdf-schema#label "Bahamas" .>' +
// '<http://geo.org/places/BS http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/UZ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/UZ http://www.w3.org/2000/01/rdf-schema#label "Uzbekistan" .>' +
// '<http://geo.org/places/UZ http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/TO http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/TO http://www.w3.org/2000/01/rdf-schema#label "Tonga" .>' +
// '<http://geo.org/places/TO http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/SY http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SY http://www.w3.org/2000/01/rdf-schema#label "Syria" .>' +
// '<http://geo.org/places/SY http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/SD http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SD http://www.w3.org/2000/01/rdf-schema#label "Sudan" .>' +
// '<http://geo.org/places/SD http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/PM http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/PM http://www.w3.org/2000/01/rdf-schema#label "Saint Pierre and Miquelon" .>' +
// '<http://geo.org/places/PM http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/NL http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/NL http://www.w3.org/2000/01/rdf-schema#label "Netherlands" .>' +
// '<http://geo.org/places/NL http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/MV http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MV http://www.w3.org/2000/01/rdf-schema#label "Maldives" .>' +
// '<http://geo.org/places/MV http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/MA http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MA http://www.w3.org/2000/01/rdf-schema#label "Morocco" .>' +
// '<http://geo.org/places/MA http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/LK http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/LK http://www.w3.org/2000/01/rdf-schema#label "Sri Lanka" .>' +
// '<http://geo.org/places/LK http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/IT http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/IT http://www.w3.org/2000/01/rdf-schema#label "Italy" .>' +
// '<http://geo.org/places/IT http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/ER http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/ER http://www.w3.org/2000/01/rdf-schema#label "Eritrea" .>' +
// '<http://geo.org/places/ER http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/VC http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/VC http://www.w3.org/2000/01/rdf-schema#label "Saint Vincent and the Grenadines" .>' +
// '<http://geo.org/places/VC http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/BF http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BF http://www.w3.org/2000/01/rdf-schema#label "Burkina Faso" .>' +
// '<http://geo.org/places/BF http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/TW http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/TW http://www.w3.org/2000/01/rdf-schema#label "Taiwan" .>' +
// '<http://geo.org/places/TW http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/SL http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SL http://www.w3.org/2000/01/rdf-schema#label "Sierra Leone" .>' +
// '<http://geo.org/places/SL http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/LS http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/LS http://www.w3.org/2000/01/rdf-schema#label "Lesotho" .>' +
// '<http://geo.org/places/LS http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/KH http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/KH http://www.w3.org/2000/01/rdf-schema#label "Cambodia" .>' +
// '<http://geo.org/places/KH http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/GF http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GF http://www.w3.org/2000/01/rdf-schema#label "French Guiana" .>' +
// '<http://geo.org/places/GF http://schema.org/containedInPlace http://geo.org/places/SouthAmerica .>' +
// '<http://geo.org/places/ZM http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/ZM http://www.w3.org/2000/01/rdf-schema#label "Zambia" .>' +
// '<http://geo.org/places/ZM http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/EE http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/EE http://www.w3.org/2000/01/rdf-schema#label "Estonia" .>' +
// '<http://geo.org/places/EE http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/DO http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/DO http://www.w3.org/2000/01/rdf-schema#label "Dominican Republic" .>' +
// '<http://geo.org/places/DO http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/CY http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CY http://www.w3.org/2000/01/rdf-schema#label "Cyprus" .>' +
// '<http://geo.org/places/CY http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/CD http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CD http://www.w3.org/2000/01/rdf-schema#label "Democratic Republic of the Congo" .>' +
// '<http://geo.org/places/CD http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/BN http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BN http://www.w3.org/2000/01/rdf-schema#label "Brunei" .>' +
// '<http://geo.org/places/BN http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/AX http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/AX http://www.w3.org/2000/01/rdf-schema#label "??land" .>' +
// '<http://geo.org/places/AX http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/TJ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/TJ http://www.w3.org/2000/01/rdf-schema#label "Tajikistan" .>' +
// '<http://geo.org/places/TJ http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/ST http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/ST http://www.w3.org/2000/01/rdf-schema#label "S??o Tom?? and Pr??ncipe" .>' +
// '<http://geo.org/places/ST http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/PH http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/PH http://www.w3.org/2000/01/rdf-schema#label "Philippines" .>' +
// '<http://geo.org/places/PH http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/NG http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/NG http://www.w3.org/2000/01/rdf-schema#label "Nigeria" .>' +
// '<http://geo.org/places/NG http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/MQ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MQ http://www.w3.org/2000/01/rdf-schema#label "Martinique" .>' +
// '<http://geo.org/places/MQ http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/KP http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/KP http://www.w3.org/2000/01/rdf-schema#label "North Korea" .>' +
// '<http://geo.org/places/KP http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/JE http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/JE http://www.w3.org/2000/01/rdf-schema#label "Jersey" .>' +
// '<http://geo.org/places/JE http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/IO http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/IO http://www.w3.org/2000/01/rdf-schema#label "British Indian Ocean Territory" .>' +
// '<http://geo.org/places/IO http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/GN http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GN http://www.w3.org/2000/01/rdf-schema#label "Guinea" .>' +
// '<http://geo.org/places/GN http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/CL http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CL http://www.w3.org/2000/01/rdf-schema#label "Chile" .>' +
// '<http://geo.org/places/CL http://schema.org/containedInPlace http://geo.org/places/SouthAmerica .>' +
// '<http://geo.org/places/BA http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BA http://www.w3.org/2000/01/rdf-schema#label "Bosnia and Herzegovina" .>' +
// '<http://geo.org/places/BA http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/TR http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/TR http://www.w3.org/2000/01/rdf-schema#label "Turkey" .>' +
// '<http://geo.org/places/TR http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/SG http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SG http://www.w3.org/2000/01/rdf-schema#label "Singapore" .>' +
// '<http://geo.org/places/SG http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/NO http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/NO http://www.w3.org/2000/01/rdf-schema#label "Norway" .>' +
// '<http://geo.org/places/NO http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/MY http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MY http://www.w3.org/2000/01/rdf-schema#label "Malaysia" .>' +
// '<http://geo.org/places/MY http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/MD http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MD http://www.w3.org/2000/01/rdf-schema#label "Moldova" .>' +
// '<http://geo.org/places/MD http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/JM http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/JM http://www.w3.org/2000/01/rdf-schema#label "Jamaica" .>' +
// '<http://geo.org/places/JM http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/GA http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GA http://www.w3.org/2000/01/rdf-schema#label "Gabon" .>' +
// '<http://geo.org/places/GA http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/FK http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/FK http://www.w3.org/2000/01/rdf-schema#label "Falkland Islands" .>' +
// '<http://geo.org/places/FK http://schema.org/containedInPlace http://geo.org/places/SouthAmerica .>' +
// '<http://geo.org/places/DJ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/DJ http://www.w3.org/2000/01/rdf-schema#label "Djibouti" .>' +
// '<http://geo.org/places/DJ http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/BI http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BI http://www.w3.org/2000/01/rdf-schema#label "Burundi" .>' +
// '<http://geo.org/places/BI http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/AS http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/AS http://www.w3.org/2000/01/rdf-schema#label "American Samoa" .>' +
// '<http://geo.org/places/AS http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/TZ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/TZ http://www.w3.org/2000/01/rdf-schema#label "Tanzania" .>' +
// '<http://geo.org/places/TZ http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/SO http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SO http://www.w3.org/2000/01/rdf-schema#label "Somalia" .>' +
// '<http://geo.org/places/SO http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/OM http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/OM http://www.w3.org/2000/01/rdf-schema#label "Oman" .>' +
// '<http://geo.org/places/OM http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/ML http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/ML http://www.w3.org/2000/01/rdf-schema#label "Mali" .>' +
// '<http://geo.org/places/ML http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/LV http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/LV http://www.w3.org/2000/01/rdf-schema#label "Latvia" .>' +
// '<http://geo.org/places/LV http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/LA http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/LA http://www.w3.org/2000/01/rdf-schema#label "Laos" .>' +
// '<http://geo.org/places/LA http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/HT http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/HT http://www.w3.org/2000/01/rdf-schema#label "Haiti" .>' +
// '<http://geo.org/places/HT http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/GI http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GI http://www.w3.org/2000/01/rdf-schema#label "Gibraltar" .>' +
// '<http://geo.org/places/GI http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/YE http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/YE http://www.w3.org/2000/01/rdf-schema#label "Yemen" .>' +
// '<http://geo.org/places/YE http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/EH http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/EH http://www.w3.org/2000/01/rdf-schema#label "Western Sahara" .>' +
// '<http://geo.org/places/EH http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/VN http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/VN http://www.w3.org/2000/01/rdf-schema#label "Vietnam" .>' +
// '<http://geo.org/places/VN http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/CG http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CG http://www.w3.org/2000/01/rdf-schema#label "Republic of the Congo" .>' +
// '<http://geo.org/places/CG http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/BQ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BQ http://www.w3.org/2000/01/rdf-schema#label "Bonaire" .>' +
// '<http://geo.org/places/BQ http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/AF http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/AF http://www.w3.org/2000/01/rdf-schema#label "Afghanistan" .>' +
// '<http://geo.org/places/AF http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/TM http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/TM http://www.w3.org/2000/01/rdf-schema#label "Turkmenistan" .>' +
// '<http://geo.org/places/TM http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/SB http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SB http://www.w3.org/2000/01/rdf-schema#label "Solomon Islands" .>' +
// '<http://geo.org/places/SB http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/QA http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/QA http://www.w3.org/2000/01/rdf-schema#label "Qatar" .>' +
// '<http://geo.org/places/QA http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/PK http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/PK http://www.w3.org/2000/01/rdf-schema#label "Pakistan" .>' +
// '<http://geo.org/places/PK http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/MT http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MT http://www.w3.org/2000/01/rdf-schema#label "Malta" .>' +
// '<http://geo.org/places/MT http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/LI http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/LI http://www.w3.org/2000/01/rdf-schema#label "Liechtenstein" .>' +
// '<http://geo.org/places/LI http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/IR http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/IR http://www.w3.org/2000/01/rdf-schema#label "Iran" .>' +
// '<http://geo.org/places/IR http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/GQ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GQ http://www.w3.org/2000/01/rdf-schema#label "Equatorial Guinea" .>' +
// '<http://geo.org/places/GQ http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/VA http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/VA http://www.w3.org/2000/01/rdf-schema#label "Vatican City" .>' +
// '<http://geo.org/places/VA http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/DZ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/DZ http://www.w3.org/2000/01/rdf-schema#label "Algeria" .>' +
// '<http://geo.org/places/DZ http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/DE http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/DE http://www.w3.org/2000/01/rdf-schema#label "Germany" .>' +
// '<http://geo.org/places/DE http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/CO http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CO http://www.w3.org/2000/01/rdf-schema#label "Colombia" .>' +
// '<http://geo.org/places/CO http://schema.org/containedInPlace http://geo.org/places/SouthAmerica .>' +
// '<http://geo.org/places/BY http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BY http://www.w3.org/2000/01/rdf-schema#label "Belarus" .>' +
// '<http://geo.org/places/BY http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/BD http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BD http://www.w3.org/2000/01/rdf-schema#label "Bangladesh" .>' +
// '<http://geo.org/places/BD http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/SJ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SJ http://www.w3.org/2000/01/rdf-schema#label "Svalbard and Jan Mayen" .>' +
// '<http://geo.org/places/SJ http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/PS http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/PS http://www.w3.org/2000/01/rdf-schema#label "Palestine" .>' +
// '<http://geo.org/places/PS http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/NR http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/NR http://www.w3.org/2000/01/rdf-schema#label "Nauru" .>' +
// '<http://geo.org/places/NR http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/MG http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MG http://www.w3.org/2000/01/rdf-schema#label "Madagascar" .>' +
// '<http://geo.org/places/MG http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/JP http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/JP http://www.w3.org/2000/01/rdf-schema#label "Japan" .>' +
// '<http://geo.org/places/JP http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/IE http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/IE http://www.w3.org/2000/01/rdf-schema#label "Ireland" .>' +
// '<http://geo.org/places/IE http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/GY http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GY http://www.w3.org/2000/01/rdf-schema#label "Guyana" .>' +
// '<http://geo.org/places/GY http://schema.org/containedInPlace http://geo.org/places/SouthAmerica .>' +
// '<http://geo.org/places/GD http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GD http://www.w3.org/2000/01/rdf-schema#label "Grenada" .>' +
// '<http://geo.org/places/GD http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/EC http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/EC http://www.w3.org/2000/01/rdf-schema#label "Ecuador" .>' +
// '<http://geo.org/places/EC http://schema.org/containedInPlace http://geo.org/places/SouthAmerica .>' +
// '<http://geo.org/places/DM http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/DM http://www.w3.org/2000/01/rdf-schema#label "Dominica" .>' +
// '<http://geo.org/places/DM http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/CW http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CW http://www.w3.org/2000/01/rdf-schema#label "Curacao" .>' +
// '<http://geo.org/places/CW http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/VI http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/VI http://www.w3.org/2000/01/rdf-schema#label "U.S. Virgin Islands" .>' +
// '<http://geo.org/places/VI http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/BL http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BL http://www.w3.org/2000/01/rdf-schema#label "Saint Barth??lemy" .>' +
// '<http://geo.org/places/BL http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/US http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/US http://www.w3.org/2000/01/rdf-schema#label "United States" .>' +
// '<http://geo.org/places/US http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/TH http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/TH http://www.w3.org/2000/01/rdf-schema#label "Thailand" .>' +
// '<http://geo.org/places/TH http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/SR http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SR http://www.w3.org/2000/01/rdf-schema#label "Suriname" .>' +
// '<http://geo.org/places/SR http://schema.org/containedInPlace http://geo.org/places/SouthAmerica .>' +
// '<http://geo.org/places/PF http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/PF http://www.w3.org/2000/01/rdf-schema#label "French Polynesia" .>' +
// '<http://geo.org/places/PF http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/NZ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/NZ http://www.w3.org/2000/01/rdf-schema#label "New Zealand" .>' +
// '<http://geo.org/places/NZ http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/NE http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/NE http://www.w3.org/2000/01/rdf-schema#label "Niger" .>' +
// '<http://geo.org/places/NE http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/MO http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MO http://www.w3.org/2000/01/rdf-schema#label "Macao" .>' +
// '<http://geo.org/places/MO http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/LY http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/LY http://www.w3.org/2000/01/rdf-schema#label "Libya" .>' +
// '<http://geo.org/places/LY http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/KN http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/KN http://www.w3.org/2000/01/rdf-schema#label "Saint Kitts and Nevis" .>' +
// '<http://geo.org/places/KN http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/IM http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/IM http://www.w3.org/2000/01/rdf-schema#label "Isle of Man" .>' +
// '<http://geo.org/places/IM http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/GL http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GL http://www.w3.org/2000/01/rdf-schema#label "Greenland" .>' +
// '<http://geo.org/places/GL http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/BT http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BT http://www.w3.org/2000/01/rdf-schema#label "Bhutan" .>' +
// '<http://geo.org/places/BT http://schema.org/containedInPlace http://geo.org/places/Asia .>' +
// '<http://geo.org/places/AI http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/AI http://www.w3.org/2000/01/rdf-schema#label "Anguilla" .>' +
// '<http://geo.org/places/AI http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/SZ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SZ http://www.w3.org/2000/01/rdf-schema#label "Swaziland" .>' +
// '<http://geo.org/places/SZ http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/SE http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SE http://www.w3.org/2000/01/rdf-schema#label "Sweden" .>' +
// '<http://geo.org/places/SE http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/RO http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/RO http://www.w3.org/2000/01/rdf-schema#label "Romania" .>' +
// '<http://geo.org/places/RO http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/PN http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/PN http://www.w3.org/2000/01/rdf-schema#label "Pitcairn Islands" .>' +
// '<http://geo.org/places/PN http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/MW http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MW http://www.w3.org/2000/01/rdf-schema#label "Malawi" .>' +
// '<http://geo.org/places/MW http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/GT http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GT http://www.w3.org/2000/01/rdf-schema#label "Guatemala" .>' +
// '<http://geo.org/places/GT http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/FI http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/FI http://www.w3.org/2000/01/rdf-schema#label "Finland" .>' +
// '<http://geo.org/places/FI http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/ES http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/ES http://www.w3.org/2000/01/rdf-schema#label "Spain" .>' +
// '<http://geo.org/places/ES http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/CR http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CR http://www.w3.org/2000/01/rdf-schema#label "Costa Rica" .>' +
// '<http://geo.org/places/CR http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/BG http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BG http://www.w3.org/2000/01/rdf-schema#label "Bulgaria" .>' +
// '<http://geo.org/places/BG http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/TC http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/TC http://www.w3.org/2000/01/rdf-schema#label "Turks and Caicos Islands" .>' +
// '<http://geo.org/places/TC http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/SM http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SM http://www.w3.org/2000/01/rdf-schema#label "San Marino" .>' +
// '<http://geo.org/places/SM http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/RW http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/RW http://www.w3.org/2000/01/rdf-schema#label "Rwanda" .>' +
// '<http://geo.org/places/RW http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/PA http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/PA http://www.w3.org/2000/01/rdf-schema#label "Panama" .>' +
// '<http://geo.org/places/PA http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/NU http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/NU http://www.w3.org/2000/01/rdf-schema#label "Niue" .>' +
// '<http://geo.org/places/NU http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/LT http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/LT http://www.w3.org/2000/01/rdf-schema#label "Lithuania" .>' +
// '<http://geo.org/places/LT http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/KI http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/KI http://www.w3.org/2000/01/rdf-schema#label "Kiribati" .>' +
// '<http://geo.org/places/KI http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/HR http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/HR http://www.w3.org/2000/01/rdf-schema#label "Croatia" .>' +
// '<http://geo.org/places/HR http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/GG http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/GG http://www.w3.org/2000/01/rdf-schema#label "Guernsey" .>' +
// '<http://geo.org/places/GG http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/CZ http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CZ http://www.w3.org/2000/01/rdf-schema#label "Czechia" .>' +
// '<http://geo.org/places/CZ http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/BO http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BO http://www.w3.org/2000/01/rdf-schema#label "Bolivia" .>' +
// '<http://geo.org/places/BO http://schema.org/containedInPlace http://geo.org/places/SouthAmerica .>' +
// '<http://geo.org/places/UA http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/UA http://www.w3.org/2000/01/rdf-schema#label "Ukraine" .>' +
// '<http://geo.org/places/UA http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/AD http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/AD http://www.w3.org/2000/01/rdf-schema#label "Andorra" .>' +
// '<http://geo.org/places/AD http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/TK http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/TK http://www.w3.org/2000/01/rdf-schema#label "Tokelau" .>' +
// '<http://geo.org/places/TK http://schema.org/containedInPlace http://geo.org/places/Oceania .>' +
// '<http://geo.org/places/MR http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/MR http://www.w3.org/2000/01/rdf-schema#label "Mauritania" .>' +
// '<http://geo.org/places/MR http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/ZA http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/ZA http://www.w3.org/2000/01/rdf-schema#label "South Africa" .>' +
// '<http://geo.org/places/ZA http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/CM http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/CM http://www.w3.org/2000/01/rdf-schema#label "Cameroon" .>' +
// '<http://geo.org/places/CM http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/BW http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BW http://www.w3.org/2000/01/rdf-schema#label "Botswana" .>' +
// '<http://geo.org/places/BW http://schema.org/containedInPlace http://geo.org/places/Africa .>' +
// '<http://geo.org/places/BB http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/BB http://www.w3.org/2000/01/rdf-schema#label "Barbados" .>' +
// '<http://geo.org/places/BB http://schema.org/containedInPlace http://geo.org/places/NorthAmerica .>' +
// '<http://geo.org/places/AL http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/AL http://www.w3.org/2000/01/rdf-schema#label "Albania" .>' +
// '<http://geo.org/places/AL http://schema.org/containedInPlace http://geo.org/places/Europe .>' +
// '<http://geo.org/places/SH http://www.w3.org/1999/02/22-rdf-syntax-ns#type http://schema.org/Country .>' +
// '<http://geo.org/places/SH http://www.w3.org/2000/01/rdf-schema#label "Saint Helena" .>' +
// '<http://geo.org/places/SH http://schema.org/containedInPlace http://geo.org/places/Africa .>';
