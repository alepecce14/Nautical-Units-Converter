function calcola() {
	var a = parseFloat(document.querySelector("#valore1").value);
	var op = document.querySelector("#operatore").value;
	var calcolo;

	if(op == "NMkm") {
		calcolo = a * 1.852;
		
	} else if(op == "kmNM") {
		calcolo = a / 1.852;
	
	} else if(op == "ktkmh") {
		calcolo = a * 1.852;
	
	} else if(op == "kmhkt") {
		calcolo = a / 1.852;
	
	} else if(op== "kmhms") {
		calcolo = a / 3.6;
	
	} else if(op== "mskmh") {
		calcolo = a * 3.6;
		
	} else if(op== "mmHghPa") {
		calcolo = (a * 1013.25) / 760
		
	} else if(op== "hPammHg") {
		calcolo = a * 760 / 1013.25
		
	}
	
	document.querySelector("#risultato").innerHTML = calcolo;
	
	}
	
	function spiega() {
		var s = document.querySelector("#operatore").value;
		var spiega;
		
		
	
	 if(s == "NMkm") {
		spiega = 'Un miglio nautico (definito come l arco di meridiano sotteso da un angolo al centro di un primo di arco) equivale a 1.852 km. Dunque per passare da NM a km, si moltiplica il valore in NM per 1.852'
	
	} else if(s == "kmNM") {
		spiega = 'Un miglio nautico (definito come l arco di meridiano sotteso da un angolo al centro di un primo di arco) equivale a 1.852 km. Dunque per passare da km a NM, si divide il valore in km per 1.852'
	
	} else if(s == "ktkmh") {
		spiega = 'Un nodo equivale a un Miglio Nautico all ora [NM/h]. Dunque per passare da nodi a kilometri orari è necessario solo moltiplicare la velocità in nodi per 1.852 [km/NM] in modo da semplificare il NM al numeratore.'
	
	} else if(s == "kmhkt") {
		spiega = 'Un nodo equivale a un Miglio Nautico all ora [NM/h]. Dunque per passare da kilometri orari a nodi è sufficiente dividere il valore in nodi per 1.852 [NM/km] in modo da semplificare il km al numeratore'
	
	} else if(s == "kmhms") {
		spiega = 'Per passare da kilometri orari a metri al secondo è innanzitutto necessario dividere il valore in km/h per 3600 [s/h] in modo da semplificare le h al denominatore. Successivamente sarà necessario moltiplicare per 1000 [m/km] e semplificare i kilometri.' 
	
	} else if(s == "mskmh") {
		spiega = 'Per passare da m/s a km/h è necessario prima dividere il valore in m/s per 1000 [m/km] per trasformare i metri in km e successivamente moltiplicare per 3600 [s/h] per trasformare i secondi in ore. '
	
	} else if(s == "mmHghPa") {
		spiega = 'Per eseguire la conversione da mmHg a hPa è necessario applicare la proporzione 760 mmHg : 1013,25 hPa = mmHg : x . Dove 760 mmHg e 1013,25 hPa sono i valori della pressione dell atmosfera standard al livello del mare.'
	
	} else if(s == "hPammHg") {
		spiega = 'Per eseguire la conversione da mmHg a hPa è necessario applicare la proporzione 760 mmHg : 1013,25 hPa = mmHg : x . Dove 760 mmHg e 1013,25 hPa sono i valori della pressione dell atmosfera standard al livello del mare.'
	}
		document.querySelector("#spiega").innerHTML = spiega;
		
	}
