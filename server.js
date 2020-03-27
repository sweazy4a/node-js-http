var http = require('http'); // dajemy znacz naszej aplikacji ze bedziemy uzywac http
var fs = require('fs'); // podlanczamy modul - file system  dlatego zeby mozna bylo odczytywac pliki na naszym lokalnym serwerz

// Tworzymy request w ktorym bedziemy wyswietliac zawartosc index.html
function onRequest(request, response) {
    // dajemy znac naszej funkcji ze nasz plik do odczytywania jest formatu html
    response.writeHead(200, {'Content-Type': 'text/html'}); 
    
    // odczytujemy plik index.html 
    fs.readFile('./index.html', null, function(error, data) {
      // w przypadku bladu wyswietliamy wiadomosc "File not found"
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } 
        // Jezeli wszystko udalo wyswietliamy zawartosc        
        else {
            response.write(data);
        }
        // Zamykamy funkcje
        response.end();
    });


}



http.createServer(onRequest).listen(8000); // tworzymy lokalny serwer na porcie 8000 , wszystkie requesty beda na tym porcie