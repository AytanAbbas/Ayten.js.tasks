// class Profit {
//   constructor (CostPrice,SellPrice,Inventory)
//    { this.costPrice =CostPrice;
//     this.sellPrice=SellPrice;
//     this.inventory=Inventory
//    } 
// }


// let getProfit =(obj)=> {
   
//     return (obj.sellPrice-obj.costPrice)*obj.inventory

// }
// let profit1=new Profit(15,20,100);
// console.log(getProfit(profit1));





// class Range {
//     constructor(Min,Max){
//         this.min=Min,
//         this.max=Max
//        }

// }

// let IsInRange =(number,obj)=>{
// if (obj.min<=number&& number<=obj.max) {return true
// }
// else
//  {return false}
// }

// let object =new Range (4,46);
// console.log(IsInRange( 7,object));

// let Calculate=document.getElementById("submit");
//  Calculate.addEventListener("click",function(e){
//     e.preventDefault();

//     let radius =Number(document.getElementById("radius").value);
//     let volume = (4/3)* Math.PI * Math.pow(radius, 3);
//     console.log(volume);
    
//     document.getElementById("volume").value =Math.round(volume);
//  })




// function Options()
// {



// let opt = document.getElementsByClassName("opt")

// for (i=0;i<opt.length;i++)
//  {

//  }
// alert(opt.length);
// }
// Options();


// let y = document.getElementById("w3r").type; 
//   alert('The value of the type attribute of the link is : '+y);  
//   let a = document.getElementById("w3r").rel; 
//   alert('The value of the type attribute of the link is : '+a);  
//   let b = document.getElementById("w3r").target; 
//   alert('The value of the type attribute of the link is : '+b);  
 
// function Value()
// {
// let form=document.getElementById("form1");
//   for (let i=0;i<form.length;i++)
//   {
//    if (form.elements[i].value!='Submit')
//     {  
//       console.log(form.elements[i].value);
//      }  
//    }
// }
  

    let Year=document.getElementById("year");
    let Month=document.getElementById("month");
    let Day=document.getElementById("date");


const moonLanding = new Date();


function myFunction() {
    if (Year.length==4) {
                if (Month>=1 && month<=12) {
                    if (Day>=1 && day<=31) {
                         moonLanding.getMonth(Month);
                   moonLanding.getDate(Day);
                   moonLanding.getFullYear(Year);
                      
                    }
                }
            }
   
 
}

    