var selectedEngine = "";

document.addEventListener("DOMContentLoaded", function(){
  let search = getCookie("search")
  for (var i=0; i<document.querySelector('select.search-engine').options.length; i++) {
    option = document.querySelector('select.search-engine').options[i];
    let choice = option.value.toLocaleLowerCase();
    if (choice == search) {
      option.setAttribute('selected', true);
    }
  }
  let action = "";
      if(search === "yahoo") {
        action = "http://www.search.yahoo.com/search";
      }
      else if(search === "qwant") {
        action = "http://www." + search + ".com/";
      }
      else {
        action = "http://www." + search + ".com/search";
      }
  document.getElementById("search-form").action = action;
  document.querySelector("select.search-engine").addEventListener("change", function(){
      selectedEngine = this.value;
      const engine = selectedEngine.toLocaleLowerCase();
      
      setCookie("search", engine, 365);
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
  });
});
