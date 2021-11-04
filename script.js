$(function(){
    //beletesszük a kártyák adatait egy tömbbe
    const kepAdat = [
        {
            cim:"1. kép címe",
            eleresiUt:"kepek/kep1.jpg",
            leiras:"1. kép részletes leírása"
        },
        {
            cim:"2. kép címe",
            eleresiUt:"kepek/kep2.jpg",
            leiras:"2. kép részletes leírása"
        },
        {
            cim:"3. kép címe",
            eleresiUt:"kepek/kep3.jpg",
            leiras:"3. kép részletes leírása"
        }
    ];

    //van egy sablon elemünk
    //A sablonelemet klónozzuk
    //hozzácsatoljuk a szülőelemhez

    //végigmegyünk a tömbünkön és
    //a klónozott elemmel és a tömb adataival példányosítjuk a kártyánkat.
    let aktIndex = 0;
    const galeriaSzulo = $("#galeria");
    let sablonElem = $(".kartya");
    
        
    for (let index = 0; index < kepAdat.length; index++) {
        let ujElem = sablonElem.clone().appendTo(galeriaSzulo);
        const ujKartya = new Kartya(ujElem, kepAdat[index], index);  
    }
      
    
    
    const fokepSzulo = $("#fokep");
    let ujElem = sablonElem.clone().appendTo(fokepSzulo);
    const nagyKartya = new Kartya(ujElem, kepAdat[aktIndex], aktIndex);
    
    sablonElem.remove();

    

    $(window).on("kepValasztas", function(esemeny){
        
        /* $("#fokep img").attr("src", esemeny.detail.eleresiUt);
        $("#fokep h3").html(esemeny.detail.cim);
        $("#fokep p").html(esemeny.detail.leiras); */
        nagyKartya.setAdatok(esemeny.detail);
        aktIndex = esemeny.detail.index;
        console.log(aktIndex);
        
    });

    $("#jobb").on("click", function(){
        aktIndex--;
        if(aktIndex<0){
            aktIndex = kepAdat.length-1;
        }
        nagyKartya.setAdatok(kepAdat[aktIndex]);
    });
    $("#bal").on("click", function(){
        aktIndex++;
        if(aktIndex>kepAdat.length-1){
            aktIndex = 0;
        }
        nagyKartya.setAdatok(kepAdat[aktIndex]);
    });
});