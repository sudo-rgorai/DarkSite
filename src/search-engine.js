var selectedEngine = "";

$(document).ready(function(){
  $("select.search-engine").change(function(){
      selectedEngine = $(this).children("option:selected").val();
      console.log("Searching on " + selectedEngine);
  });
});

