/*!
 * Bootstrap-select v1.14.0-beta3 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2022 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */(function(e,t){e===void 0&&window!==void 0&&(e=window),typeof define=="function"&&define.amd?define(["jquery"],function(e){return t(e)}):typeof module=="object"&&module.exports?module.exports=t(require("jquery")):t(e.jQuery)})(this,function(e){(function(e){e.fn.selectpicker.defaults={noneSelectedText:"Ingen valgt",noneResultsText:"Søket gir ingen treff {0}",countSelectedText:function(e){return e==1?"{0} alternativ valgt":"{0} alternativer valgt"},maxOptionsText:function(e,t){return[e==1?"Grense nådd (maks {n} valg)":"Grense nådd (maks {n} valg)",t==1?"Grense for grupper nådd (maks {n} grupper)":"Grense for grupper nådd (maks {n} grupper)"]},selectAllText:"Merk alle",deselectAllText:"Fjern alle",multipleSeparator:", "}})(e)})