/*!
 * Bootstrap-select v1.14.0-beta3 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2022 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */(function(e,t){e===void 0&&window!==void 0&&(e=window),typeof define=="function"&&define.amd?define(["jquery"],function(e){return t(e)}):typeof module=="object"&&module.exports?module.exports=t(require("jquery")):t(e.jQuery)})(this,function(e){(function(e){e.fn.selectpicker.defaults={noneSelectedText:"Ei valintoja",noneResultsText:"Ei hakutuloksia {0}",countSelectedText:function(e){return e==1?"{0} valittu":"{0} valitut"},maxOptionsText:function(e,t){return[e==1?"Valintojen maksimimäärä ({n} saavutettu)":"Valintojen maksimimäärä ({n} saavutettu)",t==1?"Ryhmän maksimimäärä ({n} saavutettu)":"Ryhmän maksimimäärä ({n} saavutettu)"]},selectAllText:"Valitse kaikki",deselectAllText:"Poista kaikki",multipleSeparator:", "}})(e)})