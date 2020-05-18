tw.local.results = new tw.object.listOf.String();
if(tw.local.retrieveGlobalTeams_200 !=null && tw.local.retrieveGlobalTeams_200.data !=null ){
if(tw.local.retrieveGlobalTeams_200.data.teams !=null){
   for(var i=0; i< tw.local.retrieveGlobalTeams_200.data.teams.listLength; i++){
    tw.local.results.insertIntoList( tw.local.results.listLength, tw.local.retrieveGlobalTeams_200.data.teams[i].teamName);
  }
}
}