// Extracting title tag
function() {return document.title;}
// Extracting Meta Description
function() {return document.querySelector('meta[name="description"]').content;}
// Extracting an heading
function() {return document.querySelector("h3.class").innerHTML;}