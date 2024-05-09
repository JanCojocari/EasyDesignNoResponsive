import axios from "axios";
export default  function sendData(data,callback){

   const TOKEN = "5877945079:AAHtSu_Syu8V5l1pl8fxeHqkO8cBGbPm4Y4";
   const CHAT_Id = "-1001813098390";
   const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;


   let message =`<b>Email: </b> ${data.email}\n`
   message += `<b>NumePrenume: </b> ${data.numeprenume}\n`
   message += `<b>____________________________</b>\n`
   message += `<b>Mesaj:</b>\n ${data.text}\n`
   message += `<b>____________________________</b>\n`
   message += `<b>Website: </b> ${data.website}\n`
   message += `<b>Logo: </b> ${data.logo}\n`
   message += `<b>VisitCard: </b> ${data.visitcard}\n`
   message += `<b>Stickers: </b> ${data.sticker}`

   axios.post(URI_API,{
     chat_id: CHAT_Id,
     parse_mode: 'html',
     text: message
   })

   callback()
}

