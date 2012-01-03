
try{  
	window.open("http://ax.search.itunes.apple.com/WebObjects/MZSearch.woa/wa/advancedSearch?allArtistNames="+encodeURIComponent(document.getElementById("now-artist").innerHTML)+"&completeTitle="+encodeURIComponent(document.getElementById("now-track").innerHTML)+"&entity=song&genreIndex=1&media=music&restrict=true&submit=seeAllLockups");
}
catch(err){
  	alert("Error! Are you sure theres a song playing?");
}
