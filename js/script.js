function myFunction()
{
  
    var str="&#8486;"; // for OHM Entity
    var resistor_Bands=document.getElementById("resistorBands").value;
    var band_1=document.getElementById("band1").value;
    var band_2=document.getElementById("band2").value;
    var band_3=document.getElementById("band3").value;
    var band_4=document.getElementById("band4").value;
    var band_5=document.getElementById("band5").value;
    var band_6=document.getElementById("band6").value;
    var textBox=document.getElementById("output").value; //get textBox attributes

    var bandsConcadination=0;
    var undeclaredBand=band_3=="gold" || band_4=="gold"?10/100:10/1000;
    switch(resistor_Bands)
    {
        case '3':bandsConcadination=(parseInt(band_1+band_2))*(band_3=="gold"||band_3=="silver"?undeclaredBand:10**band_3);break;
        case '4':bandsConcadination=(parseInt(band_1+band_2))*(band_3=="gold"||band_3=="silver"?undeclaredBand:10**band_3);break;
        case '5':bandsConcadination=(parseInt(band_1+band_2+band_3))*(band_4=="gold"||band_4=="silver"?undeclaredBand:10**band_4);break;
        case '6':bandsConcadination=(parseInt(band_1+band_2+band_3))*(band_4=="gold"||band_4=="silver"?undeclaredBand:10**band_4);break;
    }
    
    if(bandsConcadination>=1000)
    {
        bandsConcadination=bandsConcadination/1000;
        bandsConcadination=bandsConcadination+"k";
    }
    document.getElementById("output").value=bandsConcadination+"  "+htmlDecode(str);

   // alert(bandsConcadination);
    // document.getElementById("row5").style.visibility="hidden"; //to disappear anything

}
function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }
function controlBands()
{
    var output=0;
    var resistor_Bands=document.getElementById("resistorBands").value;

    var row0=document.getElementById("row1");
    var row1=document.getElementById("row2");
    var row2=document.getElementById("row3");
    var row3=document.getElementById("row4");
    var row4=document.getElementById("row5");
    var row5=document.getElementById("row6");
    var row6=document.getElementById("row7");
 
    switch(resistor_Bands)
    {
        case '3':document.getElementById("row5").style.display="none";
               document.getElementById("row6").style.display="none";
               document.getElementById("row7").style.display="none";
               break;
        case '4':document.getElementById("row6").style.display="none";
                document.getElementById("row7").style.display="none";
                document.getElementById("row5").style.display="block";
                break;
        case '5':document.getElementById("row7").style.display="none";
                document.getElementById("row5").style.display="block";
                document.getElementById("row6").style.display="block";break;
        case '6':document.getElementById("row5").style.display="block";
                 document.getElementById("row6").style.display="block";
                 document.getElementById("row7").style.display="block";break;
    }

    return 0;
}
