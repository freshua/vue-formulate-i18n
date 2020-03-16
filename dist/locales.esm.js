function e(e){return"string"==typeof e?e[0].toUpperCase()+e.substr(1):e}var r={accepted:function(e){return"Accepter venligst "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" skal være efter "+a[0]+".":e(n)+" skal være en senere dato."},alpha:function(r){return e(r.name)+" kan kun indeholde bogstaver."},alphanumeric:function(r){return e(r.name)+" kan kun indeholde bogstaver og tal."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" skal være før "+a[0]+".":e(n)+" skal være en tidligere dato."},between:function(r){var n=r.name,a=r.value,t=r.args;return isNaN(a)?e(n)+" skal være mellem "+t[0]+" og "+t[1]+" tegn.":e(n)+" skal være mellem "+t[0]+" og "+t[1]+"."},confirm:function(r){var n=r.name;r.args;return e(n)+" matcher ikke."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" er ikke gyldig, brug venligst formatet "+a[0]:e(n)+" er ikke en gyldig dato."},default:function(e){e.name;return"Dette felt er ikke gyldigt."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” er ikke en gyldig email-adresse.":"Indtast venligst en gyldig email-adresse."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” slutter ikke med en gyldig værdi.":"Dette felt slutter ikke med en gyldig værdi."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” er ikke en tilladt "+n+".":"Dette er ikke en tilladt "+n+"."},matches:function(r){return e(r.name)+" er ikke en gyldig værdi."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Du kan kun vælge "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" skal være mindre end eller lig "+t[0]+".":e(n)+" skal være mindre end eller lig "+t[0]+" tegn."},mime:function(r){var n=r.name,a=r.args;return e(n)+" skal være af typen: "+(a[0]||"Ingen tilladte filformater.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Du skal vælge mindst "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" skal være mere end "+t[0]+".":e(n)+" skal være mere end "+t[0]+" tegn."},not:function(e){var r=e.name;return"“"+e.value+"” er ikke en gyldig "+r+"."},number:function(r){return e(r.name)+" skal være et tal."},required:function(r){return e(r.name)+" er påkrævet."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” starter ikke med en gyldig værdi.":"Dette felt starter ikke med en gyldig værdi."},url:function(e){e.name;return"Indtast venligst en gyldig URL."}};function n(e){var n;e.extend({locales:(n={},n.da=r,n)})}var a={accepted:function(e){return e.name+" erfordert Zustimmung."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" muss auf "+a[0]+" folgen.":e(n)+" muss ein späteres Datum sein."},alpha:function(r){return e(r.name)+" darf nur Buchstaben enthalten."},alphanumeric:function(r){return e(r.name)+" darf nur Buchstaben und Zahlen enthalten."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" muss vor "+a[0]+" sein.":e(n)+" muss ein früheres Datum sein."},between:function(r){var n=r.name,a=r.value,t=r.args;return isNaN(a)?e(n)+" muss zwischen "+t[0]+" und "+t[1]+" Zeichen lang sein.":e(n)+" muss zwischen "+t[0]+" und "+t[1]+"."},confirm:function(r){var n=r.name;r.args;return e(n)+" stimmt nicht überein."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" ist nicht korrekt, bitte das Format "+a[0]+" benutzen.":e(n)+" ist kein gültiges Datum."},default:function(e){e.name;return"Das Feld hat einen Fehler."},email:function(e){e.name;var r=e.value;return r?"„"+r+"“ ist keine gültige E-Mail-Adresse.":"Bitte eine gültige E-Mail-Adresse eingeben."},endsWith:function(e){e.name;var r=e.value;return r?"„"+r+"” endet nicht mit einem gültigen Wert.":"Dieses Feld endet nicht mit einem gültigen Wert"},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"„"+e(a)+"“ ist kein gültiger Wert für "+n+".":"Dies ist kein gültiger Wert für "+n+"."},matches:function(r){return e(r.name)+" ist kein gültiger Wert."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Es dürfen nur "+t[0]+" "+n+" ausgewählt werden.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" muss kleiner oder gleich "+t[0]+" sein.":e(n)+" muss "+t[0]+" oder weniger Zeichen lang sein."},mime:function(r){var n=r.name,a=r.args;return e(n)+" muss den Typ "+(a[0]||"Keine Dateien erlaubt")+" haben."},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Es müssen mindestens "+t[0]+" "+n+" ausgewählt werden.";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" muss größer als "+t[0]+" sein.":e(n)+" must "+t[0]+" oder mehr Zeichen lang sein."},not:function(e){var r=e.name;return"„"+e.value+"“ ist kein erlaubter Wert für "+r+"."},number:function(r){return e(r.name)+" muss eine Zahl sein."},required:function(r){return e(r.name)+" ist ein Pflichtfeld."},startsWith:function(e){e.name;var r=e.value;return r?"„"+r+"” beginnt nicht mit einem gültigen Wert":"Dieses Feld beginnt nicht mit einem gültigen Wert"},url:function(r){return e(r.name)+" muss eine gültige URL sein."}};function t(e){var r;e.extend({locales:(r={},r.de=a,r)})}var i={accepted:function(e){return"Please accept the "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" must be after "+a[0]+".":e(n)+" must be a later date."},alpha:function(r){return e(r.name)+" can only contain alphabetical characters."},alphanumeric:function(r){return e(r.name)+" can only contain letters and numbers."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" must be before "+a[0]+".":e(n)+" must be an earlier date."},between:function(r){var n=r.name,a=r.value,t=r.args;return isNaN(a)?e(n)+" must be between "+t[0]+" and "+t[1]+" characters long.":e(n)+" must be between "+t[0]+" and "+t[1]+"."},confirm:function(r){var n=r.name;r.args;return e(n)+" does not match."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" is not a valid, please use the format "+a[0]:e(n)+" is not a valid date."},default:function(e){e.name;return"This field isn’t valid."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” is not a valid email address.":"Please enter a valid email address."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” doesn’t end with a valid value.":"This field doesn’t end with a valid value."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” is not an allowed "+n+".":"This is not an allowed "+n+"."},matches:function(r){return e(r.name)+" is not an allowed value."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"You may only select "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" must be less than or equal to "+t[0]+".":e(n)+" must be less than or equal to "+t[0]+" characters long."},mime:function(r){var n=r.name,a=r.args;return e(n)+" must be of the the type: "+(a[0]||"No file formats allowed.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"You must select at least "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" must be more than "+t[0]+".":e(n)+" must be more than "+t[0]+" characters long."},not:function(e){var r=e.name;return"“"+e.value+"” is not an allowed "+r+"."},number:function(r){return e(r.name)+" must be a number."},required:function(r){return e(r.name)+" is required."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” doesn’t start with a valid value.":"This field doesn’t start with a valid value."},url:function(e){e.name;return"Please include a valid url."}};function u(e){var r;e.extend({locales:(r={},r.en=i,r)})}var o={accepted:function(e){return"Merci d'accepter les "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" doit être postérieur à "+a[0]+".":e(n)+" doit être une date ultérieure."},alpha:function(r){return e(r.name)+" peut uniquement contenir des lettres."},alphanumeric:function(r){return e(r.name)+" peut uniquement contenir des lettres ou des chiffres"},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" doit être antérieur à "+a[0]+".":e(n)+" doit être une date antérieure."},between:function(r){var n=r.name,a=r.value,t=r.args;return isNaN(a)?e(n)+" doit être compris entre "+t[0]+" et "+t[1]+" caractères.":e(n)+" doit être compris entre "+t[0]+" et "+t[1]+"."},confirm:function(r){var n=r.name;r.args;return e(n)+" ne correspond pas."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" n'est pas valide.  Merci d'utiliser le format "+a[0]:e(n)+" n'est pas une date valide."},default:function(e){e.name;return"Ce champ n'est pas valide."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” n'est pas une adresse email valide.":"Merci d'entrer une adresse email valide."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” ne termine pas par une valeur correcte.":"Ce champ ne termine pas par une valeur correcte."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” n'est pas un(e) "+n+" autorisé(e).":"Cette valeur n'est pas un(e) "+n+" autorisé(e)."},matches:function(r){return e(r.name)+" n'est pas une valeur autorisée."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Vous pouvez uniquement sélectionner "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" doit être inférieur ou égal à "+t[0]+".":e(n)+" doit être inférieur ou égal à "+t[0]+" caractères."},mime:function(r){var n=r.name,a=r.args;return e(n)+" doit être de type: "+(a[0]||"Aucun format autorisé.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Vous devez sélectionner au moins "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" doit être supérieur à "+t[0]+".":e(n)+" doit être plus long que "+t[0]+" caractères."},not:function(e){var r=e.name;return"“"+e.value+"” n'est pas un(e) "+r+" autorisé(e)."},number:function(r){return e(r.name)+" doit être un nombre."},required:function(r){return e(r.name)+" est obligatoire."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” ne commence pas par une valeur correcte.":"Ce champ ne commence pas par une valeur correcte."},url:function(e){e.name;return"Merci d'entrer une URL valide."}};function s(e){var r;e.extend({locales:(r={},r.fr=o,r)})}var l={accepted:function(e){return e.name+"を承認してください。"},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+"は "+a[0]+" 以降にしてください。":e(n)+"はより後にしてください。"},alpha:function(r){return e(r.name)+"にはアルファベットのみ使用できます。"},alphanumeric:function(r){return e(r.name)+"には英数字のみ使用できます。"},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+"は "+a[0]+" 以前にしてください。":e(n)+"はより前にしてください。"},between:function(r){var n=r.name,a=r.value,t=r.args;return isNaN(a)?e(n)+"は"+t[0]+"文字から"+t[1]+"文字でなければなりません。":e(n)+"は"+t[0]+"から"+t[1]+"の間でなければなりません。"},confirm:function(r){var n=r.name;r.args;return e(n)+"が一致しません。"},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+"は有効な形式ではありません。次のフォーマットで入力してください: "+a[0]:e(n)+"は有効な形式ではありません。"},default:function(e){e.name;return"有効な値ではありません。"},email:function(e){e.name;var r=e.value;return r?"“"+r+"” は有効なメールアドレスではありません。":"有効なメールアドレスを入力してください。"},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” は有効な値で終わっていません。":"有効な値で終わっていません。"},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” は許可された"+n+"ではありません。":"許可された"+n+"ではありません。"},matches:function(r){return e(r.name)+"は許可された値ではありません。"},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return n+"は"+t[0]+"項目しか選択できません。";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+"は"+t[0]+"以下でなければなりません。":e(n)+"は"+t[0]+"文字以下でなければなりません。"},mime:function(r){var n=r.name,a=r.args;return e(n)+"は次のファイル形式でなければなりません: "+(a[0]||"許可されたファイル形式がありません")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return n+"は"+t[0]+"項目以上選択してください。";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+"は"+t[0]+"以上でなければなりません。":e(n)+"は"+t[0]+"文字以上でなければなりません。"},not:function(e){var r=e.name;return"“"+e.value+"” は許可された"+r+"ではありません。"},number:function(r){return e(r.name)+"には数字のみ使用できます。"},required:function(r){return e(r.name)+"は必須項目です。"},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” は有効な値で始まっていません。":"有効な値で始まっていません。"},url:function(e){e.name;return"有効なURLを入力してください。"}};function m(e){var r;e.extend({locales:(r={},r.ja=l,r)})}var c={accepted:function(e){return"Por favor aceite o "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" deve ser posterior a "+a[0]+".":e(n)+" deve ser uma data posterior."},alpha:function(r){return e(r.name)+" pode conter apenas letras."},alphanumeric:function(r){return e(r.name)+" pode conter apenas letras e números."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" deve ser antes de "+a[0]+".":e(n)+" deve ser uma data anterior."},between:function(r){var n=r.name,a=r.value,t=r.args;return isNaN(a)?e(n)+" deve ter entre "+t[0]+" e "+t[1]+" caracteres.":e(n)+" deve ser entre "+t[0]+" e "+t[1]+"."},confirm:function(r){var n=r.name;r.args;return e(n)+" não corresponde."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" não é válido, por favor use o formato "+a[0]:e(n)+" não é uma data válida."},default:function(e){e.name;return"Este campo não é válido."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” não é um e-mail válido.":"Por favor informe um e-mail válido."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” não termina com um valor válido.":"Este campo não termina com um valor válido."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” não é um "+n+" permitido.":"Isso não é um "+n+" permitido."},matches:function(r){return e(r.name)+" não é um valor válido."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Você deve selecionar apenas "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve ser menor ou igual a "+t[0]+".":e(n)+" deve ter no máximo "+t[0]+" caracteres."},mime:function(r){var n=r.name,a=r.args;return e(n)+" deve ser no formato: "+(a[0]||"Formato de arquivo não permitido.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Você deve selecionar pelo menos "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve ser maior que "+t[0]+".":e(n)+" deve ter mais de "+t[0]+" caracteres."},not:function(e){var r=e.name;return"“"+e.value+"” não é um "+r+" válido."},number:function(r){return e(r.name)+" deve ser um número."},required:function(r){return e(r.name)+" é obrigatório."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” não começa com um valor válido.":"Este campo não começa com um valor válido."},url:function(e){e.name;return"Por favor informe uma URL válida."}};function v(e){var r;e.extend({locales:(r={},r.pt=c,r)})}var f={accepted:function(e){return"Per favore, accetta il campo "+e.name+"."},after:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" deve essere una data successiva al "+a[0]+".":e(n)+" deve essere una data successiva a quella attuale."},alpha:function(r){return e(r.name)+" può contenere solo lettere."},alphanumeric:function(r){return e(r.name)+" può contenere solo lettere e numeri."},before:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" deve essere una data precedente al "+a[0]+".":e(n)+" deve essere una data precedente a quella attuale."},between:function(r){var n=r.name,a=r.value,t=r.args;return isNaN(a)?e(n)+" deve avere una lunghezza compresa tra "+t[0]+" e "+t[1]+" caratteri.":e(n)+" deve essere tra "+t[0]+" e "+t[1]+"."},confirm:function(r){var n=r.name;r.args;return e(n)+" non corrisponde."},date:function(r){var n=r.name,a=r.args;return Array.isArray(a)&&a.length?e(n)+" non è una data valida. Per favore usa il formato "+a[0]:e(n)+" non è una data valida."},default:function(e){e.name;return"Questo campo non è valido."},email:function(e){e.name;var r=e.value;return r?"“"+r+"” non è un indirizzo email valido.":"Per favore, inserisci un indirizzo email valido."},endsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” non termina con un valore valido.":"Questo campo non termina con un valore valido."},in:function(r){var n=r.name,a=r.value;return"string"==typeof a&&a?"“"+e(a)+"” non è un valore valido per il campo "+n+".":n+" invalido."},matches:function(r){return e(r.name)+" invalido."},max:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Puoi selezionare al massimo "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve essere inferiore o uguale a "+t[0]+".":e(n)+" deve essere inferiore o uguale a "+t[0]+" caratteri."},mime:function(r){var n=r.name,a=r.args;return e(n)+" deve essere del tipo: "+(a[0]||"Nessun formato file autorizzato.")},min:function(r){var n=r.name,a=r.value,t=r.args;if(Array.isArray(a))return"Devi selezionare almeno "+t[0]+" "+n+".";var i=!(!Array.isArray(t)||!t[1])&&t[1];return!isNaN(a)&&"length"!==i||"value"===i?e(n)+" deve essere maggiore di "+t[0]+".":e(n)+" deve essere più lungo di "+t[0]+" caratteri."},not:function(e){var r=e.name;return"“"+e.value+"” non è un valore valido per il campo "+r+"."},number:function(r){return e(r.name)+" deve essere un numero."},required:function(r){return e(r.name)+" è un campo obbligatorio."},startsWith:function(e){e.name;var r=e.value;return r?"“"+r+"” non inizia con un valore valido.":"Questo campo non inizia con un valore valido."},url:function(e){e.name;return"Per favore inserisci un URL valido."}};function d(e){var r;e.extend({locales:(r={},r.it=f,r)})}export{n as da,t as de,u as en,s as fr,d as it,m as ja,v as pt};
