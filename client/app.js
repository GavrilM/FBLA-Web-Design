Template.body.onCreated( function() {
  this.currentTab = new ReactiveVar( 2 );
  this.avail= ["view-2","view-1","view0","view1","view2"];
});

Template.body.helpers({
  tab: function() {
    return Template.instance().avail[Template.instance().currentTab.get()];
  },
  tabo: function() {
    return Template.instance().avail[Template.instance().currentTab.get()+1];
  },
  tabi: function() {
    return Template.instance().avail[Template.instance().currentTab.get()-1];
  },
});

Template.body.events({
  "click .toggle": function(e, template){
     e.preventDefault();
     if(Template.instance().currentTab.get() !=="view0"){
         template.currentTab.set(2);
         if(document.getElementById("menu").style){
          document.getElementById("menu").removeAttribute("style");
          
         
       }
         
     }
     var navs = document.querySelectorAll(".circle nav");
     var checkbox = document.getElementById("toggler");
    if(checkbox.checked){
      checkbox.checked= false; 
    }
    else{
       checkbox.checked= true;
    }
    
    var checkbox2 = document.getElementById("resizer");
      if(checkbox2.checked){
        checkbox2.checked= false; 
      }
     
     if(document.getElementById("toggler").checked){
       for(var i =0; i<2; i++){
         navs.item(i).style.display = "flex";
         
         
       }
     }
     else if(!document.getElementById("toggler").checked){
       for(var j =0; j<2; j++){
         navs.item(j).style.display ="none" ;
         
         
       }
       
     }
  },
  "click .nav-item":function(e, template){
    
    var current = event.target;
   
      var checkbox2 = document.getElementById("resizer");
      if(checkbox2.checked){
        checkbox2.checked= false; 
      } 
      
      template.currentTab.set( template.avail.indexOf(current.getAttribute( "data-template" )) );
      
      if(template.currentTab.get() === 4 || template.currentTab.get() === 3) {
       
       document.getElementById("menu").style.margin = "40vh 0 0 -0rem";
       
      }
      else if(template.currentTab.get() === 0 || template.currentTab.get() === 1){
        
        document.getElementById("menu").style.margin = "-50vh 0 0 -0rem";
         
      }
  },
  
});
