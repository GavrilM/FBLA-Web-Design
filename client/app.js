function toggleNav(){
  
  var  navs = document.querySelectorAll(".circle nav");
  
  if(document.getElementById("toggler").checked){
    
       for(var i = 0; i<navs.length; i++) {
         navs.item(i).style.display = "flex";
         
         
       }
       
     }
     else if(!document.getElementById("toggler").checked){
      
       for(var j = 0; j<navs.length; j++){
         navs.item(j).style.display ="none" ;
         
         
       }
       
     } 
     
     
}
function hideNav(item,bool){
  var navs;
  
    navs = document.querySelectorAll(".circle ul *");
  
  
  if( document.getElementById("resizer").checked || bool ){
    
       for(var i = 0; i<navs.length; i++) {
         if(navs.item(i) != item)
          navs.item(i).removeAttribute("style");
        
          
         
         
       }
       if(item)
      item.removeAttribute("style");
     }
     else if(!document.getElementById("resizer").checked){
      
       for(var j = 0; j<navs.length; j++){
         if(navs.item(j) != item){
         navs.item(j).style.opacity ="0" ;
         navs.item(j).style.marginTop ="-120vh" ;
         
         }
       }
    item.style.position = "absolute";
      item.style.top =  "10vh";
      item.style.left = "5vw";
     } 
}
function transitiontop(template,tab){
    template.topTab.set(tab);
        document.getElementById("main-block").className = "content-top";
        document.getElementById("menu").classList.add("topsidenav");
         document.getElementById("toggler").checked = true;
         toggleNav();
}
function transitionbottom(template,tab){
   template.bottomTab.set(Math.abs(tab));
        
        document.getElementById("main-block").className = "content-bottom";
        document.getElementById("menu").classList.add("bottomnav");
        document.getElementById("toggler").checked = true;
        toggleNav();
}

Template.body.onCreated( function() {
  this.topTab = new ReactiveVar( 1 );
  this.topViews= [null,"view2","view1","weed"];
  this.bottomTab = new ReactiveVar( 1 );
  this.bottomViews= [null,"view-1","view-2","surprise"];
  this.side = new ReactiveVar(0);
  this.expand = new ReactiveVar();
  
});

Template.body.helpers({
  toptab: function() {
    return Template.instance().topViews[Template.instance().topTab.get()];
  },
  
  bottomtab: function() {
    return Template.instance().bottomViews[Template.instance().bottomTab.get()];
  }
  
});

Template.body.events({
  "click .toggle": function(e, template){
     e.preventDefault();
     var checkbox2 = document.getElementById("resizer");
     var circle = document.getElementById("menu");
     if(Template.instance().side.get() !==0){
         if(checkbox2.checked){
        
         
        checkbox2.checked= false;
       
        hideNav(Template.instance().expand.get() , true);
        
        toggleNav();
        
        document.getElementById("clicker").removeAttribute("style");
        
        return;
      }
        
    if(circle.style){
          circle.removeAttribute("style");       
       }
         
    if(circle.classList.contains("topsidenav")){
      circle.classList.remove("topsidenav");
     }
     else if(circle.classList.contains("bottomnav")){
       circle.classList.remove("bottomnav");
     }
       document.getElementById("main-block").className = "content-wrapper";
         template.side.set(0); 
     }
     
     
     var checkbox = document.getElementById("toggler");
     
          document.getElementById("clicker").removeAttribute("style");
     
    
    
    
    
      if(checkbox2.checked){
        
         
        checkbox2.checked= false;
       
        hideNav(Template.instance().expand.get() , true);
        
        toggleNav();
        
        return;
      }
      
    if(checkbox.checked){
      checkbox.checked= false;
      
    }
    else{
       checkbox.checked= true;
    }
     
      toggleNav();
  },
  "click .nav-item":function(e, template){
    
    var current = event.target;
   var circle = document.getElementById("menu");
    var tab = parseInt(current.getAttribute("data-template"));
      var checkbox2 = document.getElementById("resizer").checked= false;
     
    
      //document.getElementById("toggler").checked = false;
      
       // toggleNav();
      
      
      template.side.set(Math.abs(tab)/tab);
      var side = template.side.get();
            
      if(side > 0) {
         if(circle.classList.contains("bottomnav")){
      circle.classList.remove("bottomnav");
     }
        transitiontop(template,tab);
        
      }
      else{
         if(circle.classList.contains("topsidenav")){
      circle.classList.remove("topsidenav");
     }
       transitionbottom(template,tab);
      }
        
      
  },
  "click .nav-expand": function(e,t){
    var current = event.target;
    //document.getElementById("main-block").className = "content-wrapper";
    //t.side.set(0);
    document.getElementById("menu").removeAttribute("style");
    if(current.tagName !== "LABEL"){
      current = current.parentElement;
    }
    
    hideNav(current);
    Template.instance().expand.set(current);
    
    
    var center  =  document.getElementById("clicker");
    if(document.getElementById("resizer").checked){
      center.removeAttribute("style");
      
    }
    else{
      
      center.style.position ="absolute";
      center.style.top = "7vh";
      center.style.right = "7vh";
    }
    
  },
  "click .split-top": function(e,t){
    transitiontop(t,1); 
    t.side.set(1);
  },
  "click .split-bottom": function(e,t){
    transitionbottom(t,1); 
   t.side.set(-1);
  }
});


