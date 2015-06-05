var $ = window.jQuery
var base = 'http://pokeapi.co/api/v1/egg/'
//Si necesitas ponerle API key entonces agarras y la pones en una variable
// var key = 'apikey=43480938504854380958435'
// var characgerurl = character[0].resourseURI + '?' + key
// return Promise.resolve($.get(characterUrl))
Promise.resolve($.get(base + '1'))
.then(function (results) {
  //var poke1 = results.pokemon[3]
  //return Promise.resolve($.get(base + poke1[290].resource_uri))
  var pokechara = results.pokemon
  var basechara = 'http://pokeapi.co/'
  return Promise.resolve($.get(basechara + pokechara[1].resource_uri))
})
.then(function (poke) {
  Promise.all([promise1,promise2,promise3])
  .then()
})
.catch(function () {
  debugger
})



/* var $ = window.jQuery
var url = 'http://pokeapi.co/api/v1/pokedex/1/'
//The promise didnt work for ie internet explorer so you need to download a library for this in npm
Promise.resolve($.get(url))
.then(function(results){
	var greg = results.pokemon
	debugger
})

.catch(function(err){
	console.error(err)
}) */