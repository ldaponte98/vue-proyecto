function getCurrent() {
    var currentdate = new Date(); 
    let year = currentdate.getFullYear()
    let month = (currentdate.getMonth()+1) > 9 ? 
                        currentdate.getMonth() + 1 : 
                        '0' + (currentdate.getMonth() + 1)
    let day	= 	currentdate.getDate() > 9 ? 
                        currentdate.getDate() : 
                        '0' + currentdate.getDate()
    let hour = 	currentdate.getHours() > 9 ? 
                       currentdate.getHours() : 
                       '0' + currentdate.getHours()	
    let minute =currentdate.getMinutes() > 9 ? 
                       currentdate.getMinutes() : 
                       '0' + currentdate.getMinutes() 
    let second = currentdate.getSeconds() > 9 ? 
                       currentdate.getSeconds() : 
                       '0' + currentdate.getSeconds()
    
    let res = `${year}-${month}-${day} ${hour}:${minute}:${second}`;  
    currentdate = null; 
    year = null;
    month = null;
    day = null;
    hour = null;
    minute = null;
    second = null;
    return res;
}

module.exports = {
    getCurrent
}