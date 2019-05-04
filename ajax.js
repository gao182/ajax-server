function ajax(options){
    var url = options.url;
    var type = options.type || 'GET';
    var data = options.data || {};
    var onsuccess = options.onsuccess || function(){};
    var dataType = options.dataType || 'json';
    var onerror = options.onerror || function(){};
    var ontimeout = options.ontimeout || function(){};

    var dataurl = [];
    for(var name in data){
        dataurl.push(name+"=" + data[name]);
    }
    dataurl = dataurl.join('&');

    if(type === 'Get'){
        url += '?' + dataurl;
    }

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open(type,url,true);
    xmlHttp.onload = function(){
        if(xmlHttp.status>=200 && xmlHttp.status<300 || xmlHttp.status === 304){
            if(dataType === 'json'){
                onsuccess(JSON.parse(xmlHttp.responseText));
            }else{
                onsuccess( xmlHttp.responseText)
            }
        }
    }
    xmlHttp.onerror = onerror;
    xmlHttp.ontimeout = ontimeout;
    if(type === 'POST'){
        xmlHttp.send(dataurl);
    }else{
        xmlHttp.send(null);
    }
}