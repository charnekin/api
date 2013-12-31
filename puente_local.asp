<%@ Language = "VBScript"
%><%
  Response.Buffer = false 
  
  'The response.ContentType with UTF-8 returns BAD characters... and with application/json gives an [Object object]
  'Response.ContentType="application/json; charset=UTF-8"
  Response.ContentType="text/plain; charset=ISO-8859-1"
 
  ' Desde 3 Cantos ->  la url = "http://10.225.218.10:7777/autogestion/json/ServiciosHTML"
  ' Desde local -> 
    url = "http://172.28.249.23/puente.asp"   
  
  set xmlhttp = CreateObject("MSXML2.ServerXMLHTTP") 
  xmlhttp.open "POST", url, false 

  'Add Authorization header. testJSON.js:112
  'xmlhttp.setRequestHeader "Authorization", "Basic YXBwTWlNb3Zpc3RhcjppR2g2ejRVdw=="
  
  'Content Type
  xmlhttp.setRequestHeader "ContentType", "application/json"
  xmlhttp.setRequestHeader "Cache-Control", "no-cache"

  'Send the parameters
  xmlhttp.send Request.BinaryRead(Request.TotalBytes)
  'xmlhttp.send "{""dn"":""5512594244"",""plataforma"":""APPKIOSKO"",""metodo"":""recuperarContrasenia""}"

  'Returns the json from server

  If (xmlhttp.status = 200) Then
    'returns a json
    Response.write xmlhttp.responseText
  Else
    Response.write "{""_respuesta"":{""_error"":""99"",""_descripcion"":""Error en la respuesta al puente.asp.""},""_contenido"":[]}"


    'Response.write "Hubo un error -"
    'Response.write xmlhttp.status
    'Response.write "- Texto de error: "
    'Response.write xmlhttp.statusText
  End If

  set xmlhttp = nothing 

%>