function tableToExcel(id_tabla, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(id_tabla);
    var tableHTML= "<table border = 1 >"+ tableSelect.innerHTML + "</table>";
    tableHTML = tableHTML.replace(/ /g, '%20');
    tableHTML = removeAccentMark(tableHTML)
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}

function removeAccentMark(text){
    const accentMark = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
    return text.split('').map( word => accentMark[word] || word).join('').toString(); 
}

module.exports = {
    tableToExcel
}