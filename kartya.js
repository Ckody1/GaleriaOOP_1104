class Kartya{
    constructor(elem, adat, index){
        //létrehozunk változókat az új elemhez
        this.elem=elem;
        //változókat az elem egyes grafikus
        this.cim=this.elem.children("h3");
        this.kep=this.elem.children("img");
        this.leiras=this.elem.children("p");
        this.adat = adat;
        this.adat.index = index;
        // konkrét elemeknek értéket adunk
        this.setAdatok(this.adat);

        this.elem.on("click", ()=>{
            this.kattintasTrigger();
        });
    }


    setAdatok(ertekek){
        this.cim.html(ertekek.cim);
        this.kep.attr("src", ertekek.eleresiUt);
        this.leiras.html(ertekek.leiras);
    }
    kattintasTrigger(){
        let esemeny = new CustomEvent("kepValasztas", {detail:this.adat});
        console.log("esemény kiváltva"); 
        window.dispatchEvent(esemeny);
    }
}