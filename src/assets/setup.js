  function Onload(){
        if(document.getElementById("startarloader")){
        document.getElementById("startarloader").style.visibility = "hidden";
        }
        document.body.classList.toggle('dark', false); 
        document.title = window.setup.name; 
        // var Tawk_API=Tawk_API||{},Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src='https://embed.tawk.to/5dbff1ec154bf74666b75aec/default';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})();
        // window.Tawk_API = Tawk_API;
  } 
  
   window.clientid =false; // selfhost shopid; 
        // stockapp setup
        window.setup = {
                type:"main",  
                appid:"io.stockapp.starter",  
                name: "StockApp", 
                namestr:"stockapp", 
                domainname:"stockapp.africa",  
                appversion:400,
                icon:"https://stockapp.africa/logo.png", 
                faveicon:"", 
                baseurl:   "https://staging.stockapp.africa/app/v4/", //  php -S 0.0.0.0:8000 
                request_mpesa_payment_url:"https://staging.stockapp.africa/app/v4/Paymentsprocessor/mpesaPay", 
                agentid:0, // agentid if any; // rahmatid = "45193" ,  = "" 
                themecolor:"#4169e1", 
                primarycolor:"#4169e1", 
                // store urls
                playstore_url:"https://play.google.com/store/apps/developer?id=io.storckapp.starter", 
                appstore_url:"https://apps.apple.com/ke/app/stockapp/id292200",
                appstoreid:"id292200",
                
                webapp_url:"https://web.stockapp.africa" , 
                onlinestoreurl:"https://staging.stockapp.africa/web",
                
                whatsapp_phone:" +254722794549", 
                call_phone:" +254722794549", 
                phone:" +254722794549", 
                email:"info@stockapp.africa", 
                contacts:{
                  email:"info@stockapp.africa",
                  phone:"+254722794549",
                  pobox:"0722794549, 80100",
                  street:" Nkurumah Road, Building: Swahilipot",
                  country:"Kenya",
                  website:"https://stockapp.africa"  
                },
                socials:{
                  twitter:"https://mobile.twitter.com/StockApp",
                  instagram:"https://www.instagram.com/_stockapp/",
                  facebook:"https://m.facebook.com/StockAppLtd/",
                  youtube:"https://m.youtube.com/channel/UC4MMxUcRSs8dmB4KpGcYpeA", 
                }
        }
   
        //  duka whitelable setup;
        //  window.setup =  {
        //             type:"whitelabelpos",   // whitelabelpos; // if whitelabelshop; 
        //             defaultshop: "19947",
        //             appid:"io.duka.pos",  
        //             name: "Duka Group", 
        //             appversion:400,
        //             namestr:"duka", 
        //             domainname:"pos.dukagroup.com",  
        //             icon:"", 
        //             faveicon:"",
        //             baseurl: "https://staging.stockapp.africa/app/v4/", // ,
        //             request_mpesa_payment_url:"https://staging.stockapp.africa/app/v4/Paymentsprocessor/mpesaPay", 
        //             agentid:0, // agentid if any; // rahmatid = "45193" ,  = "" 
        //             themecolor:"#201b50", 
        //             primarycolor:"#afd137", 
        //             //  store urls
        //             playstore_url:"https://play.google.com/store/apps/developer?id=Duka+group+B.V.", 
        //             appstore_url:"https://apps.apple.com/ke/app/stockapp/id292200",
                    
        //             webapp_url:"pos.dukagroup.com" , 
        //             whatsapp_phone:" +2330505800689", 
        //             call_phone:" +2330505800689", 
        //             phone:" +2330505800689", 
        //             email:"info@dukagroup.com", 
        //             contacts:{
        //               email:"info@dukagroup.com",
        //               phone:"+2330505800689",
        //               pobox:"0722794549, 80100",
        //               street:" Nkurumah Road, Building: Swahilipot",
        //               country:"Kenya",
        //               website:"stockapp.africa"  
        //             },
        //             socials:{
        //               twitter:"https://mobile.twitter.com/StockApp",
        //               instagram:"https://www.instagram.com/_stockapp/",
        //               facebook:"https://m.facebook.com/StockAppLtd/",
        //               youtube:"https://m.youtube.com/channel/UC4MMxUcRSs8dmB4KpGcYpeA", 
        //             }
        //     }
        // rahmat whitelable



 //   window.setup = {
 //           type:"whitelabel", // "whitelable","agent";
 //           appid:"io.rahmat.app", // "io.stockapp.starter", // "io.duka.pos" , "io.duka.shop" , "io.rahmat.app"
 //           name: "Rahmat Business",//"StockApp", // "Duka Group",// "Rahmat Busniess"
 //           namestr:"rahmat",//"stockapp","rahmat"
 //           domainname:"rahmatbusiness.com", //"stockapp.africa",  
 //           icon:"", 
//  appversion:400,
 //           faveicon:"",
 //           baseurl: "https://staging.stockapp.africa/app/v4/", // ,
 //           request_mpesa_payment_url:"https://staging.stockapp.africa/app/v4/Paymentsprocessor/mpesaPay", 
 //           agentid:"45193", // agentid if any; // rahmatid = "45193" ,  = "" 
 //           themecolor:"#091b24",//   duka "#201b50", //- "#1565ea" ,//stockapp  ,"#091b24",//rahmat,
 //           primarycolor:"#ebd149",// duka "#afd137", //- "#3780ff",//stockapp -  ,"#ebd149",//rahmat
 //           //  store urls
 //           playstore_url:"https://play.google.com/store/apps/developer?id=io.rahmat.app.",//duka  https://play.google.com/store/apps/details?id=io.stockapp.starter",//stockapp , "https://play.google.com/store/apps/details?id=io.rahmat.app", // rahmat
 //           appstore_url:"https://apps.apple.com/ke/app/stockapp/io.rahmat.app",
           
 //           webapp_url:"rahmatbusiness.com" ,// duka  "https://web.stockapp.africa", //stockapp  "rahmatbusiness.com" , //rahmat ,
 //           whatsapp_phone:" +2348116904287",//duka   "+254722794549",//stockapp //+2348116904287 ,//-rahmat; // "+2348116904287" ,//duka
 //           call_phone:" +2348116904287",//duka   "+254722794549",//stockapp  // +2348116904287 -,// rahmat;  // "+2348116904287",//duka
 //           phone:" +2348116904287",//duka   "+254722794549",//stockapp  // +2348116904287 -,// rahmat;  // " +2330505800689",//duka
 //           email:"info@rahmatbusiness.com",//duka "info@stockapp.africa",// stockapp  // info@rahmatbusiness.com,// rahmat; // 
 //           contacts:{
 //             email:"info@rahmatbusiness.com",
 //             phone:"+2348116904287",
 //             pobox:"2348116904287",
 //             street:"",
 //             country:"Nigeria",
 //             website:"rahmatbusiness.com"  
 //           },
 //           socials:{
 //             twitter:"",//"https://mobile.twitter.com/StockApp",
 //             instagram:"",//"https://www.instagram.com/_stockapp/",
 //             facebook:"",//"https://m.facebook.com/StockAppLtd/",
 //             youtube:"",//"https://m.youtube.com/channel/UC4MMxUcRSs8dmB4KpGcYpeA", 
 //           }
 //  }
