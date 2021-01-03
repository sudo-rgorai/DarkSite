var selectedEngine = "";

$(document).ready(function(){
  $("select.search-engine").change(function(){
      selectedEngine = ($(this).children("option:selected").val());
      const engine = selectedEngine.toLocaleLowerCase();
      let action = "";
      if(engine === "yahoo") {
        action = "http://www.search.yahoo.com/search";
      }
      else if(engine === "qwant") {
        action = "http://www." + engine + ".com/";
      }
      else {
        action = "http://www." + engine + ".com/search";
      }
      document.getElementById("search-form").action = action;
      console.log(action);
  });
});

