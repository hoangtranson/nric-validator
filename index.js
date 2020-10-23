const REGION_SOUTHEAST_ASIA="SOUTHEAST_ASIA",REGION_BRITISH_ISLES="BRITISH_ISLES",REGION_SOVIET_REPUBLIC="SOVIET_REPUBLIC",REGION_EAST_ASIA="EAST_ASIA",REGION_SOUTH_ASIA="SOUTH_ASIA",REGION_AFRICA="AFRICA",REGION_SOUTH_AMERICA="SOUTH_AMERICA",REGION_CENTRAL_AMERICA="CENTRAL_AMERICA",REGION_NORTH_AMERICA="NORTH_AMERICA",REGION_OCEANIA="OCEANIA",REGION_MIDDLE_EAST="MIDDLE_EAST",REGION_EUROPE="EUROPE",REGION_MIDDLE_AMERICA="MIDDLE_AMERICA",REGION_MISCELLANEOUS="MISCELLANEOUS",stateCodePairs={JHR:["01","21","22","24"],KDH:["02","25","26","27"],KTN:["03","28","29"],MLK:["04","30"],NSN:["05","31","59"],PHG:["06","32","33"],PNG:["07","34","35"],PRK:["08","36","37","38"],PLS:["09","40"],SGR:["10","41","42","43","44"],TRG:["11","45","46"],SBH:["12","47","48","49"],SWK:["13","50","51","52","53"],KUL:["14","54","55","56","57"],LBN:["15","58"],PJY:["16"],UNKNOWN_STATE:["82"]},countryCodePairs={60:{country:"BN",region:REGION_SOUTHEAST_ASIA},61:{country:"ID",region:REGION_SOUTHEAST_ASIA},62:{country:"KH",region:REGION_SOUTHEAST_ASIA},63:{country:"LA",region:REGION_SOUTHEAST_ASIA},64:{country:"MM",region:REGION_SOUTHEAST_ASIA},65:{country:"PH",region:REGION_SOUTHEAST_ASIA},66:{country:"SG",region:REGION_SOUTHEAST_ASIA},67:{country:"TH",region:REGION_SOUTHEAST_ASIA},68:{country:"VN",region:REGION_SOUTHEAST_ASIA},71:{country:"FOREIGN_UNKNOWN",region:null},72:{country:"FOREIGN_UNKNOWN",region:null},74:{country:"CN",region:"EAST_ASIA"},75:{country:"IN",region:"SOUTH_ASIA"},76:{country:"PK",region:"SOUTH_ASIA"},77:{country:"SA",region:"MIDDLE_EAST"},78:{country:"LK",region:"SOUTH_ASIA"},79:{country:"BD",region:"SOUTH_ASIA"},83:{country:"AS|AU|CX|CC|CK|FJ|PF|GU|HM|MH|FM|NC|NZ|NU|NF|PG|TL|TK|UM|WF",region:"OCEANIA"},84:{country:"AI|AR|AW|BO|BR|CL|CO|EC|GF|GP|GY|PY|PE|GS|ST|UY|VE",region:"SOUTH_AMERICA"},85:{country:"DZ|AO|BW|BI|CM|CF|CG|CD|DG|EG|ER|ET|GA|GM|GN|KE|LR|MW|ML|MR|YT|MA|MZ|NA|NE|NG|RW|RE|SN|SL|SO|SD|SZ|TZ|TG|TO|TN|UG|ME|ZR|ZM|ZW",region:"AFRICA"},86:{country:"AM|AT|BE|CY|DK|FO|FR|FI|DE|DD|GR|VA|IT|LU|MK|MT|MC|NL|NO|PT|MD|SK|SI|ES|SE|CH|GG|JE|IM",region:"EUROPE"},87:{country:"GB|IE",region:"BRITISH_ISLES"},88:{country:"BH|IR|IQ|PS|JO|KW|OM|QA|YE|SY|TR|YE|YD|",region:"MIDDLE_EAST"},89:{country:"JP|KP|KR|TW",region:"EAST_ASIA"},90:{country:"BS|BB|BZ|CR|CU|DM|DO|SV|GD|GT|HT|HN|JM|MQ|MX|NI|PA|PR|KN|LC|VC|TT|TC|VI",region:"MIDDLE_AMERICA"},91:{country:"CA|GL|AN|PM|US",region:"NORTH_AMERICA"},92:{country:"AL|BY|BA|BG|HR|CZ|CS|EE|GE|HU|LV|LT|ME|PL|XK|RO|RU|RS|UA",region:"SOVIET_REPUBLIC"},93:{country:"AF|AD|AQ|AG|AZ|BJ|BM|BT|IO|BF|CV|KY|KM|DY|GQ|TF|GI|GW|HK|IS|CI|KZ|KI|KG|LS|LY|LI|MO|MG|MV|MU|MN|MS|NR|NP|MP|PW|PS|PN|SH|LC|VC|WS|SM|ST|SC|SB|SJ|TJ|TM|TV|HV|UZ|VU|VA|VG|YU",region:"MISCELLANEOUS"},98:{country:"STATELESS",region:null},99:{country:"UNSPECIFIED",region:null}},splitNRIC=e=>{const n=e.match(/^(\d{2})(\d{2})(\d{2})-?(\d{2})-?(\d{3})(\d{1})$/);if(!n)throw new Error("Invalid value number format");return n},combineToDate=(e,n,t)=>{const r=new Date,A=new Date(e,n-1,t),S=r.getFullYear()-A.getFullYear();return(S>100||100==S&&dateIsBefore(A,r))&&A.setFullYear(A.getFullYear()+100),A},dateIsBefore=(e,n)=>{return new Date(0,e.getMonth(),e.getDate())<new Date(0,n.getMonth(),n.getDate())},getGender=e=>e%2==0?"F":"M",inBetween=(e,n,t)=>e>=n&&e<=t,isStateValid=e=>isMalaysia(e)||isForeign(e);function numisBetween(e,n,t){return(e-n)*(e-t)<=0}function codeToState(e){return Object.keys(stateCodePairs).find(n=>stateCodePairs[n].includes(e))}function isMalaysia(e){return numisBetween(e,1,16)||numisBetween(e,21,59)||82==e}function isForeign(e){return null!=countryCodePairs[e]}function parseMalaysia(e){return{region:REGION_SOUTHEAST_ASIA,country:"MY",state:codeToState(e)}}function parseForeign(e){return Object.assign({state:null},countryCodePairs[e])}function getBirthPlace(e){return isMalaysia(e)?parseMalaysia(e):isForeign(e)?parseForeign(e):null}function isNumeric(e){return/^\d+$/.test(e)}class NRIC{constructor(e){this.id=e}get isValid(){const[e,n,t,r,A,...S]=splitNRIC(this.id),I=combineToDate(n,t,r);return!(!inBetween(t,1,12)||!inBetween(r,1,31))&&(I&&isStateValid(A))}get birthDate(){const[e,n,t,r,A,...S]=splitNRIC(this.id);return`${combineToDate(n,t,r)}`}get gender(){const[e,n,t,r,A,...S]=splitNRIC(this.id);return getGender(S[1])}get age(){const[e,n,t,r,A,...S]=splitNRIC(this.id),I=new Date,E=new Date(n,t-1,r),o=I.getFullYear()-E.getFullYear();return o>=100?o-100:o}static format(e,n="-"){if(!isNumeric(e=`${e}`))throw new Error("Invalid value number format");if(e.length>12)throw new Error("Invalid value number length");const t=e.substring(0,6),r=e.substring(6,8),A=e.substring(8,12);return A?t+n+r+n+A:r?t+n+r:t}}module.exports=NRIC;